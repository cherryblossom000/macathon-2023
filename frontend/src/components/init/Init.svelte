<script lang="ts">
	import Button from '../Button.svelte'
	import InitForm from './FormSection.svelte'
	import {C2001, appState} from '../../scripts'
</script>

<div class="max-w-screen-md w-full">
	<InitForm cur={C2001.requirement} />
	<Button
		onclick={() =>
			appState.update(s => ({
				...s,
				stage: 'Electives',
				finalUnits: s.formUnits,
			}))}
		disabled={$appState.formUnits.length !== 6}
	>
		Done!
	</Button>
</div>
