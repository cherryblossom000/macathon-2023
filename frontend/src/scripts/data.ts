/* eslint-disable @typescript-eslint/require-await */
import type {Course, Specialisation, Unit} from 'shared'
import a from './units'

const readStuff = async <T>(path: string): Promise<T[]> =>
	fetch(`/data/${path}`).then(res => res.json() as Promise<T[]>)

export const courses = readStuff<Course>('courses.json')
export const specialisations = readStuff<Specialisation>('specialisations.json')
export const units: Unit[] = a

export const unitsMap: ReadonlyMap<string, Unit> = new Map<string, Unit>(
	units.map(u => [u.code, u]),
)
