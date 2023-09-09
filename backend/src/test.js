import { construct_schedules, get_all_units } from './schedule.js';
import * as E from 'fp-ts/lib/Either.js';
import { pipe } from 'fp-ts/lib/function.js';
import {} from 'shared';
let empty = {
    years: Array.from({ length: 3 }, () => ({ sem1_units: [], sem2_units: [] })),
};
let all = construct_schedules({
    num_years: 3,
    should_overload: false,
    wanted_electives: [],
    course: 'C2001',
});
pipe(all, E.fold(f => { }, s => {
    for (let sc of s) {
    }
}));
//# sourceMappingURL=test.js.map