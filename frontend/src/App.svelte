<script lang="ts">
	import Nav from './components/Nav.svelte'
	import Electives from './components/electives/Electives.svelte'
	import Init from './components/init/Init.svelte'
	import Table from './components/table/Table.svelte'
	import {appState} from './scripts'
</script>

<main class="w-full flex flex-col">
	<Nav />
	<div class="flex flex-col items-center w-full">
		{#if $appState.stage === 'Init'}
			<Init />
		{:else if $appState.stage === 'Electives'}
			<Electives />
		{:else}
			<Table />
		{/if}
	</div>
</main>
