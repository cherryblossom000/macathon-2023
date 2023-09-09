import * as E from 'fp-ts/lib/Either.js'
import {handler, HandbookThingRequest, type HandlerResult} from '../src/util.js'
import * as data from '../src/data.js'
import type {api} from 'shared'

export default handler(
	'GET',
	HandbookThingRequest,
	'query',
	({code}): HandlerResult<api.GetCourseResponse> => {
		const course = data.courses.find(c => c.code === code)
		return course
			? E.right(course)
			: E.left({code: 404, data: 'course not found'})
	},
)
