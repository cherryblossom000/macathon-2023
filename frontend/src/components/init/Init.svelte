<script lang="ts">
	import InitForm from './FormSection.svelte'
	import {C2001, appState} from '../../scripts'

	const toElectives = () => appState.update(s => ({...s, stage: 'Table'}))
</script>

<div class="max-w-screen-md">
	<InitForm cur={C2001.requirement} />
	<button
		on:click={toElectives}
		disabled={$appState.formUnits.length !== 16}
		class="bg-blue-600 text-white rounded p-2 disabled:opacity-75 disabled:cursor-not-allowed hover:bg-blue-500 transition-all"
	>
		Done!
	</button>
</div>
