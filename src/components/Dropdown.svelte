<script>
	import Down from '~icons/fa/chevron-down';
	import Up from '~icons/fa/chevron-up';

	import { slide } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';

	/** @type {string} */
	export let title;

	export let open = false;

	function toggle() {
		open = !open;
	}
</script>

<section class="border-t border-gray-300 p-2 px-4">
	<button class="flex w-full flex-row justify-between items-center" on:click={toggle}>
		<h1 class="text-xl font-bold">{title}</h1>
		{#if open}
			<Up />
		{:else}
			<Down />
		{/if}
	</button>
	{#if open}
		<div transition:slide={{ delay: 0, duration: 300, easing: quadInOut, axis: 'y' }}>
			<slot />
		</div>
	{/if}
</section>
