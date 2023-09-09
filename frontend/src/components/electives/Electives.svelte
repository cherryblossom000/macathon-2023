<script lang="ts">
	import Button from '../Button.svelte'
	import ElectiveUnitSelectBox from './ElectiveFormBox.svelte'
	import {appState, getAllUnits} from '../../scripts'
</script>

<!-- TODO: restrict # of units that can be selected -->
<div>
	<h2>Choose electives</h2>
	{#await getAllUnits().then(us => us.map(u => u.code))}
		<p>Loading units…</p>
	{:then allUnits}
		<div>
			{#each allUnits.filter(u => !$appState.finalUnits.includes(u)) as unit (unit)}
				<ElectiveUnitSelectBox {unit} />
			{/each}
		</div>
	{:catch error}
		<p>Error fetching units: {error}</p>
	{/await}
	<!-- TODO: back button? -->
	<Button
		onclick={() =>
			appState.update(s => ({...s, stage: 'Table', finalUnits: s.formUnits}))}
	>
		Done!
	</Button>
</div>
