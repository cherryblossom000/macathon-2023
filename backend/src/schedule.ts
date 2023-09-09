import * as E from 'fp-ts/lib/Either.js'
import * as O from 'fp-ts/lib/Option.js'
import A = require('fp-ts/lib/Array.js')
import {units} from './data.js'
import assert from 'assert'
import {pipe, identity as id} from 'fp-ts/lib/function.js'

import fs = require('fs')

import type {
	CourseRequirement,
	RequisiteType,
	TeachingPeriod,
	Unit,
	UnitCode,
	UnitRequirement,
	Requisite,
	ScheduleParameters as _ScheduleParameters,
} from 'shared'

type ScheduleParameters = Omit<_ScheduleParameters, 'wanted_electives'> & {
	wanted_electives: Unit[]
}

type Year = {
	sem1_units: Unit[]
	sem2_units: Unit[]
}

export type Schedule = {
	years: Year[]
}

type Course = 'C2001'

let can_add_prereq_helper = (
	current: Schedule,
  before: Unit[],
	req: UnitCode | UnitRequirement,
): boolean => {
	if (typeof req === 'string') {
		let unit_name: string = req
		return pipe(
			before,
			A.map((unit: Unit) => unit.code),
			codes => codes.includes(unit_name),
		)
	} else {
		if (req.operator == 'AND') {
			return pipe(
				req.items,
				A.map(r => can_add_prereq_helper(current, before, r)),
				A.every(id),
			)
		} else if (req.operator == 'OR') {
			return pipe(
				req.items,
				A.map(r => can_add_prereq_helper(current, before, r)),
				A.exists(id),
			)
		} else {
			return (
				pipe(
					req.items,
					A.map(r => (can_add_prereq_helper(current, before, r) ? 1 : 0)),
					A.reduce(0, (before, at) => before + at),
				) >= 2
			)
		}
	}
}

let can_add_prohib_helper = (
	current: Schedule,
	req: UnitCode | UnitRequirement,
): boolean => {
	if (typeof req === 'string') {
		let unit_name: string = req
		let r = pipe(
			get_all_units(current),
			A.map((unit: Unit) => unit.code),
			codes => !codes.includes(unit_name))
    return r;
	} else {
		if (req.operator == 'AND') {
			return pipe(
				req.items,
				A.map(r => can_add_prohib_helper(current, r)),
				A.every(id),
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
  before: Unit[],
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
				let s = can_add_prereq_helper(current, before, req.requirement)

        if (unit.code == "FIT2107") {
          // console.log("GOT",s, before.map(x => x.code))
        }
        return s;
			}
			return can_add_prohib_helper(current, req.requirement)
		}),
		A.every(id),
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

let get_required_units = (course: Course) => {
	if (course == 'C2001') {
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

export let get_all_units = (schedule: Schedule): Unit[] => {
	return pipe(
		schedule.years,
		A.map(year => A.concat(year.sem2_units)(year.sem1_units)),
		A.flatten,
	)
}

let toposort = (course: Course): Unit[] => {
	let req = pipe(
		get_required_units(course),
		A.map(x => units.find(n => n.code == x)!),
	)
	req.sort(_ => Math.random() - 0.5)
	let req_units = get_required_units(course)

	let adj: any = {}

	let find_edges = (r: UnitRequirement): Unit[] => {
		let ret: Unit[] = []
		for (let item of r.items) {
			if (typeof item == 'string') {
				if (units.find(n => n.code == item) != undefined) {
					ret.push(units.find(n => n.code == item)!)
				}
			} else {
				ret = ret.concat(find_edges(item))
			}
		}
		return ret
	}

	for (let unit of req) {
		for (let req of unit.requisites) {
			if (req.type == 'prerequisite') {
				for (let to of find_edges(req.requirement)) {
					if (!(to.code in adj)) {
						adj[to.code] = []
					}
					if (req_units.includes(unit.code) && req_units.includes(to.code)) {
						adj[to.code].push(unit.code)
					}
				}
			}
		}
	}

	let seen: string[] = []
	let topo: string[] = []

	let dfs = (at: string) => {
		seen.push(at)

		if (!(at in adj)) {
			adj[at] = []
		}

		for (let to of adj[at]) {
			if (!seen.includes(to)) {
				dfs(to)
			}
		}
		topo.push(at)
	}

	for (let node of req_units) {
		if (!seen.includes(node)) {
			dfs(node)
		}
	}

	topo.reverse()
	return topo.map(s => req.find(u => u.code == s)!)
}

export let construct_schedules = (
	params: ScheduleParameters,
): E.Either<string, Schedule[]> => {
	let schedules: Schedule[] = []

	while (schedules.length < 200) {
		// step 1: toposort important units
		let sorted: (Unit | undefined)[] = toposort('C2001')

		// step 2: add gaps inbetween
		let gaps = params.num_years * 8 - sorted.length

		for (let i = 0; i < gaps; i++) {
			let u = units[0]!
			while (sorted.includes(u)) {
				u = units[Math.floor(Math.random() * sorted.length)]!
			}
			sorted.splice(Math.floor(Math.random()*sorted.length), 0, undefined)
		}

		// step 3: add electives
		let good = true

		let counter = 0
		for (let i = 0; i < sorted.length; i++) {
			let before = Math.floor(i / 4) * 24
			if (typeof sorted[i] !== 'undefined') {
        if (sorted[i]!.creditPointPrerequisite != undefined) {
          if (sorted[i]!.creditPointPrerequisite!.points > before) {
            good=false;
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
			let unit = sorted[i]!
			let sem: TeachingPeriod =
				Math.floor(i % 8) < 4 ? 'First semester' : 'Second semester'
      
      if (typeof unit == "undefined") {
        continue;
      }

			if (unit.creditPointPrerequisite != undefined) {
				let prereq = unit.creditPointPrerequisite
				// FIT only, on current level only
				let done_before = Math.floor(i / 4) * 24

				if (done_before < prereq.points) {
					good = false
				}
			}
			if (!unit.offerings.includes(sem)) {
				good = false
				break
			}
		}

    if (!good) {
      continue;
    }

    let shuffled_units = [...units]
    shuffled_units.sort(_=>Math.random()-0.5)


    let blank_unit: Unit = {code:"",requisites:[],offerings:[],enrolmentRules:[],title:""};
    let sched: Schedule = {years: Array.from({length: 3}, () => {
      return {sem1_units: [blank_unit,blank_unit,blank_unit,blank_unit], sem2_units: [blank_unit,blank_unit,blank_unit,blank_unit]} as Year
    })};

    for (let i = 0; i < sorted.length; i++) {
      if (typeof sorted[i] != "undefined") {
        if (i%8<4) {
          sched.years[Math.floor(i/8)]!.sem1_units[i%4]! = sorted[i]!;
        } else {
          sched.years[Math.floor(i/8)]!.sem2_units[i%4]! = sorted[i]!;
        }
      }
    }
    let before: Unit[] = [];

    // REMOVE NULLS WITH ELECTIVES
    for (let i = 0; i < sorted.length; i++) {
      let cred_before = Math.floor(i/4) * 24

      // Need to fill it up
      if (typeof sorted[i] == "undefined") {
        let possible = [];
        for (let unit of shuffled_units) {
          if (can_add(sched, unit, before, i%8<4?"First semester":"Second semester") && (typeof unit.creditPointPrerequisite == "undefined" || unit.creditPointPrerequisite!.points < cred_before) && sorted.find(f => f==unit) == undefined && unit.offerings.includes(i%8<4?"First semester":"Second semester")) {
            possible.push(unit);
          }
        }

        if(possible.length == 0) {
          return E.left("Could not create schedule with given electives");
        }

        let take = possible[Math.floor(Math.random() * possible.length)]!

        sorted[i]! = take
      }

      if (i%4==3) { // add ones before
        for (let j = i-3; j <= i; j++) {
          before.push(sorted[j]!!);
        }
      }


    }

    let without_nulls = sorted.filter(x => x!=undefined) as Unit[];
    assert(without_nulls.length == sorted.length)
    assert(without_nulls[0]!.code != "FIT2107")

    let to_schedule = (x: Unit[]): Schedule => {
      let a = {years: Array.from({length: 3}, () => {return {sem1_units: [], sem2_units: []} as Year;})}

      for (let i = 0; i < x.length; i++) {
        if (i%8<4) {
          a.years[Math.floor(i/8)]!.sem1_units[i%4] = x[i]!;
        } else {
          a.years[Math.floor(i/8)]!.sem2_units[i%4] = x[i]!;
        }
      }
      return a;
    }


    assert(to_schedule(without_nulls).years[0]?.sem1_units[0]!.code != "FIT2107")
		if (good) {
			schedules.push(to_schedule(without_nulls))
		}
		// step 4: profit??
	}

  return E.right(schedules)
	// let all = pipe(
	// 	construct_helper(empty, params, all_units),
	// 	E.fromOption(() => 'Could not construct schedule with parameters'),
	// )

	// return E.flatMap((x: Schedule[]) => E.right(x[0]!))(all)
}
