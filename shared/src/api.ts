import * as t from 'io-ts'
import {Schedule, ScheduleParameters} from './schedule.js'
import type {Course, Specialisation, Unit} from './data.js'

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

export const GenerateSchedulesRequest = ScheduleParameters
export type GenerateSchedulesRequest = ScheduleParameters
export type GenerateSchedulesResponse = Schedule[]

export type GetCourseResponse = Course
export type GetSpecialisationResponse = Specialisation
export type GetUnitResponse = Unit

export type GetUnitsResponse = Unit[]
