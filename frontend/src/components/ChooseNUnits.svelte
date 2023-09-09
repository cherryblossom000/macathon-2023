<script lang="ts">
	import FormUnitBox from './FormUnitBox.svelte'
	export let units: readonly string[]

	export let selected: readonly string[] = []
	export let count: number
</script>

{#each units as unit (unit)}
	<FormUnitBox
		unit={true}
		disabled={selected.length === count && !selected.includes(unit)}
		value={unit}
		selected={selected.includes(unit)}
		onclick={() =>
			(selected = selected.includes(unit)
				? selected.filter(x => x !== unit)
				: [...selected, unit])}
	/>
{/each}
