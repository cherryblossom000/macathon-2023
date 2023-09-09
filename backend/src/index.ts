import bodyParser from 'body-parser'
import express from 'express'
import * as E from 'fp-ts/lib/Either.js'
import {pipe} from 'fp-ts/lib/function.js'
import * as t from 'io-ts'
import {
	CreateScheduleRequest,
	ShuffleScheduleRequest,
	type CreateScheduleResponse,
	type GetCourseResponse,
	type GetUnitResponse,
	type ShuffleScheduleResponse,
	type Response,
	type GetSpecialisationResponse,
} from 'shared/dist/api.js'
import * as data from './data.js'
import {construct_schedule} from './schedule.js'

const app = express()

app.use(bodyParser.json())

type HandlerResult<T> = E.Either<{code: number; data: string}, T>
const handler =
	<T, U>(
		type: t.Decoder<unknown, T>,
		prop: 'body' | 'query',
		fn: (t: T) => HandlerResult<U>,
	): express.RequestHandler<
		unknown,
		Response<U>,
		unknown,
		unknown,
		Record<string, unknown>
	> =>
	(req, res) => {
		pipe(
			type.decode(req[prop]),
			E.fold(
				e => res.status(400).send({type: 'error', data: e}),
				req =>
					pipe(
						fn(req),
						E.fold(
							({code, data}) => res.status(code).send({type: 'error', data}),
							data => res.status(200).send({type: 'success', data}),
						),
					),
			),
		)
	}

const HandbookThingRequest = t.type({code: t.string})
app.get(
	'/course',
	handler(
		HandbookThingRequest,
		'query',
		({code}): HandlerResult<GetCourseResponse> => {
			const course = data.courses.find(c => c.code === code)
			return course
				? E.right(course)
				: E.left({code: 404, data: 'course not found'})
		},
	),
)
app.get(
	'/specialisation',
	handler(
		HandbookThingRequest,
		'query',
		({code}): HandlerResult<GetSpecialisationResponse> => {
			const specialisation = data.specialisations.find(c => c.code === code)
			return specialisation
				? E.right(specialisation)
				: E.left({code: 404, data: 'specialisation not found'})
		},
	),
)
app.get(
	'/unit',
	handler(
		HandbookThingRequest,
		'query',
		({code}): HandlerResult<GetUnitResponse> => {
			const unit = data.units.find(c => c.code === code)
			return unit ? E.right(unit) : E.left({code: 404, data: 'unit not found'})
		},
	),
)

app.post(
	'/schedule',
	handler(
		CreateScheduleRequest,
		'body',
		(params): HandlerResult<CreateScheduleResponse> => {
			return pipe(
				construct_schedule(params),
				E.mapLeft(data => ({code: 500, data: data})),
				E.map(s => ({
					years: s.years.map(y => ({
						sem1_units: y.sem1_units.map(u => u.code),
						sem2_units: y.sem2_units.map(u => u.code),
					})),
				})),
			)
		},
	),
)

app.post(
	'/shuffle-schedule',
	handler(
		ShuffleScheduleRequest,
		'body',
		(plan): HandlerResult<ShuffleScheduleResponse> => {
			throw 0
		},
	),
)

app.listen(3000, () => console.log('listening'))
