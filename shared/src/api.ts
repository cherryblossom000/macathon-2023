import * as t from 'io-ts'
import type {Course, Specialisation, Unit} from './data.js'

/** array of unit codes */
export const Semester = t.array(t.string)
/** array of unit codes */
export type Semester = t.TypeOf<typeof Semester>

export const Year = t.type({
	year: t.number,
	semester1: Semester,
	semester2: Semester,
})
export type Year = t.TypeOf<typeof Year>

export const Schedule = t.array(Year)
export type Schedule = t.TypeOf<typeof Schedule>

export type Response<T> =
	| {type: 'success'; data: T}
	| {type: 'error'; data: t.Errors}

export const CreatePlanRequest = t.type({
	courseCode: t.string,
	unitCodes: t.array(t.string),
})
export type CreatePlanRequest = t.TypeOf<typeof CreatePlanRequest>
export type CreatePlanResponse = Schedule

export const ShufflePlanRequest = Schedule
export type ShufflePlanRequest = Schedule
export type ShufflePlanResponse = Schedule

export type GetCourseResponse = Course
export type GetSpecialisationResponse = Specialisation
export type GetUnitResponse = Unit
