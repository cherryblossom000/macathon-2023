import * as E from 'fp-ts/lib/Either.js';
import * as t from 'io-ts';
import type { VercelRequest, VercelResponse } from '@vercel/node';
export type HandlerResult<T> = E.Either<{
    code: number;
    data: string;
}, T>;
export declare const handler: <T, U>(method: 'GET' | 'POST', type: t.Decoder<unknown, T>, prop: 'body' | 'query', fn: (t: T) => HandlerResult<U>) => (req: VercelRequest, res: VercelResponse) => VercelResponse | undefined;
export declare const HandbookThingRequest: t.TypeC<{
    code: t.StringC;
}>;
