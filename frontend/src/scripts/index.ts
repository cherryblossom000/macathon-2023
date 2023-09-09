import type {CourseRequirement} from 'shared'

export * from './api'
export * from './course2'
export * from './state'

export const enumerate = <T>(xs: readonly T[]): [number, T][] =>
	xs.map((x, i) => [i, x])

export const isNestedReq = (
	req: CourseRequirement['requirement'],
): req is CourseRequirement['requirement'] & {items: CourseRequirement[]} =>
	typeof req.items[0] === 'object'
