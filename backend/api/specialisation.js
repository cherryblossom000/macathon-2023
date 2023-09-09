import * as E from 'fp-ts/lib/Either.js';
import { handler, HandbookThingRequest } from '../src/util.js';
import * as data from '../src/data.js';
export default handler('GET', HandbookThingRequest, 'query', ({ code }) => {
    const specialisation = data.specialisations.find(c => c.code === code);
    return specialisation
        ? E.right(specialisation)
        : E.left({ code: 404, data: 'specialisation not found' });
});
//# sourceMappingURL=specialisation.js.map