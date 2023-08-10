<script>
	// @ts-nocheck
	import { page } from '$app/stores';

    $: errorCategory = $page.status.toString()[0];
</script>

<div class="min-h-full min-w-full flex items-center align-middle justify-center">
	{#if errorCategory === '4'}
		<h1>Pagina kan niet worden geladen</h1>
	{/if}
	{#if errorCategory === '5'}
		<h1>Serverfout</h1>
	{/if}
</div>
