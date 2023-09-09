<script lang="ts">
	import UnitSelectBox from '../UnitSelectBox.svelte'

	export let unit: string
	let selected = false
</script>

<UnitSelectBox
	bind:selected
	value={unit}
	unit={true}
	onclick={() => (selected = !selected)}
/>
