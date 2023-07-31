<script>
	import Cross from '~icons/fa/times';

	import { slide } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';

	import { openMenu } from '../stores/navigationStore';

	import clsx from 'clsx';

	$: stylesSideNav = clsx(
		$openMenu ? 'flex' : 'hidden',
		'fixed',
		'h-screen',
		'top-0',
		'w-screen',
		'left-0',
		'flex-row z-30 overflow-hidden ease-in-out'
	);

	$: stylesCloseButton = clsx(
		'bg-white flex top-0 bg-transparent -z-1 w-full h-screen cursor-default opacity-75'
	);

	$: stylesMenuButton = clsx(
		$openMenu ? 'flex' : 'hidden',
		'absolute',
		'top-0 right-0',
		'flex gap-1 flex-col p-3 justify-center items-center border-r border-gray-200'
	);
</script>

{#if $openMenu}
	<div
		transition:slide={{ delay: 0, duration: 300, easing: quadIn, axis: 'x' }}
		class={stylesSideNav}
	>
		<nav class="w-[40rem] h-full bg-blue-400">SIDEMENU</nav>
		<button
			data-collapse-toggle="navbar-sticky"
			type="button"
			class={stylesMenuButton}
			aria-controls="navbar-sticky"
			aria-expanded="false"
			on:click={openMenu.toggle}
		>
			<Cross />
			<span class="text-xs">Close</span>
		</button>
		<button class={stylesCloseButton} on:click={openMenu.toggle} />
	</div>
{/if}
