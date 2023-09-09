<script lang="ts">
	import {appState, getAllUnits} from '../../scripts'
</script>

<div>
	{#await getAllUnits()}
		<p>Loading units…</p>
	{:then allUnits}
		<div>a</div>
	{:catch error}
		<p>Error fetching units: {error}</p>
	{/await}
	<button
		class="btn"
		on:click={() => appState.update(s => ({...s, stage: 'Table'}))}
	>
		Done!
	</button>
</div>
