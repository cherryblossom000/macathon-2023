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
	const f = new Promise<Schedule[]>(resolve =>
		setTimeout(() => resolve(generateSchedules(units)), 50),
	)
</script>

<div class="flex flex-row">
	<!-- <UnitTable coursePlan={$appState.coursePlan} /> -->
	{#await f}
		<div id="wrapper">
			<div class="profile-main-loader">
				<div class="loader">
					<svg class="circular-loader" viewBox="25 25 50 50">
						<circle
							class="loader-path"
							cx="50"
							cy="50"
							r="20"
							fill="none"
							stroke="#70c542"
							stroke-width="2"
						/>
					</svg>
				</div>
			</div>
		</div>
	{:then schedules}
		{#if isNonEmpty(schedules)}
			<UnitTable coursePlan={convertSchedule(schedules[0])} />
			<ChooseUnit />
		{:else}
			<p>No schedules possible.</p>
		{/if}
	{:catch error}
		<Error {error}>generating schedule</Error>
	{/await}
</div>

<style>
	#wrapper {
		position: relative;
		/*background:#333;*/
		height: 100%;
	}

	.profile-main-loader {
		left: 50% !important;
		margin-left: -100px;
		position: fixed !important;
		top: 50% !important;
		margin-top: -100px;
		width: 45px;
		z-index: 9000 !important;
	}

	.profile-main-loader .loader {
		position: relative;
		margin: 0px auto;
		width: 200px;
		height: 200px;
	}
	.profile-main-loader .loader:before {
		content: '';
		display: block;
		padding-top: 100%;
	}

	.circular-loader {
		-webkit-animation: rotate 2s linear infinite;
		animation: rotate 2s linear infinite;
		height: 100%;
		-webkit-transform-origin: center center;
		-ms-transform-origin: center center;
		transform-origin: center center;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		margin: auto;
	}

	.loader-path {
		stroke-dasharray: 150, 200;
		stroke-dashoffset: -10;
		-webkit-animation:
			dash 1.5s ease-in-out infinite,
			color 6s ease-in-out infinite;
		animation:
			dash 1.5s ease-in-out infinite,
			color 6s ease-in-out infinite;
		stroke-linecap: round;
	}

	@-webkit-keyframes rotate {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@keyframes rotate {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
	@-webkit-keyframes dash {
		0% {
			stroke-dasharray: 1, 200;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 89, 200;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 89, 200;
			stroke-dashoffset: -124;
		}
	}
	@keyframes dash {
		0% {
			stroke-dasharray: 1, 200;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 89, 200;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 89, 200;
			stroke-dashoffset: -124;
		}
	}
	@-webkit-keyframes color {
		0% {
			stroke: #70c542;
		}
		40% {
			stroke: #70c542;
		}
		66% {
			stroke: #70c542;
		}
		80%,
		90% {
			stroke: #70c542;
		}
	}
	@keyframes color {
		0% {
			stroke: #70c542;
		}
		40% {
			stroke: #70c542;
		}
		66% {
			stroke: #70c542;
		}
		80%,
		90% {
			stroke: #70c542;
		}
	}
</style>
