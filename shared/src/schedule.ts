import * as t from 'io-ts'

const ScheduleUnit = t.intersection([
	t.type({code: t.string}),
	t.partial({semester: t.union([t.literal(1), t.literal(2), t.undefined])}),
	t.partial({year: t.union([t.number, t.undefined])}),
])
export type ScheduleUnit = t.TypeOf<typeof ScheduleUnit>

export const ScheduleParameters = t.type({
	units: t.array(ScheduleUnit),
	numYears: t.union([t.literal(3), t.literal(4), t.literal(5)]),
})
export type ScheduleParameters = t.TypeOf<typeof ScheduleParameters>

export const Year = t.type({
	/** array of unit codes */
	sem1Units: t.array(t.string),
	/** array of unit codes */
	sem2Units: t.array(t.string),
})
export type Year = t.TypeOf<typeof Year>

export const Schedule = t.type({years: t.array(Year)})
export type Schedule = t.TypeOf<typeof Schedule>
