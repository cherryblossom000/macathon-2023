<script lang="ts">
	import type {Course} from 'shared'
	import {appState, selectUnit, type Unit} from '../scripts'

	export let unit: Unit | undefined
</script>

<td
	class="rounded-lg p-2 box-content
	{unit
		? `text-white bg-blue-600 border-4 border-blue-600`
		: `text-black border-dashed border-black border`}
		{//TODO This is fucked
	unit !== undefined &&
	$appState.selectedUnit !== undefined &&
	$appState.selectedUnit.code === unit.code
		? `!border-green-500 border-4`
		: ``}
		"
	on:click={() => selectUnit(unit)}
>
	{#if unit !== undefined}
		<b>
			{unit.code}
		</b>
		<p>
			{unit.title}
		</p>
	{:else}
		<b>Add unit</b>
	{/if}
</td>
