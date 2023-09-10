/* eslint-disable @typescript-eslint/require-await */

import * as A from 'fp-ts/lib/Array.js'
import * as E from 'fp-ts/lib/Either.js'
import * as O from 'fp-ts/lib/Option.js'
import {pipe} from 'fp-ts/lib/function.js'
import * as t from 'io-ts'
import {
	api,
	type Course,
	type Schedule,
	type ScheduleParametersUnit,
	type Specialisation,
	type Unit,
} from 'shared'
import * as data from './data.js'
import {main} from './schedule.js'

// const API_BASE = 'https://macathon-2023.cherryblossom00.repl.co/api'
// const API_BASE = 'https://macathon-2023.vercel.app/api'
// const API_BASE =
// 	'https://macathon-2023-cpr0gx1dd-cherryblossom000.vercel.app/api'
// const API_BASE = 'http://localhost:3000/api'

const handleAPIResponse = <T>(res: api.Response<T>): T => {
	if (res.type === 'error')
		throw new Error(
			typeof res.data === 'string'
				? res.data
				: JSON.stringify(res.data, null, 2),
		)
	return res.data
}

export const getCourse = async (code: string): Promise<Course> => {
	const course = (await data.courses).find(c => c.code === code)
	return handleAPIResponse(
		course
			? {type: 'success', data: course}
			: {type: 'error', data: 'course not found'},
	)
}
export const getSpecialisation = async (
	code: string,
): Promise<Specialisation> => {
	const specialisation = (await data.specialisations).find(c => c.code === code)
	return handleAPIResponse(
		specialisation
			? {type: 'success', data: specialisation}
			: {type: 'error', data: 'specialisation not found'},
	)
}
export const getUnit = async (code: string): Promise<Unit> => {
	const unit = (await data.units).find(u => u.code === code)
	return handleAPIResponse(
		unit
			? {type: 'success', data: unit}
			: {type: 'error', data: 'unit not found'},
	)
}

export const getAllUnits = async (): Promise<Unit[]> =>
	handleAPIResponse({type: 'success', data: data.units})

const _generateSchedules = async (
	params: api.GenerateSchedulesRequest,
): Promise<
	E.Either<
		{status: number; data: t.Errors | string},
		api.GenerateSchedulesResponse
	>
> => {
	const {constructSchedules} = main(await data.units)
	const unitsMap = await data.unitsMap
	return pipe(
		params.units,
		A.traverse(E.getApplicativeValidation(A.getSemigroup<string>()))(
			({code, semester}) =>
				pipe(
					unitsMap.get(code),
					O.fromNullable,
					E.fromOption(() => [code]),
					E.map(u => ({...u, semester})),
				),
		),
		E.fold(
			us => E.left({status: 400, data: `invalid units: ${us.join(', ')}`}),
			us =>
				pipe(
					constructSchedules({
						...params,
						units: us,
					}),
					E.mapLeft(data => ({status: 500, data: data})),
					E.map(ss =>
						ss.map(s => ({
							years: s.years.map(y => ({
								sem1Units: y.sem1Units.map(({code, title}) => ({
									code,
									title,
								})),
								sem2Units: y.sem2Units.map(({code, title}) => ({
									code,
									title,
								})),
							})),
						})),
					),
				),
		),
	)
}

export const generateSchedules = async (
	units: ScheduleParametersUnit[],
	numYears: 3 | 4 | 5 = 3,
): Promise<Schedule[]> =>
	handleAPIResponse(
		pipe(
			await _generateSchedules({units, numYears}),
			E.fold(
				({data}) => ({type: 'error', data}) as api.Response<Schedule[]>,
				data => ({type: 'success', data}) as api.Response<Schedule[]>,
			),
		),
	)
