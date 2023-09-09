<script lang="ts">
	import Button from '../Button.svelte'
	import ElectiveUnitSelectBox from './ElectiveUnitSelectBox.svelte'
	import {appState, getAllUnits} from '../../scripts'
</script>

<!-- TODO: only offer units not already chosen -->
<!-- TODO: restrict # of units that can be selected -->
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
	<!-- TODO: back button? -->
	<Button onclick={() => appState.update(s => ({...s, stage: 'Table'}))}>
		Done!
	</Button>
</div>
