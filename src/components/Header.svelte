<script>
	import StickyNav from './StickyNav.svelte';

	import Hamburger from '~icons/fa/bars';
	import Search from '~icons/fa/search';

	import { openMenu } from '../stores/navigationStore';

	let input = '';

</script>

<header
	class="drop-shadow-lg overflow-x-hidden sticky w-screen translate-x-0 z-20 top-0 left-0 h-full"
>
	<div class="bg-white w-full">
		<div class="flex flex-wrap justify-between sm:justify-normal sm:flex-nowrap sm:gap-1">
			<!--Logo-->
			<a href="/" class="flex items-center order-2 p-2">
				<img src="/decathlonLogo.jpg" class="min-w-[12rem] max-h-11 object-contain" alt="Logo" />
			</a>
			<!--SideNav open-->
			<div class="order-1 border-r-gray-20">
				<button
					type="button"
					class="flex gap-1 uppercase flex-col p-3 justify-center items-center h-full border-r border-gray-200"
					aria-controls="navbar-sticky"
					aria-expanded="false"
					on:click={openMenu.toggle}
				>
					<span class="sr-only">Open main menu</span>
					<Hamburger />
					<span class="text-xs">Menu</span>
				</button>
			</div>
			<!--Navbar-->
			<div class="items-center md:flex md:w-auto order-3 sm:order-4" id="navbar-sticky">
				<StickyNav />
			</div>
			<!--Search-->
			<div
				class="order-4 w-full p-2 border border-gray-200 sm:order-3 sm:grow sm:w-0 sm:border-none"
			>
				<form class="flex w-full border border-gray-200 bg-gray-200">
					<input
						class="p-2 min-w-0 outline-none grow placeholder:uppercase placeholder:italic placeholder:font-semibold focus:outline-non bg-transparent"
						inputmode="text"
						bind:value={input}
						placeholder="Zoek een artikel of sport"
					/>
					<button
						class="z-10 relative bg-white h-full p-3 before:absolute before:bg-white before:w-full before:origin-top-left before:h-full before:skew-x-[-10deg] before:top-0 before:left-0 before:-z-10"
					>
						<Search class="z-10" />
					</button>
				</form>
			</div>
		</div>
	</div>
</header>
