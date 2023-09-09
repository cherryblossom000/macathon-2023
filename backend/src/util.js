import * as E from 'fp-ts/lib/Either.js';
import { pipe } from 'fp-ts/lib/function.js';
import * as t from 'io-ts';
export const handler = (method, type, prop, fn) => (req, res) => {
    if (req.method !== method)
        return res.status(405);
    pipe(type.decode(req[prop]), E.fold(e => res.status(400).send({ type: 'error', data: e }), req => pipe(fn(req), E.fold(({ code, data }) => res.status(code).json({ type: 'error', data }), data => res.status(200).json({ type: 'success', data })))));
};
export const HandbookThingRequest = t.type({ code: t.string });
//# sourceMappingURL=util.js.map