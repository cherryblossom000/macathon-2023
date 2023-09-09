import * as A from 'fp-ts/lib/Array.js'
import * as E from 'fp-ts/lib/Either.js'
import * as O from 'fp-ts/lib/Option.js'
import {pipe} from 'fp-ts/lib/function.js'
import {api} from 'shared'
import {handler, type HandlerResult} from '../src/util.js'
import * as data from '../src/data.js'
import {constructSchedules} from '../src/schedule.js'

export default handler(
	'POST',
	api.CreateSchedulesRequest,
	'body',
	(params): HandlerResult<api.CreateSchedulesResponse> => {
		return pipe(
			params.wantedElectives,
			A.traverse(E.getApplicativeValidation(A.getSemigroup<string>()))(u =>
				pipe(
					data.unitsMap.get(u),
					O.fromNullable,
					E.fromOption(() => [u]),
				),
			),
			E.fold(
				us => E.left({code: 400, data: `invalid units: ${us.join(', ')}`}),
				us =>
					pipe(
						constructSchedules({
							...params,
							wantedElectives: us,
						}),
						E.mapLeft(data => ({code: 500, data: data})),
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
