import bodyParser from 'body-parser'
import express from 'express'
import * as E from 'fp-ts/Either'
import {pipe} from 'fp-ts/function'
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

const app = express()

app.use(bodyParser.json())

const handler =
	<T, U>(
		type: t.Decoder<unknown, T>,
		prop: 'body' | 'params',
		fn: (t: T) => U,
	): express.RequestHandler<
		unknown,
		Response<U>,
		unknown,
		unknown,
		Record<string, unknown>
	> =>
	(req, res) =>
		pipe(
			type.decode(req[prop]),
			E.fold(
				e => res.status(400).send({type: 'error', data: e}),
				req => res.status(200).send({type: 'success', data: fn(req)}),
			),
		)

const HandbookThingRequest = t.type({code: t.string})
app.get(
	'/course',
	handler(HandbookThingRequest, 'params', ({code}): GetCourseResponse => {}),
)
app.get(
	'/specialisation',
	handler(
		HandbookThingRequest,
		'params',
		({code}): GetSpecialisationResponse => {},
	),
)
app.get(
	'/unit',
	handler(HandbookThingRequest, 'params', ({code}): GetUnitResponse => {}),
)

app.post(
	'/schedule',
	handler(
		CreateScheduleRequest,
		'body',
		({courseCode, unitCodes}): CreateScheduleResponse => {},
	),
)

app.post(
	'/shuffle-schedule',
	handler(
		ShuffleScheduleRequest,
		'body',
		(plan): ShuffleScheduleResponse => {},
	),
)
