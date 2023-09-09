import * as t from 'io-ts'

export const ScheduleParameters = t.type({
	course: t.string,
	wanted_electives: t.array(t.string),
	should_overload: t.boolean,
	num_years: t.union([t.literal(3), t.literal(4), t.literal(5)]),
})
export type ScheduleParameters = t.TypeOf<typeof ScheduleParameters>

export const Year = t.type({
	/** array of unit codes */
	sem1_units: t.array(t.string),
	/** array of unit codes */
	sem2_units: t.array(t.string),
})
export type Year = t.TypeOf<typeof Year>

export const Schedule = t.type({years: t.array(Year)})
export type Schedule = t.TypeOf<typeof Schedule>
