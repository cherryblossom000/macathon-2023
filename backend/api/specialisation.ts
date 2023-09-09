import * as E from 'fp-ts/lib/Either.js'
import {handler, HandbookThingRequest, type HandlerResult} from '../src/util.js'
import * as data from '../src/data.js'
import type {api} from 'shared'

export default handler(
	'GET',
	HandbookThingRequest,
	'query',
	({code}): HandlerResult<api.GetSpecialisationResponse> => {
		const specialisation = data.specialisations.find(c => c.code === code)
		return specialisation
			? E.right(specialisation)
			: E.left({code: 404, data: 'specialisation not found'})
	},
)
