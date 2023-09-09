<script lang="ts">
	import UnitTable from './components/UnitTable.svelte'
	import Nav from './components/Nav.svelte'
	import InitForm from './components/FormSection.svelte'
	import {C2001} from './scripts/course2'

	import {appState} from './scripts/index'
	import {get} from 'svelte/store'

	const toElectives = () => {
		if (get(appState).formUnits.length == 16)
			appState.update(s => ({...s, stage: 'Table'}))
	}
</script>

<main class="w-full max-w-screen-md flex flex-col">
	<Nav />
	<div class={$appState.stage === `Table` ? '' : 'hidden'}>
		<UnitTable />
	</div>

	<div class={$appState.stage === `Init` ? '' : 'hidden'}>
		<InitForm cur={C2001.requirement} />
		<button on:click={toElectives}> Done! </button>
	</div>
</main>
