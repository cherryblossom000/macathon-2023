import * as t from 'io-ts'

const ScheduleParametersUnit = t.intersection([
	t.type({code: t.string}),
	t.partial({semester: t.union([t.literal(1), t.literal(2), t.undefined])}),
	t.partial({year: t.union([t.number, t.undefined])}),
])
export type ScheduleParametersUnit = t.TypeOf<typeof ScheduleParametersUnit>

export const ScheduleParameters = t.type({
	units: t.array(ScheduleParametersUnit),
	numYears: t.union([t.literal(3), t.literal(4), t.literal(5)]),
})
export type ScheduleParameters = t.TypeOf<typeof ScheduleParameters>

const ScheduleUnit = t.type({
	code: t.string,
	title: t.string,
})
export type ScheduleUnit = t.TypeOf<typeof ScheduleUnit>

export const Year = t.type({
	sem1Units: t.array(ScheduleUnit),
	sem2Units: t.array(ScheduleUnit),
})
export type Year = t.TypeOf<typeof Year>

export const Schedule = t.type({years: t.array(Year)})
export type Schedule = t.TypeOf<typeof Schedule>
