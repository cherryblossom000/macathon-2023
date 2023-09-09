import type {Course, TeachingPeriod} from 'shared'

export interface Semester {
	id: number
	year: number
	teachingPeriod: TeachingPeriod
	units: (Course | undefined)[]
}

export type CoursePlan = Semester[]
