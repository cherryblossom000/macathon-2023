<script lang="ts">
	import type {Course} from 'shared'
	import UnitTable from './components/UnitTable.svelte'
	import Nav from './components/Nav.svelte'
	import InitForm from './components/FormSection.svelte'
	import {C2001} from './scripts/course2'
</script>

<main class="w-full max-w-screen-md flex flex-col">
	<Nav />
	<UnitTable />
	<InitForm cur={C2001.requirement} />
</main>
