<script lang="ts">
	import {appState} from '../../scripts'
</script>

<div>
	<button
		class="btn"
		on:click={() => appState.update(s => ({...s, stage: 'Table'}))}
	>
		Done!
	</button>
</div>
