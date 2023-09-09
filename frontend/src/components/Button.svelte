<script lang="ts">
	export let onclick: () => void = () => {}
	export let disabled = false
</script>

<button
	on:click={onclick}
	{disabled}
	class="bg-blue-600 text-white rounded p-2 disabled:opacity-75 disabled:cursor-not-allowed hover:bg-blue-500 transition-all"
	><slot /></button
>
