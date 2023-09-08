import bodyParser from 'body-parser'
import express from 'express'
import * as E from 'fp-ts/Either'
import {pipe} from 'fp-ts/function'
import * as t from 'io-ts'
import {
	CreatePlanRequest,
	ShufflePlanRequest,
	type CreatePlanResponse,
	type GetUnitResponse,
	type ShufflePlanResponse,
	type Response,
} from 'shared/dist/api.js'

const app = express()

app.use(bodyParser.json())

const handler =
	<T, U>(
		type: t.Decoder<unknown, T>,
		fn: (t: T) => U,
		prop: 'body' | 'params' = 'body',
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

app.post(
	'/plan',
	handler(
		CreatePlanRequest,
		({courseCode, unitCodes}): CreatePlanResponse => {},
	),
)

app.post(
	'/shuffle-plan',
	handler(ShufflePlanRequest, (plan): ShufflePlanResponse => {}),
)

app.get(
	'/unit',
	handler(t.type({code: t.string}), ({code}): GetUnitResponse => {}, 'params'),
)
