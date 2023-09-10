<script lang="ts">
	import {appState, selectUnit, type UnitIndices} from '../../scripts'
	import type {SimpleUnit} from 'shared'

	export let unit: SimpleUnit | undefined
	export let indices: UnitIndices
</script>

<td
	class="rounded-lg p-2 box-content
	{$appState.finalUnits.includes(unit.code)
		? 'bg-blue-600 border-blue-600'
		: 'bg-gray-500 border-gray-500'}

	{unit
		? `text-white 
		 border-4 ${
				$appState.selectedUnit &&
				$appState.selectedUnit[0] === indices[0] &&
				$appState.selectedUnit[1] === indices[1]
					? '!border-red-500'
					: ''
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
