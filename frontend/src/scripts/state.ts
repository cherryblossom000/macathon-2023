import {writable} from 'svelte/store'
import type {ScheduleUnit, TeachingPeriod} from 'shared'

// TEMP COURSE MAP BULLSHIT ////////////////////////////////

export type Unit = ScheduleUnit
export interface Sem {
	id: number
	year: number
	units: (undefined | Unit)[]
	teachingPeriod: TeachingPeriod
}

const courseLength = 6
const startYear = 2024

const trueFalse = () => Math.random() < 0.5

const genRanUnit = () => ({
	code: `FIT${String(Math.floor(Math.random() * 3000)).padStart(4, '0')}`,
	title: 'Rizzing for IT Students',
})

const startPlan: readonly Sem[] = Array.from(
	{length: courseLength},
	(_, i) => ({
		id: startYear + i / 2,
		year: startYear + Math.floor(i / 2),
		units: Array.from({length: 4}, () =>
			trueFalse() ? genRanUnit() : undefined,
		),
		teachingPeriod: i % 2 ? 'First semester' : 'Second semester',
	}),
)
//////////////////////////////////////////////////////

export interface ApplicationState {
	coursePlan: readonly Sem[]
	selectedUnit: Unit | undefined
	stage: 'Init' | 'Electives' | 'Table'
	formUnits: readonly string[]
	finalUnits: readonly string[]
}

export const appState = writable<ApplicationState>({
	coursePlan: startPlan,
	selectedUnit: undefined,
	stage: 'Init',
	formUnits: [],
	finalUnits: [],
})

appState.subscribe(s => console.log(s))

export const selectUnit = (unit: Unit | undefined) => {
	console.log(`Select unit: ${unit?.code}`)
	appState.update(s => ({...s, selectedUnit: unit}))
}
