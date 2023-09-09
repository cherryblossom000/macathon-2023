import {construct_schedules, can_add, get_all_units, type Schedule} from './schedule.js'

import * as E from 'fp-ts/lib/Either.js'
import {pipe} from 'fp-ts/lib/function.js'

import {type Unit} from 'shared'
import {units} from './data.js'

// let empty: Schedule = {
// 	years: Array.from({length: 3}, () => ({sem1_units: [], sem2_units: []})),
// }

// empty.years[0]!.sem1_units[0]! = units.find(f=>f.code=="FIT1053")!;
// empty.years[0]!.sem1_units[1]! = units.find(f=>f.code=="FIT1053")!;
// empty.years[0]!.sem1_units[2]! = units.find(f=>f.code=="FIT1053")!;
// empty.years[0]!.sem1_units[3]! = units.find(f=>f.code=="FIT1053")!;
// empty.years[0]!.sem2_units[0]! = units.find(f=>f.code=="FIT1053")!;
// empty.years[0]!.sem2_units[1]! = units.find(f=>f.code=="FIT1053")!;
// empty.years[0]!.sem2_units[2]! = units.find(f=>f.code=="FIT1053")!;
// empty.years[0]!.sem2_units[3]! = units.find(f=>f.code=="FIT1053")!;
// console.log(
//   can_add(empty, units.find(f=>f.code=="FIT1045")!, [], "Second semester")
//   )
// let all = construct_schedules({
// 	num_years: 3,
// 	should_overload: false,
// 	wanted_electives: [],
// 	course: 'C2001',
// })

// pipe(
// 	all,
// 	E.fold(
// 		f => {},
// 		s => {
// 			for (let sc of s) {
// 				console.log(JSON.stringify(get_all_units(sc).map(a => a.code)))
// 			}
// 		},
// 	),
// )