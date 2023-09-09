import * as E from 'fp-ts/lib/Either.js'
import * as data from '../src/data.js'
import {handler} from '../src/util.js'

export default handler('GET', () => E.right(data.units))
