<script lang="ts">
	import type {Course} from 'shared'
	import {
		appState,
		selectUnit,
		type Unit,
		type UnitIndices,
	} from '../../scripts'

	export let unit: Unit | undefined
	export let indices: UnitIndices
</script>

<td
	class="rounded-lg p-2 box-content
	{unit
		? `text-white bg-blue-600 border-4 ${
				$appState.selectedUnit &&
				$appState.selectedUnit[0] === indices[0] &&
				$appState.selectedUnit[1] === indices[1]
					? 'border-green-500'
					: 'border-blue-600'
		  }`
		: 'text-black border-dashed border-black border'}
		"
	on:click={() => selectUnit(indices)}
>
	{#if unit !== undefined}
		<strong>
			{unit.code}
		</strong>
		<p>
			{unit.title}
		</p>
	{:else}
		<strong>Add unit</strong>
	{/if}
</td>
