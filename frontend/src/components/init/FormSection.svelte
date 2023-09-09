<script lang="ts">
	import FormUnitBox from '../FormUnitBox.svelte'
	import type {CourseRequirement} from 'shared'

	export let cur: CourseRequirement
	export let depth: number = 0

	let selected: readonly string[] = []

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
				<FormUnitBox value={next} selected={true} unit={true} />
			{/each}
		</div>
	{/if}
{:else if cur.requirement.operator === 'OR'}
	<div class="flex flex-row flex-wrap">
		{#if isNestedReq(cur.requirement)}
			<!--Inside is more requirements.-->
			{#each cur.requirement.items as next (next.title)}
				<FormUnitBox
					value={next.title}
					selected={next.title === selected[0]}
					onclick={() => (selected = [next.title])}
				/>
			{/each}
		{:else}
			<!--Inside is units-->
			{#each cur.requirement.items as next (next)}
				<FormUnitBox
					unit={true}
					value={next}
					selected={next === selected[0]}
					onclick={() => (selected = [next])}
				/>
			{/each}
		{/if}
	</div>
	{#if selected.length}
		{#if isNestedReq(cur.requirement)}
			<svelte:self
				depth={depth + 1}
				cur={cur.requirement.items.find(v => v.title === selected[0])}
			/>
		{/if}
	{/if}
{:else}
	<!-- pick 2 of the units -->
	<div class="flex flex-row flex-wrap">
		{#if isNestedReq(cur.requirement)}
			<!--Inside is more requirements.-->
			{#each cur.requirement.items as next (next.title)}
				<FormUnitBox
					value={next.title}
					disabled={selected.length === 2 && !selected.includes(next.title)}
					selected={selected.includes(next.title)}
					onclick={() =>
						(selected = selected.includes(next.title)
							? selected.filter(x => x !== next.title)
							: [...selected, next.title])}
				/>
			{/each}
		{:else}
			<!--Inside is units-->
			{#each cur.requirement.items as next (next)}
				<FormUnitBox
					unit={true}
					disabled={selected.length === 2 && !selected.includes(next)}
					value={next}
					selected={selected.includes(next)}
					onclick={() =>
						(selected = selected.includes(next)
							? selected.filter(x => x !== next)
							: [...selected, next])}
				/>
			{/each}
		{/if}
	</div>
	{#if selected.length === 2}
		{#if isNestedReq(cur.requirement)}
			<!-- TODO: investigate wtf prettier is doing here? -->
			{#each cur.requirement.items.filter( v => selected.includes(v.title), ) as next}
				<svelte:self depth={depth + 1} cur={next} />
			{/each}
		{/if}
	{/if}
{/if}
