<script lang="ts">
	import {onDestroy, onMount} from 'svelte'
	import {appState} from '../scripts/index'

	export let value: string
	export let selected: boolean
	export let unit = false

	$: {
		if (unit) {
			appState.update(s => ({
				...s,
				formUnits: selected
					? s.formUnits.includes(value)
						? s.formUnits
						: [...s.formUnits, value]
					: s.formUnits.filter(v => v !== value),
			}))
		}
	}

	if (unit) {
		onMount(async () =>
			appState.update(s => ({
				...s,
				formUnits: selected
					? s.formUnits.includes(value)
						? s.formUnits
						: [...s.formUnits, value]
					: s.formUnits.filter(v => v !== value),
			})),
		)
	}

	if (unit) {
		onDestroy(() =>
			appState.update(s => ({
				...s,
				formUnits: s.formUnits.filter(v => v !== value),
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
	{value}
</button>
