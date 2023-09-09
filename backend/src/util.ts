import * as E from 'fp-ts/lib/Either.js'
import {pipe} from 'fp-ts/lib/function.js'
import * as t from 'io-ts'
import type {VercelRequest, VercelResponse} from '@vercel/node'

export type HandlerResult<T> = E.Either<{code: number; data: string}, T>
export const handler =
	<T, U>(
		method: 'GET' | 'POST',
		type: t.Decoder<unknown, T>,
		prop: 'body' | 'query',
		fn: (t: T) => HandlerResult<U>,
	) =>
	(req: VercelRequest, res: VercelResponse): void => {
		req.method !== method
			? res.status(405).send('')
			: pipe(
					type.decode(req[prop]),
					E.fold(
						e => res.status(400).send({type: 'error', data: e}),
						req =>
							pipe(
								fn(req),
								E.fold(
									({code, data}) =>
										res.status(code).json({type: 'error', data}),
									data => res.status(200).json({type: 'success', data}),
								),
							),
					),
			  )
	}

export const HandbookThingRequest = t.type({code: t.string})
