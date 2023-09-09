import * as E from 'fp-ts/lib/Either.js';
import { handler, HandbookThingRequest } from '../src/util.js';
import * as data from '../src/data.js';
import { api } from 'shared';
export default handler('GET', HandbookThingRequest, 'query', ({ code }) => {
    const unit = data.units.find(c => c.code === code);
    return unit ? E.right(unit) : E.left({ code: 404, data: 'unit not found' });
});
//# sourceMappingURL=unit.js.map