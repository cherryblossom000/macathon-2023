import * as A from 'fp-ts/lib/Array.js';
import * as E from 'fp-ts/lib/Either.js';
import * as O from 'fp-ts/lib/Option.js';
import { pipe } from 'fp-ts/lib/function.js';
import { api } from 'shared';
import { handler } from '../src/util.js';
import * as data from '../src/data.js';
import { construct_schedules } from '../src/schedule.js';
export default handler('POST', api.CreateSchedulesRequest, 'body', (params) => {
    return pipe(params.wanted_electives, A.traverse(E.getApplicativeValidation(A.getSemigroup()))(u => pipe(data.unitsMap.get(u), O.fromNullable, E.fromOption(() => [u]))), E.fold(us => E.left({ code: 400, data: `invalid units: ${us.join(', ')}` }), us => pipe(construct_schedules({
        ...params,
        wanted_electives: us,
    }), E.mapLeft(data => ({ code: 500, data: data })), E.map(ss => ss.map(s => ({
        years: s.years.map(y => ({
            sem1_units: y.sem1_units.map(u => u.code),
            sem2_units: y.sem2_units.map(u => u.code),
        })),
    }))))));
});
//# sourceMappingURL=schedule.js.map