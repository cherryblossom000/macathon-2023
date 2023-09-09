import * as E from 'fp-ts/lib/Either.js'
import {
	decodeHandler,
	HandbookThingRequest,
	type HandlerResult,
} from '../src/util.js'
import * as data from '../src/data.js'
import type {api} from 'shared'

export default decodeHandler(
	'GET',
	HandbookThingRequest,
	'query',
	({code}): HandlerResult<api.GetSpecialisationResponse> => {
		const specialisation = data.specialisations.find(c => c.code === code)
		return specialisation
			? E.right(specialisation)
			: E.left({status: 404, data: 'specialisation not found'})
	},
)
