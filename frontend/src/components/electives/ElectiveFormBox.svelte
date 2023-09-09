<script lang="ts">
	import UnitSelectBox from '../FormUnitBox.svelte'

	export let unit: string
	let selected = false
</script>

<UnitSelectBox
	{selected}
	value={unit}
	unit={true}
	onclick={() => (selected = !selected)}
/>
