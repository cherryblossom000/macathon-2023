import {readFile, readdir} from 'node:fs/promises'
import type {Course, Specialisation, Unit} from 'shared'

const dataDir = new URL('../../scraper/data/', import.meta.url)

const readStuff = async <T>(path: string): Promise<T[]> => {
	const dir = new URL(path, dataDir)
	return readdir(dir).then(paths =>
		Promise.all(
			paths.map(path => readFile(new URL(path, dir), 'utf8').then(JSON.parse)),
		),
	)
}

export const courses = await readStuff<Course>('courses/')
export const specialisations =
	await readStuff<Specialisation>('specialisations/')

let bad = ["FIT3047", "FIT2032"]

export const units = (await readStuff<Unit>('units/')).filter(x => x.code != "FIT3047" && x.code != "FIT2032")

export const unitsMap: ReadonlyMap<string, Unit> = new Map<string, Unit>(
	units.map(u => [u.code, u]),
)
