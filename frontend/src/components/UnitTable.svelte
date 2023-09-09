<script lang="ts">
	import type {Course} from 'shared'
	import App from '../App.svelte'

	import UnitBox from './UnitBox.svelte'

	import {appState, } from '../scripts/index'
</script>

<table class="h-64 border-separate border-spacing-2">
	{#each $appState.coursePlan as sem (sem.id)}
		<tr>
			<!--TODO: ADD ID TO AVOID BUGS-->
			{#each sem.units as unit}
				<UnitBox {unit}/>
			{/each}
		</tr>
	{/each}
</table>

<style>
	table,
	tr,
	th,
	td {
		@apply border-black m-1 p-1;
	}
</style>
