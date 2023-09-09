<script lang="ts">
	import ChooseNUnits from '../ChooseNUnits.svelte'
	import FormUnitBox from '../FormUnitBox.svelte'
	import {isNestedReq} from '../../scripts'
	import type {CourseRequirement} from 'shared'

	export let cur: CourseRequirement
	export let depth: number = 0

	let selected: readonly string[] = []
</script>

<svelte:element this={`h${Math.min(depth + 2, 6)}`}
	>{cur.title ?? ''}</svelte:element
>

{#if cur.requirement.operator === 'AND'}
	{#if isNestedReq(cur.requirement)}
		{#each cur.requirement.items as next (next.title)}
			<svelte:self cur={next} depth={depth + 1} />
		{/each}
	{:else}
		<div class="flex flex-row flex-wrap">
			{#each cur.requirement.items as next (next)}
				<FormUnitBox value={next} selected={true} unit={true} />
			{/each}
		</div>
	{/if}
{:else if cur.requirement.operator === 'OR'}
	<div class="flex flex-row flex-wrap">
		{#each isNestedReq(cur.requirement) ? cur.requirement.items.map(r => r.title) : cur.requirement.items as next (next)}
			<FormUnitBox
				value={next}
				selected={next === selected[0]}
				onclick={() => (selected = [next])}
			/>
		{/each}
	</div>
	{#if selected.length && isNestedReq(cur.requirement)}
		<svelte:self
			depth={depth + 1}
			cur={cur.requirement.items.find(v => v.title === selected[0])}
		/>
	{/if}
{:else}
	<!-- pick 2 of the units -->
	<div class="flex flex-row flex-wrap">
		<ChooseNUnits
			bind:selected
			count={2}
			units={isNestedReq(cur.requirement)
				? // Inside is more requirements
				  cur.requirement.items.map(r => r.title)
				: // Inside is units
				  cur.requirement.items}
		/>
	</div>
	{#if selected.length === 2 && isNestedReq(cur.requirement)}
		<!-- TODO: investigate wtf prettier is doing here? -->
		{#each cur.requirement.items.filter( v => selected.includes(v.title), ) as next}
			<svelte:self depth={depth + 1} cur={next} />
		{/each}
	{/if}
{/if}
