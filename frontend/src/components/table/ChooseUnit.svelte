<script lang="ts">
	import {appState, selectUnit} from '../../scripts'
	import {units, unitsMap} from '../../scripts/data'

	$: name = ''
	$: code = ''
	$: desc = ''
	appState.subscribe(s => {
		if (s.selectedUnit != undefined) {
			const [x, y] = s.selectedUnit
			name = s.coursePlan[x]?.units[y].title
			code = s.coursePlan[x]?.units[y].code
			desc =
				unitsMap
					.get(code)
					.description.replace('<p>', '')
					.replace('</p>', '')
					.split(' ')
					.slice(0, 50)
					.join(' ') + '...'
		}
	})
</script>

<div id="choose" class="w-64 p-2 mt-5 bg-yellow-300 rounded-md">
	{#if $appState.selectedUnit === undefined}
		Select a unit.
	{:else}
		<strong>{code}</strong><br />

		{name}<br /><br />
		{desc}<br />

		<a
			class="text-blue-500 underline"
			href="https://handbook.monash.edu/2023/units/{code}"
		>
			Handbook entry
		</a>
	{/if}
</div>

<style>
	#choose {
		min-height: 4rem;
		height: fit-content;
	}
</style>
