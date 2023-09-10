<script lang="ts">
	import FormUnitBox from './FormUnitBox.svelte'
	export let items: readonly Readonly<{value: string; isUnit: boolean}>[]

	export let selected: readonly string[] = []
	export let count: number
</script>

<div class="flex flex-row flex-wrap gap-2">
	{#each items as { value, isUnit } (value)}
		<FormUnitBox
			{isUnit}
			{value}
			disabled={selected.length === count && !selected.includes(value)}
			selected={selected.includes(value)}
			onclick={() =>
				(selected = selected.includes(value)
					? selected.filter(x => x !== value)
					: [...selected, value])}
		/>
	{/each}
</div>
