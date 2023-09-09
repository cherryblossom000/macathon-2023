import * as A from 'fp-ts/lib/Array.js'
import * as E from 'fp-ts/lib/Either.js'
import * as O from 'fp-ts/lib/Option.js'
import {pipe} from 'fp-ts/lib/function.js'
import {api} from 'shared'
import {decodeHandler, type HandlerResult} from '../src/util.js'
import * as data from '../src/data.js'
import {constructSchedules} from '../src/schedule.js'

export default decodeHandler(
	'POST',
	api.GenerateSchedulesRequest,
	'body',
	(params): HandlerResult<api.GenerateSchedulesResponse> => {
		return pipe(
			params.units,
			A.traverse(E.getApplicativeValidation(A.getSemigroup<string>()))(
				({code, semester}) =>
					pipe(
						data.unitsMap.get(code),
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
									sem1Units: y.sem1Units.map(u => u.code),
									sem2Units: y.sem2Units.map(u => u.code),
								})),
							})),
						),
					),
			),
		)
	},
)
