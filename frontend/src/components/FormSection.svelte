<script lang="ts">
	import {type CourseRequirement} from 'shared'
	import FormBox from './FormBox.svelte'

	export let cur: CourseRequirement
	export let depth: number = 0

	$: selected = undefined as undefined | string | CourseRequirement

	const isArrString = (
		x: CourseRequirement['requirement'],
	): x is CourseRequirement['requirement'] & {items: string[]} =>
		typeof x?.items[0] == 'string'
</script>

<h2>{cur.title ?? ''}</h2>

{#if cur.requirement?.operator == 'AND'}
	{#if isArrString(cur.requirement)}
		<div class="flex flex-row flex-wrap">
			{#each cur.requirement.items as next (next)}
				<FormBox sel={next} selected={true} unit={true} />
			{/each}
		</div>
	{:else}
		{#each cur.requirement.items as next (next.title)}
			<br />
			<svelte:self cur={next} depth={depth + 1} />
		{:else}{/each}
	{/if}
{:else if cur.requirement?.operator == 'OR'}
	<div class="flex flex-row flex-wrap">
		<!--Inside is units-->
		{#if isArrString(cur.requirement)}
			{#each cur.requirement.items as next (next)}
				<FormBox
					unit={true}
					sel={next}
					selected={next == selected}
					onclick={() => (selected = next)}
				/>
			{/each}

			<!--Inside is more requirements.-->
		{:else}
			{#each cur.requirement.items as next (next.title)}
				<FormBox
					sel={next.title}
					selected={next.title == selected}
					onclick={() => (selected = next.title)}
				/>
			{/each}
		{/if}
	</div>
	{#if selected != undefined}
		{#if !isArrString(cur.requirement)}
			<svelte:self
				depth={depth + 1}
				cur={cur.requirement.items.filter(v => v.title == selected)[0]}
			/>
		{/if}
	{/if}
{:else}{/if}
