import type {CourseRequirement} from 'shared'

export * from './api'
export * from './course'
export * from './state'

export const enumerate = <T>(xs: readonly T[]): [number, T][] =>
	xs.map((x, i) => [i, x])

export const isNonEmpty = <T>(xs: readonly T[]): xs is readonly [T, ...T[]] =>
	!!xs.length

export const isNestedReq = (
	req: CourseRequirement['requirement'],
): req is CourseRequirement['requirement'] & {items: CourseRequirement[]} =>
	typeof req.items[0] === 'object'
