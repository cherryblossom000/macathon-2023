<script lang="ts">
	import Error from '../Error.svelte'
	import ChooseUnit from './ChooseUnit.svelte'
	import UnitTable from './UnitTable.svelte'
	import {
		appState,
		generateSchedules,
		isNonEmpty,
		type Sem,
	} from '../../scripts'
	import type {Schedule} from 'shared'

	const convertSchedule = ({years}: Schedule): readonly Sem[] =>
		years.flatMap((y, i): readonly Sem[] => [
			{
				id: i * 2,
				year: 2024 + i,
				units: [
					...y.sem1Units,
					...Array.from({length: 4 - y.sem1Units.length}, () => undefined),
				],
				teachingPeriod: 'First semester',
			},
			{
				id: i * 2 + 1,
				year: 2024 + i,
				units: [
					...y.sem2Units,
					...Array.from({length: 4 - y.sem2Units.length}, () => undefined),
				],
				teachingPeriod: 'Second semester',
			},
		])

	const units = $appState.finalUnits.map(code => ({code}))
</script>

<div class="flex flex-row">
	<!-- <UnitTable coursePlan={$appState.coursePlan} /> -->
	{#await generateSchedules(units)}
		Generating course plan…
	{:then schedules}
		{#if isNonEmpty(schedules)}
			<UnitTable coursePlan={convertSchedule(schedules[0])} />
		{:else}
			<p>No schedules possible.</p>
		{/if}
	{:catch error}
		<Error {error}>generating schedule</Error>
	{/await}
	<ChooseUnit />
</div>
