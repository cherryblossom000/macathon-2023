<script lang="ts">
	import FormUnitBox from '../FormUnitBox.svelte'

	export let unit: string
	let selected = false
</script>

<FormUnitBox
	{selected}
	value={unit}
	unit={true}
	onclick={() => (selected = !selected)}
/>
