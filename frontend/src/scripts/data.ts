/* eslint-disable @typescript-eslint/require-await */
import type {Course, Specialisation, Unit} from 'shared'

const readStuff = async <T>(path: string): Promise<T[]> =>
	fetch(`/data/${path}`).then(res => res.json() as Promise<T[]>)

export const courses = await readStuff<Course>('courses.json')
export const specialisations = await readStuff<Specialisation>(
	'specialisations.json',
)
export const units = await readStuff<Unit>('units.json')

export const unitsMap: ReadonlyMap<string, Unit> = new Map<string, Unit>(
	units.map(u => [u.code, u]),
)
