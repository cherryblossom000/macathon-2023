/* eslint-disable @typescript-eslint/require-await */
import type {Course, Specialisation, Unit} from 'shared'

const readStuff = async <T>(path: string): Promise<T[]> =>
	fetch(`/data/${path}`).then(res => res.json() as Promise<T[]>)

export const courses = readStuff<Course>('courses.json')
export const specialisations = readStuff<Specialisation>('specialisations.json')
export const units = readStuff<Unit>('units.json')

export const unitsMap: Promise<ReadonlyMap<string, Unit>> = units.then(
	us => new Map<string, Unit>(us.map(u => [u.code, u])),
)
