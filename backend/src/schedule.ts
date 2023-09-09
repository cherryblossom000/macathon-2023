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
		A.map(year => A.concat(year.sem1_units)(year.sem2_units)),
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
	let schedules = []

	while (schedules.length < 200) {
		// step 1: toposort important units
		let sorted: (Unit | string)[] = toposort('C2001')
		// step 2: add gaps inbetween
		let gaps = params.num_years * 8 - sorted.length

		for (let i = 0; i < gaps; i++) {
			sorted.splice(Math.floor(Math.random() * sorted.length), 0, 'EMPTY')
		}

		// step 3: add electives

		let good = true
		console.log(
			sorted.map(u => {
				if (typeof u == 'string') {
					return '_'
				} else {
					return u.code + ' '
				}
			}),
		)

		// validate semesters
		let year1 = [0, 0],
			year2 = [0, 0],
			fit = 0,
			total = 0

		for (let i = 0; i < sorted.length; i++) {
			let unit = sorted[i]!
			let sem: TeachingPeriod =
				Math.floor(i % 8) < 4 ? 'First semester' : 'Second semester'

			if (typeof unit !== 'string') {
				if (unit.creditPointPrerequisite != undefined) {
					let prereq = unit.creditPointPrerequisite

					// FIT only, on current level only
					if (prereq.fitOnly && prereq.levelOnly) {
						if (unit.code[3] == '1' && year1[1]! < prereq.points / 6) {
							good = false
						}
						if (unit.code[3] == '2' && year2[1]! < prereq.points / 6) {
							good = false
						}
					} else if (prereq.fitOnly && fit < prereq.points / 6) {
						good = false
					}

					if (!prereq.fitOnly && prereq.levelOnly) {
						if (unit.code[3] == '1' && year1[0]! < prereq.points / 6) {
							good = false
						}
						if (unit.code[3] == '2' && year2[0]! < prereq.points / 6) {
							good = false
						}
					} else if (!prereq.levelOnly && total < prereq.points / 6) {
						good = false
					}
				}
				if (!unit.offerings.includes(sem)) {
					// console.log('Failed', unit.code, ' in ', sem)
					good = false
					break
				}

				if (good == false) {
					break
				}

				if (unit.code.startsWith('FIT')) {
					fit++
				}
				total++

				if (unit.code[3] == '1') {
					year1[+unit.code.startsWith('FIT')]++
				}
				if (unit.code[3] == '2') {
					year2[+unit.code.startsWith('FIT')]++
				}
			}
		}

		if (good) {
			schedules.push(sorted)
		}
		// step 4: profit??
	}

	schedules.forEach(x => {
		console.log(
			x.map(u => {
				if (typeof u == 'string') {
					return '_'
				} else {
					return u.code + ' '
				}
			}),
		)
	})
	return E.left('kill me')
}
