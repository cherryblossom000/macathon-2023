<script lang="ts">
	export let sel: string
	export let selected: boolean
	export let onclick: () => void = () => {}
</script>

<button
	on:click={onclick}
	class="p-2 border
{selected ? 'border-green-500' : ''}
"
>
	{sel}
</button>
