<script lang="ts">
	import UnitSelectBox from '../FormUnitBox.svelte'
	import type {CourseRequirement} from 'shared'

	export let cur: CourseRequirement
	export let depth: number = 0

	let selected: undefined | string | CourseRequirement = undefined

	const isNestedReq = (
		req: CourseRequirement['requirement'],
	): req is CourseRequirement['requirement'] & {items: CourseRequirement[]} =>
		typeof req?.items[0] === 'object'
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
				<UnitSelectBox value={next} selected={true} unit={true} />
			{/each}
		</div>
	{/if}
{:else if cur.requirement.operator === 'OR'}
	<div class="flex flex-row flex-wrap">
		{#if isNestedReq(cur.requirement)}
			<!--Inside is more requirements.-->
			{#each cur.requirement.items as next (next.title)}
				<UnitSelectBox
					value={next.title}
					selected={next.title === selected}
					onclick={() => (selected = next.title)}
				/>
			{/each}
		{:else}
			<!--Inside is units-->
			{#each cur.requirement.items as next (next)}
				<UnitSelectBox
					unit={true}
					value={next}
					selected={next === selected}
					onclick={() => (selected = next)}
				/>
			{/each}
		{/if}
	</div>
	{#if selected !== undefined}
		{#if isNestedReq(cur.requirement)}
			<svelte:self
				depth={depth + 1}
				cur={cur.requirement.items.filter(v => v.title === selected)[0]}
			/>
		{/if}
	{/if}
{:else}
	<!-- TODO: operator == 2 -->
{/if}
