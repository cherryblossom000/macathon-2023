<script lang="ts">
	import {onDestroy, onMount} from 'svelte'
	import {appState} from '../scripts/index'

	export let sel: string

	export let selected: boolean

	export let unit = false

	$: {
		if (unit) {
			appState.update(s => ({
				...s,
				formUnits: selected
					? s.formUnits.includes(sel)
						? s.formUnits
						: [...s.formUnits, sel]
					: s.formUnits.filter(v => v !== sel),
			}))
		}
	}

	if (unit) {
		onMount(async () =>
			appState.update(s => ({
				...s,
				formUnits: selected
					? s.formUnits.includes(sel)
						? s.formUnits
						: [...s.formUnits, sel]
					: s.formUnits.filter(v => v !== sel),
			})),
		)
	}

	if (unit) {
		onDestroy(() =>
			appState.update(s => ({
				...s,
				formUnits: s.formUnits.filter(v => v !== sel),
			})),
		)
	}

	export let onclick: () => void = () => {}
</script>

<button
	on:click={onclick}
	class="p-2 border
{selected ? 'border-green-500' : ''}
"
>
	{sel}
</button>
