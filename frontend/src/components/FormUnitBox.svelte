<script lang="ts">
	import {onDestroy, onMount} from 'svelte'
	import {appState, type ApplicationState} from '../scripts'
	import type {Updater} from 'svelte/store'

	export let value: string
	export let isUnit: boolean
	export let disabled = false
	export let selected = false

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

	$: if (isUnit) appState.update(updateUnits)

	if (isUnit) {
		onMount(() => appState.update(updateUnits))
		onDestroy(() => appState.update(removeUnit))
	}

	export let onclick: () => void = () => {}
</script>

<button
	on:click={onclick}
	{disabled}
	class="disabled:cursor-not-allowed p-2 border {selected
		? 'border-green-500'
		: ''}">{value}</button
>
