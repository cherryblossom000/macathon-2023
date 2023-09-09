<script lang="ts">
	import type {Course} from 'shared'
	import {appState, selectUnit, type Unit} from '../scripts'

	export let unit: Unit | undefined
</script>

<td
	class="rounded-lg p-2 box-content
	{unit
		? `text-white bg-blue-600 border-4 ${
				$appState.selectedUnit?.code === unit.code
					? 'border-green-500'
					: 'border-blue-600'
		  }`
		: 'text-black border-dashed border-black border'}
		"
	on:click={() => selectUnit(unit)}
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
