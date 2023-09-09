import * as E from 'fp-ts/lib/Either.js'
import * as O from 'fp-ts/lib/Option.js'
import A = require('fp-ts/lib/Array.js')
import {pipe, identity as id} from 'fp-ts/lib/function.js'

import fs = require('fs')

import type {
	CourseRequirement,
	RequisiteType,
	TeachingPeriod,
	Unit,
	UnitCode,
	UnitRequirement,
	ScheduleParameters,
	Course,
} from 'shared'

type Year = {
	sem1_units: Unit[]
	sem2_units: Unit[]
}

export type Schedule = {
	years: Year[]
}

export let get_all_units = (schedule: Schedule): Unit[] => {
	return pipe(
		schedule.years,
		A.map(year => A.concat(year.sem1_units)(year.sem2_units)),
		A.flatten,
	)
}

let fully_satisfies = (
	schedule: Schedule,
	params: ScheduleParameters,
): boolean => {
	let all_units = get_all_units(schedule)

	// correct number of years
	if (schedule.years.length < 3 || schedule.years.length > 5) {
		return false
	}

	// overloading or not
	let did_overload: boolean = pipe(
		schedule.years,
		A.map(year => year.sem1_units.length > 4 || year.sem2_units.length > 4),
		A.exists(id),
	)

	if (did_overload != params.should_overload) {
		return false
	}

	// contains correct electives
	let has_unit = (unit: Unit) =>
		pipe(
			all_units,
			A.findFirst(u => u == unit),
		)._tag == 'Some'

	let has_all_electives: boolean = pipe(
		params.wanted_electives,
		A.map(has_unit),
		a => A.exists((b: boolean) => b)(a) || a.length == 0,
	)

	if (!has_all_electives) {
		return false
	}

	if (params.course == 'C2001' && satisfies_c2001(schedule)) {
		return true
	}
	return false
}

export let read_all_units = (): Unit[] =>
	pipe(
		fs.readdirSync('../scraper/data/units'),
		A.map(file =>
			JSON.parse(fs.readFileSync('../scraper/data/units/' + file).toString()),
		),
		A.filter((n: Unit) => n.code[3]! == '1'),
	)

let can_add_prereq_helper = (
	current: Schedule,
	req: UnitCode | UnitRequirement,
): boolean => {
	if (typeof req === 'string') {
		let unit_name: string = req
		return pipe(
			get_all_units(current),
			A.map((unit: Unit) => unit.code),
			codes => codes.includes(unit_name),
		)
	} else {
		if (req.operator == 'AND') {
			return pipe(
				req.items,
				A.map(r => can_add_prereq_helper(current, r)),
				A.every(id),
			)
		} else if (req.operator == 'OR') {
			return pipe(
				req.items,
				A.map(r => can_add_prereq_helper(current, r)),
				A.exists(id),
			)
		} else {
			return (
				pipe(
					req.items,
					A.map(r => (can_add_prereq_helper(current, r) ? 1 : 0)),
					A.reduce(0, (before, at) => before + at),
				) >= 2
			)
		}
	}
}

let satisfies_c2001 = (sched: Schedule): boolean => {
	let u = get_all_units(sched).map(u => u.code)
	for (let i of [
		'FIT1008',
		'FIT1045',
		'FIT1047',
		'FIT1049',
		'MAT1830',
		'MAT1841',
		// 'FIT2014',
		// 'FIT2004',
		// 'FIT2099',
		// 'FIT2102',
		// 'FIT3143',
		// 'FIT3155',
		// 'FIT3171',
	]) {
		if (u.find(s => s == i) == undefined) {
			return false
		}
	}
	return true
}

let can_add_prohib_helper = (
	current: Schedule,
	req: UnitCode | UnitRequirement,
): boolean => {
	if (typeof req === 'string') {
		let unit_name: string = req
		return pipe(
			get_all_units(current),
			A.map((unit: Unit) => unit.code),
			codes => !codes.includes(unit_name),
		)
	} else {
		if (req.operator == 'AND') {
			return pipe(
				req.items,
				A.map(r => can_add_prohib_helper(current, r)),
				A.exists(id),
			)
		} else if (req.operator == 'OR') {
			return pipe(
				req.items,
				A.map(r => can_add_prohib_helper(current, r)),
				A.every(id),
			)
		} else {
			return (
				pipe(
					req.items,
					A.map(r => (can_add_prohib_helper(current, r) ? 1 : 0)),
					A.reduce(0, (before, at) => before + at),
				) < 2
			)
		}
	}
}

export let can_add = (
	current: Schedule,
	unit: Unit,
	sem: TeachingPeriod,
): boolean => {
	if (unit.requisites.length == 0) {
		return (
			unit.offerings.includes(sem) &&
			get_all_units(current).find(
				x => JSON.stringify(x) == JSON.stringify(unit),
			) == undefined
		)
	}

	return pipe(
		unit.requisites,
		A.map(req => {
			if (req.type == 'prerequisite') {
				return can_add_prereq_helper(current, req.requirement)
			}
			return can_add_prohib_helper(current, req.requirement)
		}),
		A.exists(id),
		b => {
			return (
				b &&
				unit.offerings.includes(sem) &&
				get_all_units(current).find(
					x => JSON.stringify(x) == JSON.stringify(unit),
				) == undefined
			)
		},
	)
}

let deepcopy = <A>(a: A): A => JSON.parse(JSON.stringify(a))

let found = 0
let FOUND_THRESHOLD = 1

let construct_helper = (
	current: Schedule,
	params: ScheduleParameters,
	all_units: Unit[],
): O.Option<Schedule[]> => {
	if (found > FOUND_THRESHOLD) return O.none

	let missing: O.Option<{year: number; sem: number; ind: number}> = O.none

	for (let i = 0; i < 1; i++) {
		// TODO: support overloading, possibly per sem
		if (current.years[i]?.sem1_units.length! < 4) {
			missing = O.some({
				year: i,
				sem: 1,
				ind: current.years[i]!.sem1_units.length,
			})
			break
		}

		if (current.years[i]?.sem2_units.length! < 4) {
			missing = O.some({
				year: i,
				sem: 2,
				ind: current.years[i]!.sem2_units.length,
			})
			break
		}
	}

	if (missing._tag == 'None') {
		if (fully_satisfies(current, params)) {
			return O.some([current])
		} else {
			return O.none
		}
	}

	let ret: O.Option<Schedule[]>[] = []

	all_units.forEach(possible => {
		if (missing._tag == 'Some') {
			let new_schedule = deepcopy(current)
			let m = missing.value

			if (m.sem == 1 && can_add(new_schedule, possible, 'First semester')) {
				new_schedule.years[m.year]!.sem1_units.push(possible)
				ret.push(construct_helper(new_schedule, params, all_units))
			} else if (
				m.sem == 2 &&
				can_add(new_schedule, possible, 'Second semester')
			) {
				new_schedule.years[m.year]!.sem2_units.push(possible)
				ret.push(construct_helper(new_schedule, params, all_units))
			}
		}
	})

	let res: Schedule[] = []

	ret.forEach(r => {
		if (r._tag == 'Some') {
			res = A.concat(r.value)(res)
		}
	})

	if (fully_satisfies(current, params)) {
		res.push(current)
	}

	found += res.length
	return res.length == 0 ? O.none : O.some(res.slice(0, Math.min(found, 10)))
}

export let construct_schedules = (
	params: ScheduleParameters,
): E.Either<string, Schedule[]> => {
	let all_units = read_all_units()
	let all_schedules: Schedule[] = []

	for (let i = 0; i < 1; i++) {
		found = 0
		let empty: Schedule = {
			years: Array.from({length: 3}, () => ({sem1_units: [], sem2_units: []})),
		}

		all_units.sort(() => Math.random() - 0.5)

		let all = pipe(
			construct_helper(empty, params, all_units),
			E.fromOption(() => 'Could not construct schedule with parameters'),
			E.flatMap(a => {
				all_schedules = all_schedules.concat(a)
				return E.left('asiodjao')
			}),
		)
	}

	all_schedules.sort(() => Math.random() - 0.5)

	return all_schedules.length == 0
		? E.left('Could not construct schedules')
		: E.right(all_schedules)
}
