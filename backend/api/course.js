import * as E from 'fp-ts/lib/Either.js';
import { handler, HandbookThingRequest } from '../src/util.js';
import * as data from '../src/data.js';
export default handler('GET', HandbookThingRequest, 'query', ({ code }) => {
    const course = data.courses.find(c => c.code === code);
    return course
        ? E.right(course)
        : E.left({ code: 404, data: 'course not found' });
});
//# sourceMappingURL=course.js.map