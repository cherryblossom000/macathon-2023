<script lang="ts">
	import Button from '../Button.svelte'
	import ChooseNItems from '../ChooseNItems.svelte'
	import Error from '../Error.svelte'
	import {appState} from '../../scripts'

	let selected: readonly string[] = []

	const count = 24 - $appState.finalUnits.length
</script>

<div class="max-w-screen-lg w-full">
	<h2>Choose at most {count} electives</h2>
	{#await $appState.allUnits}
		<p>Loading units…</p>
	{:then allUnits}
		<div>
			<ChooseNItems
				bind:selected
				{count}
				items={allUnits
					.slice(0, 20)
					.map(u => u.code)
					.filter(u => !$appState.finalUnits.includes(u))
					.map(value => ({value, isUnit: true}))}
			/>
		</div>
	{:catch error}
		<Error {error}>fetching units</Error>
		<p>Error fetching units: {error}</p>
	{/await}
	<br />
	<!-- TODO: back button? -->
	<Button
		disabled={selected.length === count}
		onclick={() =>
			appState.update(s => ({
				...s,
				stage: 'Table',
				finalUnits: [...s.finalUnits, ...s.formUnits],
			}))}
	>
		Done!
	</Button>
</div>
