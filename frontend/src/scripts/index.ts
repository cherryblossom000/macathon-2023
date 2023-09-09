export * from './api'
export * from './course2'
export * from './state'

export const enumerate = <T>(xs: readonly T[]): [number, T][] =>
	xs.map((x, i) => [i, x])
