import assert from 'node:assert'
import * as E from 'fp-ts/lib/Either.js'
import * as A from 'fp-ts/lib/Array.js'
import {pipe, identity as id} from 'fp-ts/lib/function.js'
import {units} from './data.js'
import type {
	TeachingPeriod,
	Unit,
	UnitCode,
	UnitRequirement,
	ScheduleParameters as _ScheduleParameters,
} from 'shared'

type ScheduleParameters = Omit<_ScheduleParameters, 'wantedElectives'> & {
	wantedElectives: (Unit & {semester: 1 | 2 | undefined})[]
}

interface Year {
	sem1Units: Unit[]
	sem2Units: Unit[]
}

export interface Schedule {
	years: Year[]
}

type Course = 'C2001'

const canAddPrereqHelper = (
	current: Schedule,
	before: Unit[],
	req: UnitCode | UnitRequirement,
): boolean => {
	if (typeof req === 'string') {
		const unitName = req
		return pipe(
			before,
			A.map((unit: Unit) => unit.code),
			codes => codes.includes(unitName),
		)
	} else {
		if (req.operator == 'AND') {
			return pipe(
				req.items,
				A.map(r => canAddPrereqHelper(current, before, r)),
				A.every(id),
			)
		} else if (req.operator == 'OR') {
			return pipe(
				req.items,
				A.map(r => canAddPrereqHelper(current, before, r)),
				A.exists(id),
			)
		} else {
			return (
				pipe(
					req.items,
					A.map(r => (canAddPrereqHelper(current, before, r) ? 1 : 0)),
					A.reduce(0, (before, at) => before + at),
				) >= 2
			)
		}
	}
}

const canAddProhibHelper = (
	current: Schedule,
	req: UnitCode | UnitRequirement,
): boolean => {
	if (typeof req === 'string') {
		const unitName = req
		const r = pipe(
			getAllUnits(current),
			A.map((unit: Unit) => unit.code),
			codes => !codes.includes(unitName),
		)
		return r
	} else {
		if (req.operator == 'AND') {
			return pipe(
				req.items,
				A.map(r => canAddProhibHelper(current, r)),
				A.every(id),
			)
		} else if (req.operator == 'OR') {
			return pipe(
				req.items,
				A.map(r => canAddProhibHelper(current, r)),
				A.every(id),
			)
		} else {
			return (
				pipe(
					req.items,
					A.map(r => (canAddProhibHelper(current, r) ? 1 : 0)),
					A.reduce(0, (before, at) => before + at),
				) < 2
			)
		}
	}
}

export const canAdd = (
	current: Schedule,
	unit: Unit,
	before: Unit[],
	sem: TeachingPeriod,
): boolean => {
	if (unit.requisites.length === 0) {
		return (
			unit.offerings.includes(sem) &&
			getAllUnits(current).find(
				x => JSON.stringify(x) === JSON.stringify(unit),
			) === undefined
		)
	}

	return pipe(
		unit.requisites,
		A.map(req => {
			if (req.type === 'prerequisite') {
				const s = canAddPrereqHelper(current, before, req.requirement)

				if (unit.code === 'FIT2107') {
					// console.log("GOT",s, before.map(x => x.code))
				}
				return s
			}
			return canAddProhibHelper(current, req.requirement)
		}),
		A.every(id),
		b => {
			return (
				b &&
				unit.offerings.includes(sem) &&
				getAllUnits(current).find(
					x => JSON.stringify(x) === JSON.stringify(unit),
				) === undefined
			)
		},
	)
}

const getRequiredUnits = (course: Course) => {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	if (course === 'C2001') {
		return [
			'FIT1008',
			'FIT1045',
			'FIT1047',
			'FIT2004',
			'FIT2014',
			'MAT1830',
			'MAT1841',
			'FIT1049',
			'FIT2099',
			'FIT2102',
			'FIT3143',
			'FIT3155',
			'FIT3171',
		]
	}
	return []
}

export const getAllUnits = (schedule: Schedule): Unit[] => {
	return pipe(
		schedule.years,
		A.map(year => A.concat(year.sem2Units)(year.sem1Units)),
		A.flatten,
	)
}

const toposort = (course: Course): Unit[] => {
	const req = pipe(
		getRequiredUnits(course),
		A.map(x => units.find(n => n.code === x)!),
	)
	req.sort(() => Math.random() - 0.5)
	const reqUnits = getRequiredUnits(course)

	const adj: Record<string, string[]> = {}

	const findEdges = (r: UnitRequirement): Unit[] => {
		let ret: Unit[] = []
		for (const item of r.items) {
			if (typeof item === 'string') {
				if (units.find(n => n.code === item) !== undefined) {
					ret.push(units.find(n => n.code === item)!)
				}
			} else {
				ret = ret.concat(findEdges(item))
			}
		}
		return ret
	}

	for (const unit of req) {
		for (const req of unit.requisites) {
			if (req.type === 'prerequisite') {
				for (const to of findEdges(req.requirement)) {
					if (!(to.code in adj)) {
						adj[to.code] = []
					}
					if (reqUnits.includes(unit.code) && reqUnits.includes(to.code)) {
						adj[to.code]!.push(unit.code)
					}
				}
			}
		}
	}

	const seen: string[] = []
	const topo: string[] = []

	const dfs = (at: string) => {
		seen.push(at)

		if (!(at in adj)) {
			adj[at] = []
		}

		for (const to of adj[at]!) {
			if (!seen.includes(to)) {
				dfs(to)
			}
		}
		topo.push(at)
	}

	for (const node of reqUnits) {
		if (!seen.includes(node)) {
			dfs(node)
		}
	}

	topo.reverse()
	return topo.map(s => req.find(u => u.code === s)!)
}

export const constructSchedules = (
	params: ScheduleParameters,
): E.Either<string, Schedule[]> => {
	const schedules: Schedule[] = []

	while (schedules.length < 200) {
		// step 1: toposort important units
		const sorted: (Unit | undefined)[] = toposort('C2001')

		// step 2: add gaps inbetween
		const gaps = params.numYears * 8 - sorted.length

		for (let i = 0; i < gaps; i++) {
			let u = units[0]!
			while (sorted.includes(u)) {
				u = units[Math.floor(Math.random() * sorted.length)]!
			}
			sorted.splice(Math.floor(Math.random() * sorted.length), 0, undefined)
		}

		// step 3: add electives
		let good = true

		for (let i = 0; i < sorted.length; i++) {
			const before = Math.floor(i / 4) * 24
			if (typeof sorted[i] !== 'undefined') {
				if (sorted[i]!.creditPointPrerequisite !== undefined) {
					if (sorted[i]!.creditPointPrerequisite!.points > before) {
						good = false
						break
					}
				}
			}
		}

		if (!good) {
			continue
		}

		// Validate semesters
		for (let i = 0; i < sorted.length; i++) {
			const unit = sorted[i]!
			const sem: TeachingPeriod =
				Math.floor(i % 8) < 4 ? 'First semester' : 'Second semester'

			if (typeof unit === 'undefined') {
				continue
			}

			if (unit.creditPointPrerequisite !== undefined) {
				const prereq = unit.creditPointPrerequisite
				// FIT only, on current level only
				const doneBefore = Math.floor(i / 4) * 24

				if (doneBefore < prereq.points) {
					good = false
				}
			}
			if (!unit.offerings.includes(sem)) {
				good = false
				break
			}
		}

		if (!good) {
			continue
		}

		const shuffledUnits = [...units]
		shuffledUnits.sort(() => Math.random() - 0.5)

		const blankUnit: Unit = {
			code: '',
			requisites: [],
			offerings: [],
			enrolmentRules: [],
			title: '',
		}
		const sched: Schedule = {
			years: Array.from({length: 3}, () => {
				return {
					sem1Units: [blankUnit, blankUnit, blankUnit, blankUnit],
					sem2Units: [blankUnit, blankUnit, blankUnit, blankUnit],
				} as Year
			}),
		}

		for (let i = 0; i < sorted.length; i++) {
			if (typeof sorted[i] !== 'undefined') {
				if (i % 8 < 4) {
					sched.years[Math.floor(i / 8)]!.sem1Units[i % 4] = sorted[i]!
				} else {
					sched.years[Math.floor(i / 8)]!.sem2Units[i % 4] = sorted[i]!
				}
			}
		}
		const before: Unit[] = []

		// REMOVE NULLS WITH ELECTIVES
		for (let i = 0; i < sorted.length; i++) {
			const credBefore = Math.floor(i / 4) * 24

			// Need to fill it up
			if (typeof sorted[i] === 'undefined') {
				const possible = []
				for (const unit of shuffledUnits) {
					if (
						canAdd(
							sched,
							unit,
							before,
							i % 8 < 4 ? 'First semester' : 'Second semester',
						) &&
						(typeof unit.creditPointPrerequisite === 'undefined' ||
							unit.creditPointPrerequisite.points < credBefore) &&
						sorted.find(f => f === unit) === undefined &&
						unit.offerings.includes(
							i % 8 < 4 ? 'First semester' : 'Second semester',
						)
					) {
						possible.push(unit)
					}
				}

				if (possible.length === 0) {
					return E.left('Could not create schedule with given electives')
				}

				const take = possible[Math.floor(Math.random() * possible.length)]!

				sorted[i] = take
			}

			if (i % 4 === 3) {
				// add ones before
				for (let j = i - 3; j <= i; j++) {
					before.push(sorted[j]!)
				}
			}
		}

		const withoutNulls = sorted.filter(x => x !== undefined) as Unit[]
		assert(withoutNulls.length === sorted.length)
		assert(withoutNulls[0]!.code !== 'FIT2107')

		const toSchedule = (x: Unit[]): Schedule => {
			const a = {
				years: Array.from({length: 3}, () => {
					return {sem1Units: [], sem2Units: []} as Year
				}),
			}

			for (let i = 0; i < x.length; i++) {
				if (i % 8 < 4) {
					a.years[Math.floor(i / 8)]!.sem1Units[i % 4] = x[i]!
				} else {
					a.years[Math.floor(i / 8)]!.sem2Units[i % 4] = x[i]!
				}
			}
			return a
		}

		assert(toSchedule(withoutNulls).years[0]?.sem1Units[0]!.code !== 'FIT2107')
		schedules.push(toSchedule(withoutNulls))
		// step 4: profit??
	}

	return E.right(schedules)
	// let all = pipe(
	// 	constructHelper(empty, params, allUnits),
	// 	E.fromOption(() => 'Could not construct schedule with parameters'),
	// )

	// return E.flatMap((x: Schedule[]) => E.right(x[0]!))(all)
}
