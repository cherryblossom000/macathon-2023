import {
	construct_schedule,
	read_all_units,
	can_add,
	get_all_units,
	type Schedule,
} from './schedule.js'
import * as E from 'fp-ts/lib/Either.js'
import * as O from 'fp-ts/lib/Option.js'
import A = require('fp-ts/lib/Array.js')
import {pipe, identity as id} from 'fp-ts/lib/function.js'

let empty: Schedule = {
	years: Array.from({length: 3}, () => ({sem1_units: [], sem2_units: []})),
}

// console.log(
// 	can_add(
// 		empty,
// 		read_all_units().find(x => x.code == 'FIT1006')!,
// 		'First semester',
// 	),
// )
let res = construct_schedule({
	num_years: 3,
	should_overload: false,
	wanted_electives: [],
	course: 'C2001',
})

console.log(JSON.stringify(res))

// console.log(
// 	can_add(
// 		empty,
// 		read_all_units().find(x => x.code == 'FIT1045')!,
// 		'First semester',
// 	),
// )
// if (res._tag == 'Right') {
// 	console.log(get_all_units(res.right))
// }
