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

const app = express()

app.use(bodyParser.json())

const handler =
	<T, U>(
		type: t.Decoder<unknown, T>,
		prop: 'body' | 'query',
		fn: (t: T) => U,
	): express.RequestHandler<
		unknown,
		Response<U>,
		unknown,
		unknown,
		Record<string, unknown>
	> =>
	(req, res) => {
		console.log(req[prop])
		pipe(
			type.decode(req[prop]),
			E.fold(
				e => res.status(400).send({type: 'error', data: e}),
				req => res.status(200).send({type: 'success', data: fn(req)}),
			),
		)
	}

const HandbookThingRequest = t.type({code: t.string})
app.get(
	'/course',
	handler(HandbookThingRequest, 'query', ({code}): GetCourseResponse => {
		return data.courses.find(c => c.code === code)!
	}),
)
app.get(
	'/specialisation',
	handler(
		HandbookThingRequest,
		'query',
		({code}): GetSpecialisationResponse => {
			throw 0
		},
	),
)
app.get(
	'/unit',
	handler(HandbookThingRequest, 'query', ({code}): GetUnitResponse => {
		throw 0
	}),
)

app.post(
	'/schedule',
	handler(
		CreateScheduleRequest,
		'body',
		({courseCode, unitCodes}): CreateScheduleResponse => {
			throw 0
		},
	),
)

app.post(
	'/shuffle-schedule',
	handler(ShuffleScheduleRequest, 'body', (plan): ShuffleScheduleResponse => {
		throw 0
	}),
)

app.listen(3000, () => console.log('listening'))
