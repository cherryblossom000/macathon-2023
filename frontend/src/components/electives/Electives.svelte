<script lang="ts">
	import ElectiveUnitSelectBox from './ElectiveUnitSelectBox.svelte'
	import {appState, getAllUnits} from '../../scripts'
</script>

<div>
	<h2>Choose electives</h2>
	{#await getAllUnits()}
		<p>Loading units…</p>
	{:then allUnits}
		<div>
			{#each allUnits as unit}
				<ElectiveUnitSelectBox unit={unit.code} />
			{/each}
		</div>
	{:catch error}
		<p>Error fetching units: {error}</p>
	{/await}
	<button
		class="btn"
		on:click={() => appState.update(s => ({...s, stage: 'Table'}))}
	>
		Done!
	</button>
</div>
