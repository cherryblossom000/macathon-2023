<script lang="ts">
	import InitForm from './FormSection.svelte'
	import {C2001, appState} from '../../scripts'
</script>

<div class="max-w-screen-md">
	<InitForm cur={C2001.requirement} />
	<button
		class="btn"
		on:click={() => appState.update(s => ({...s, stage: 'Electives'}))}
		disabled={$appState.formUnits.length !== 16}
	>
		Done!
	</button>
</div>
