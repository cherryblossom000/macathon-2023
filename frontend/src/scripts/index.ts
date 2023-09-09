import {writable} from 'svelte/store'
import {type CoursePlan, type Semester} from './types'
import {type Course} from 'shared'

// TEMP COURSE MAP ////////////////////////////////
const courseLength = 6
const startYear = 2024

const trueFalse = () => Math.random() < 0.5

const genRanUnit = () => ({
	requirement: {},
	abbreviatedName: 'unit',
	code: `FIT${Math.floor(Math.random() * 3000)}`,
	title: 'Rizzing for IT Students',
})

const startPlan = Array(courseLength)
	.fill('')
	.map(
		(v, i): Semester => ({
			id: startYear + i / 2,
			year: startYear + Math.floor(i / 2),
			units: Array.from({length: 4}).map(() =>
				trueFalse() ? genRanUnit() : undefined,
			),
			teachingPeriod: i % 2 ? 'First semester' : 'Second semester',
		}),
	)
//////////////////////////////////////////////////////

export interface ApplicationState {
	coursePlan: CoursePlan
	selectedUnit: Course | undefined
}

export const appState = writable<ApplicationState>({
	coursePlan: startPlan,
	selectedUnit: undefined,
})

appState.subscribe(s => console.log(s))

export const selectUnit = (unit: Course | undefined) => {
	console.log(`Select unit: ${unit?.code}`)
	appState.update(s => ({...s, selectedUnit: unit}))
}
