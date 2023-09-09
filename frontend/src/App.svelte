<script lang="ts">
	import type {Course} from 'shared'
	import UnitTable from './components/UnitTable.svelte'

	const tempUnit: Course = {
		requirement: {},
		abbreviatedName: 'unit',
		code: 'FIT1069',
		title: 'Rizzing for IT Students',
	}
</script>

<main>
	<UnitTable />
</main>
