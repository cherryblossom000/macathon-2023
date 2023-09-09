import * as data from '../src/data.js'
import type {VercelRequest, VercelResponse} from '@vercel/node'
import {api} from 'shared'

export default (req: VercelRequest, res: VercelResponse): void => {
	if (req.method !== 'GET') {
		res.status(405).send('')
		return
	}
	const body: api.GetUnitsResponse = data.units
	res.status(200).json(body)
}
