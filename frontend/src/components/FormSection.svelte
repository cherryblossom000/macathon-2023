<script lang="ts">
	import {type CourseRequirement} from 'shared'
	import FormBox from './FormBox.svelte'

	export let cur: CourseRequirement
	export let depth: number = 0

	$: selected = undefined as undefined | string | CourseRequirement

	const isNestedReq = (
		req: CourseRequirement['requirement'],
	): req is CourseRequirement['requirement'] & {items: CourseRequirement[]} =>
		typeof req?.items[0] === 'object'
</script>

<h2>{cur.title ?? ''}</h2>

{#if cur.requirement?.operator === 'AND'}
	{#if isNestedReq(cur.requirement)}
		{#each cur.requirement.items as next (next.title)}
			<br />
			<svelte:self cur={next} depth={depth + 1} />
		{/each}
	{:else}
		<div class="flex flex-row flex-wrap">
			{#each cur.requirement.items as next (next)}
				<FormBox sel={next} selected={true} unit={true} />
			{/each}
		</div>
	{/if}
{:else if cur.requirement?.operator === 'OR'}
	<div class="flex flex-row flex-wrap">
		{#if isNestedReq(cur.requirement)}
			<!--Inside is more requirements.-->
			{#each cur.requirement.items as next (next.title)}
				<FormBox
					sel={next.title}
					selected={next.title === selected}
					onclick={() => (selected = next.title)}
				/>
			{/each}
		{:else}
			<!--Inside is units-->
			{#each cur.requirement.items as next (next)}
				<FormBox
					unit={true}
					sel={next}
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
{:else}{/if}
