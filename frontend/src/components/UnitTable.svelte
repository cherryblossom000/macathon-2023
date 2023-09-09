<script lang="ts">
	import UnitBox from './UnitBox.svelte'
	import {appState, enumerate} from '../scripts'
</script>

<table class="w-full border-separate border-spacing-2">
	{#each $appState.coursePlan as sem (sem.id)}
		<tr>
			{#each enumerate(sem.units) as [i, unit] (i)}
				<UnitBox {unit} />
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
