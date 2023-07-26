<script>
	import { slide } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';
	import { openMenu } from '../stores/navigationStore';

	import clsx from 'clsx';

	$: stylesSideNav = clsx(
		!$openMenu ? 'hidden' : 'flex',
		'fixed',
		'right-[100%]',
		'h-screen',
		'top-0',
		'w-[20rem]',
		'left-0',
		'flex-col overflow-hidden bg-blue-400 z-30 ease-in-out'
	);

	$: stylesCloseButton = clsx(
		!$openMenu && 'hidden',
		$openMenu && 'fixed flex top-0 bg-transparent -z-1 w-screen h-screen cursor-default opacity-25'
	);

    function toggleMenu() {
		openMenu.update((val) => !val);
	}
</script>

{#if $openMenu}
	<nav
		transition:slide={{ delay: 250, duration: 300, easing: quadIn, axis: 'x' }}
		class={stylesSideNav}
	>
		SIDEMENU
	</nav>
	<button class={stylesCloseButton} on:click={toggleMenu} />
{/if}
