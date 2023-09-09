<script lang="ts">
	import {onDestroy, onMount} from 'svelte'
	import type {Updater} from 'svelte/store'
	import {appState, type ApplicationState} from '../../scripts'

	export let value: string
	export let selected: boolean
	export let unit = false

	const addUnit: Updater<ApplicationState> = s =>
		s.formUnits.includes(value)
			? s
			: {
					...s,
					formUnits: [...s.formUnits, value],
			  }

	const removeUnit: Updater<ApplicationState> = s => ({
		...s,
		formUnits: s.formUnits.filter(v => v !== value),
	})
	$: updateUnits = selected ? addUnit : removeUnit

	$: if (unit) appState.update(updateUnits)

	if (unit) {
		onMount(() => appState.update(updateUnits))
		onDestroy(() => appState.update(removeUnit))
	}

	export let onclick: () => void = () => {}
</script>

<button
	on:click={onclick}
	class="p-2 border {selected ? 'border-green-500' : ''}">{value}</button
>
