import * as E from 'fp-ts/lib/Either.js'
import * as data from '../data.js'
import {handler} from '../util.js'

export default handler('GET', () => E.right(data.units))
