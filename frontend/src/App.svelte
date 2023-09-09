<script lang="ts">
	import Nav from './components/Nav.svelte'
	import Init from './components/init/Init.svelte'
	import Table from './components/table/Table.svelte'
	import {appState} from './scripts'
</script>

<main class="w-full max-w-screen-md flex flex-col">
	<Nav />
	<div class={$appState.stage === `Init` ? '' : 'hidden'}>
		<Init />
	</div>

	<div class={$appState.stage === `Table` ? '' : 'hidden'}>
		<Table />
	</div>
</main>
