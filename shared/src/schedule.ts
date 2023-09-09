import * as t from 'io-ts'

export const ScheduleParameters = t.type({
	course: t.string,
	wanted_electives: t.array(t.string),
	should_overload: t.boolean,
	num_years: t.union([t.literal(3), t.literal(4), t.literal(5)]),
})
export type ScheduleParameters = t.TypeOf<typeof ScheduleParameters>
