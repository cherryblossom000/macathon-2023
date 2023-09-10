<script lang="ts">
	import ChooseNItems from '../ChooseNItems.svelte'
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
		<div class="flex flex-row flex-wrap gap-5">
			{#each cur.requirement.items as next (next)}
				<FormUnitBox value={next} selected={true} isUnit={true} />
			{/each}
		</div>
	{/if}
{:else if cur.requirement.operator === 'OR'}
	<div class="flex flex-row flex-wrap gap-5">
		{#each isNestedReq(cur.requirement) ? cur.requirement.items.map( r => ({title: r.title, isUnit: false}), ) : cur.requirement.items.map( title => ({title, isUnit: true}), ) as { title, isUnit } (title)}
			<FormUnitBox
				{isUnit}
				value={title}
				selected={title === selected[0]}
				onclick={() => (selected = [title])}
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
	<p>Choose 2</p>
	<ChooseNItems
		bind:selected
		count={2}
		items={isNestedReq(cur.requirement)
			? // Inside is more requirements
			  cur.requirement.items.map(r => ({value: r.title, isUnit: false}))
			: // Inside is units
			  cur.requirement.items.map(value => ({value, isUnit: true}))}
	/>
	{#if selected.length === 2 && isNestedReq(cur.requirement)}
		<!-- TODO: investigate wtf prettier is doing here? -->
		{#each cur.requirement.items.filter( v => selected.includes(v.title), ) as next}
			<svelte:self depth={depth + 1} cur={next} />
		{/each}
	{/if}
{/if}
