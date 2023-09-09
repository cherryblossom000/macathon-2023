import * as data from '../src/data.js'
import type {VercelRequest, VercelResponse} from '@vercel/node'
import {api} from 'shared'

export default (req: VercelRequest, res: VercelResponse): void => {
	if (req.method !== 'GET') {
		res.status(405).send('')
		return
	}
	res.status(200).json(data.units satisfies api.GetUnitsResponse)
}
