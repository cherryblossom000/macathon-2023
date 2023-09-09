<script lang="ts">
	import ChooseNItems from '../ChooseNItems.svelte'
	import Button from '../Button.svelte'
	import {appState, getAllUnits} from '../../scripts'

	let selected: readonly string[] = []

	const count = 24 - $appState.finalUnits.length
</script>

<div>
	<h2>Choose at most {count} electives</h2>
	{#await getAllUnits()}
		<p>Loading units…</p>
	{:then allUnits}
		<div>
			<ChooseNItems
				bind:selected
				{count}
				items={allUnits
					.map(u => u.code)
					.filter(u => !$appState.finalUnits.includes(u))
					.map(value => ({value, isUnit: true}))}
			/>
		</div>
	{:catch error}
		<p>Error fetching units: {error}</p>
	{/await}
	<!-- TODO: back button? -->
	<Button
		disabled={selected.length === count}
		onclick={() =>
			appState.update(s => ({...s, stage: 'Table', finalUnits: s.formUnits}))}
	>
		Done!
	</Button>
</div>
