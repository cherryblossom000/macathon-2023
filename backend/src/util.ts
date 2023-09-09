import * as E from 'fp-ts/lib/Either.js'
import {pipe} from 'fp-ts/lib/function.js'
import * as t from 'io-ts'
import type {VercelRequest, VercelResponse} from '@vercel/node'
import type {api} from 'shared'

export type HandlerResult<T> = E.Either<
	{status: number; data: t.Errors | string},
	T
>

export const handler =
	<T>(method: 'GET' | 'POST', fn: (req: VercelRequest) => HandlerResult<T>) =>
	(req: VercelRequest, res: VercelResponse): void => {
		res.setHeader('access-control-allow-credentials', 'true')
		res.setHeader('access-control-allow-origin', '*')
		res.setHeader('access-control-allow-methods', 'OPTIONS,GET,POST')
		res.setHeader('access-control-allow-headers', '*')
		if (req.method === 'OPTIONS') {
			res.status(200).end()
			return
		}

		if (req.method !== method) {
			res.status(405).end()
			return
		}

		pipe(
			fn(req),
			E.fold(
				({status: code, data}) =>
					res
						.status(code)
						.json({type: 'error', data} satisfies api.Response<T>),
				data =>
					res
						.status(200)
						.json({type: 'success', data} satisfies api.Response<T>),
			),
		)
	}

export const decodeHandler = <T, U>(
	method: 'GET' | 'POST',
	type: t.Decoder<unknown, T>,
	prop: 'body' | 'query',
	fn: (t: T) => HandlerResult<U>,
) =>
	handler(method, req =>
		pipe(
			type.decode(req[prop]),
			E.fold(e => E.left({status: 400, data: e}), fn),
		),
	)

export const HandbookThingRequest = t.type({code: t.string})
