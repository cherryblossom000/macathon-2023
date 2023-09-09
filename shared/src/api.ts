import * as t from 'io-ts'
import {ScheduleParameters} from './schedule.js'
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
	| {
			type: 'error'
			/**
			 * - `t.Errors` is for an io-ts error (invalid request)
			 * - `string` is for an arbitrary error message
			 */
			data: t.Errors | string
	  }

export const CreateScheduleRequest = ScheduleParameters
export type CreateScheduleRequest = ScheduleParameters
export type CreateScheduleResponse = Schedule

export const ShuffleScheduleRequest = Schedule
export type ShuffleScheduleRequest = Schedule
export type ShuffleScheduleResponse = Schedule

export type GetCourseResponse = Course
export type GetSpecialisationResponse = Specialisation
export type GetUnitResponse = Unit
