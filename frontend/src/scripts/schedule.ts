import * as E from 'fp-ts/lib/Either.js'
import * as A from 'fp-ts/lib/Array.js'
import {pipe, identity as id} from 'fp-ts/lib/function.js'
import type {
	TeachingPeriod,
	Unit,
	UnitCode,
	UnitRequirement,
	ScheduleParameters as _ScheduleParameters,
} from 'shared'

type UnitConstrained = Unit & {
	year?: number | undefined
	sem?: 1 | 2 | undefined
}
type ScheduleParameters = Omit<_ScheduleParameters, 'units'> & {
	units: UnitConstrained[]
}

export interface Year {
	sem1Units: Unit[]
	sem2Units: Unit[]
}

export interface Schedule {
	years: Year[]
}

type Course = 'C2001'

const TIMEOUT = 30_000

export const main = (units: Unit[]) => {
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
					req.items as (string | UnitRequirement)[],
					A.map(r => canAddPrereqHelper(current, before, r)),
					A.every(id),
				)
			} else if (req.operator == 'OR') {
				return pipe(
					req.items as (string | UnitRequirement)[],
					A.map(r => canAddPrereqHelper(current, before, r)),
					A.exists(id),
				)
			} else {
				return (
					pipe(
						req.items as (string | UnitRequirement)[],
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
					req.items as (string | UnitRequirement)[],
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

	const canAdd = (
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

	const getAllUnits = (schedule: Schedule): Unit[] => {
		const x = pipe(
			schedule.years,
			A.map(year =>
				A.filter(a => a != undefined)(A.concat(year.sem2Units)(year.sem1Units)),
			),
			A.flatten,
		)
		return x
	}

	let adj: Record<string, string[]> = {}

	const setup_toposort = (all_units: Unit[]) => {
		adj = {}
		const all_codes = all_units.map(x => x.code)

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

		for (const unit of all_units) {
			for (const req of unit.requisites) {
				if (req.type === 'prerequisite') {
					for (const to of findEdges(req.requirement)) {
						if (!(to.code in adj)) {
							adj[to.code] = []
						}
						if (all_codes.includes(unit.code) && all_codes.includes(to.code)) {
							adj[to.code]!.push(unit.code)
						}
					}
				}
			}
		}
	}
	const toposortConstrained = (
		all_units: UnitConstrained[],
	): UnitConstrained[] => {
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

		for (const c of all_units) {
			dfs(c.code)
		}
		topo.reverse()

		return topo.map(s => all_units.find(u => u.code === s)!)
	}
	const toposort = (all_units: Unit[]): Unit[] => {
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

		for (const c of all_units) {
			dfs(c.code)
		}
		topo.reverse()

		return topo.map(s => all_units.find(u => u.code === s)!)
	}

	// Pass in an array of units (multiple of 4 length), it checks prereqs
	const prereqs_valid = (units: (Unit | undefined)[]) => {
		const in_prev_semesters: Unit[] = []
		const curr_schedule: Schedule = {
			years: Array.from({length: Math.floor(units.length / 8)}, () => ({
				sem1Units: [],
				sem2Units: [],
			})),
		}

		for (let i = 0; i < units.length; i++) {
			if (units[i]! != undefined) {
				if (
					!canAdd(
						curr_schedule,
						units[i]!,
						in_prev_semesters,
						i % 8 < 4 ? 'First semester' : 'Second semester',
					) ||
					!units[i]!.offerings.includes(
						i % 8 < 4 ? 'First semester' : 'Second semester',
					)
				) {
					return false
				}

				const units_before = Math.floor(i / 4) * 24
				if (units[i]!.creditPointPrerequisite != undefined) {
					if (units_before < units[i]!.creditPointPrerequisite!.points) {
						// TODO: proper logic here
						return false
					}
				}

				if (i % 8 < 4) {
					curr_schedule.years[Math.floor(i / 8)]!.sem1Units[i % 4] = units[i]!
				} else {
					curr_schedule.years[Math.floor(i / 8)]!.sem2Units[i % 4] = units[i]!
				}
			}

			if (i % 4 == 3) {
				for (let j = i - 3; j <= i; j++) {
					if (units[j]! != undefined) {
						in_prev_semesters.push(units[j]!)
					}
				}
			}
		}

		return true
	}

	const constructSchedules = (
		params: ScheduleParameters,
	): E.Either<string, Schedule[]> => {
		const valid: Unit[][] = []

		const startTime = performance.now()

		const to_schedule = (units: Unit[]): Schedule => {
			const curr_schedule: Schedule = {
				years: Array.from({length: params.numYears}, () => ({
					sem1Units: [],
					sem2Units: [],
				})),
			}
			for (let i = 0; i < units.length; i++) {
				if (i % 8 < 4) {
					curr_schedule.years[Math.floor(i / 8)]!.sem1Units[i % 4] = units[i]!
				} else {
					curr_schedule.years[Math.floor(i / 8)]!.sem2Units[i % 4] = units[i]!
				}
			}
			return curr_schedule
		}

		// TODO: how many to return? as many in time?

		// TODO: how to validate if impossible? timer? CURRENT TIMING OUT
		while (valid.length < 1) {
			const currTime = performance.now()

			if (currTime - startTime > TIMEOUT) {
				return valid.length == 0
					? E.left(
							'Timed out: could not find schedules, please try again or change parameters',
					  )
					: E.right(valid.map(x => to_schedule(x)))
			}
			const all_units: UnitConstrained[] = params.units
			all_units.sort(_ => Math.random() - 0.5)

			const toposorted: UnitConstrained[] = toposortConstrained(all_units)
			const constrained = toposorted.filter(x => x.year != undefined)

			// STEP 1:
			const with_constrained: (undefined | Unit)[] = Array.from(
				{length: 8 * params.numYears},
				() => undefined,
			)

			for (const c of constrained) {
				// Randomly put in the sem
				let ind = c.year! * 8 + (c.sem! - 1) * 4 + Math.floor(Math.random() * 4)
				while (with_constrained[ind]! != undefined) {
					ind = c.year! * 8 + (c.sem! - 1) * 4 + Math.floor(Math.random() * 4)
				}

				with_constrained[ind] = c
			}

			const without_constrained: (Unit | undefined)[] = all_units.filter(
				x => x.year === undefined,
			)

			// Step 2:
			const cnt =
				with_constrained.filter(x => x == undefined).length -
				without_constrained.length

			const second_list = Array.from(
				{length: with_constrained.length},
				() => undefined,
			)

			for (let i = 0; i < cnt; i++) {
				const ind = Math.floor(Math.random() * (without_constrained.length + 1))
				without_constrained.splice(ind, 0, undefined)
			}

			const without_ind = 0

			const with_both: (undefined | Unit)[] = Array.from(
				{length: with_constrained.length},
				() => undefined,
			)

			let r = 0

			for (let i = 0; i < with_constrained.length; i++) {
				if (with_constrained[i]! != undefined) {
					with_both[i] = with_constrained[i]!
				} else {
					with_both[i] = without_constrained[r]
					r += 1
				}
			}

			// STEP 4 add random things

			const every_unit: Unit[] = units
			every_unit.sort(_ => Math.random() - 0.5)
			for (let i = 0; i < with_both.length; i++) {
				if (with_both[i]! == undefined) {
					const possible_units = []
					for (const unit of every_unit) {
						const temp = [...with_both]
						if (temp[i]! !== undefined) {
							throw new Error('assertion error')
						}
						temp[i] = unit
						for (let j = i + 1; j < temp.length; j++) {
							temp[j] = undefined
						}

						if (prereqs_valid(temp) && !with_both.includes(unit)) {
							possible_units.push(unit)
						}
					}

					if (possible_units.length == 0) {
						break
					}
					const take =
						possible_units[Math.floor(Math.random() * possible_units.length)]
					// console.log('ADDING', take)
					with_both[i] = take
				}
			}

			if (with_both.includes(undefined)) {
				continue
			}
			if (prereqs_valid(with_both)) {
				valid.push(with_both as Unit[])
			}
		}
		return E.right(valid.map(units => to_schedule(units)))
	}

	return {constructSchedules, getAllUnits, canAdd}

	/*
  Rewrite the toposort so that it works with constraints.

  My idea was, but I didn't have time to implement:


  RANDOMISE UNTIL VALID FOUND:
    STEP 1:
    toposort everything, together (shuffle list beforehand)
    split into constrained and nonconstrained, intersperse constrained with undefineds
    e.g. [_,_,_,a,_,_,_,b] and [c,d,e,f] (latter is nonconstrained)

    STEP 2:
    insert undefineds randomly into latter list until it is the size of the number of undefines,
    then replace every undefined in the former with its corresponding value in the latter

    STEP 3:
    replace remaining undefines with random units

    STEP 4:
    validate

  REPEAT UNTIL ENOUGH SCHEDULES ARE GENERATED



*/
}
