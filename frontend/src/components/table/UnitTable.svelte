<script lang="ts">
	import UnitBox from './UnitBox.svelte'
	import {onMount} from 'svelte'
	import {appState, enumerate, type Sem} from '../../scripts'

	export let coursePlan: readonly Sem[]

	onMount(() => appState.update(s => ({...s, coursePlan})))
</script>

<table class="w-full max-w-screen-md border-separate border-spacing-2">
	{#each enumerate(coursePlan) as [i, sem] (sem.id)}
		<tr>
			{#each enumerate(sem.units) as [j, unit] (i * 4 + j)}
				<UnitBox {unit} indices={[i, j]} />
			{/each}
		</tr>
	{/each}
</table>

<style>
	table,
	tr {
		@apply border-black m-1 p-1;
	}
</style>
