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

	$: stylesMenuButton = clsx(
		$openMenu ? 'flex' : 'hidden',
		'uppercase',
		'bg-blue-400',
		'relative',
		'h-min',
		'top-0 left-0',
		'flex gap-1 flex-col p-3 justify-center items-center'
	);
</script>

{#if $openMenu}
	<div
		transition:slide={{ delay: 0, duration: 300, easing: quadIn, axis: 'x' }}
		class={stylesSideNav}
	>
		<nav class="w-[40rem] h-full bg-blue-400">
			<div>ELEMENT</div>
			<div>ELEMENT</div>
			<div>ELEMENT</div>
			<div>ELEMENT</div>
			<div>ELEMENT</div>
		</nav>
		<button
			class="bg-white/60 flex top-0 -z-1 w-full h-screen cursor-default"
			on:click={openMenu.toggle}
		>
			<button
				data-collapse-toggle="navbar-sticky"
				type="button"
				class={stylesMenuButton}
				aria-controls="navbar-sticky"
				aria-expanded="false"
			>
				<Cross />
				<span class="text-xs">Sluiten</span>
			</button>
		</button>
	</div>
{/if}
