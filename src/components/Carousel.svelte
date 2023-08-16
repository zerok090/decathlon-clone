<script>
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	import Right from '~icons/fa/chevron-right';
	import Left from '~icons/fa/chevron-left';
	import Pause from '~icons/fa/pause';
	import Play from '~icons/fa/play';

	let currentIndex = 0;
	/** @type {HTMLDivElement} */
	let carousel;
	/** @type {{img: string, url: string}[]} */
	export let slides;

	function updateCarousel() {
		if (!carousel) return;
		carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
	}

	function nextSlide() {
		currentIndex = (currentIndex + 1) % slides.length;
		updateCarousel();
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		updateCarousel();
	}

	/** @param {number} idx */
	function goToIndex(idx) {
		stopCycle();
		currentIndex = idx;
		updateCarousel();
	}

	/** @type {NodeJS.Timer | undefined}*/
	let interval;
	function startCycle() {
		if (!interval) interval = setInterval(nextSlide, 4000);
	}

	function stopCycle() {
		clearInterval(interval);
		interval = undefined;
	}

	onMount(() => {
		startCycle();
	});
</script>

<div class="relative border border-black rounded-xl w-full aspect-square m-0 overflow-hidden">
	<!-- Content -->
	<div bind:this={carousel} class="flex flex-row w-full h-full transition-transform ease-in-out">
		{#each slides as slide}
			<div class="flex items-center justify-center min-w-full min-h-full">
				{slide.url}
				{slide.img}
			</div>
		{/each}
	</div>
	<!-- Controls -->
	<div
		class="absolute flex flex-row text-xs gap-2 items-center right-1 bottom-1 border border-black"
	>
		<button
			on:click={() => {
				stopCycle();
				prevSlide();
			}}><Left /></button
		>
		<!-- Current slide nav -->
		<div class="flex gap-1">
			{#each slides as _, index}
				<button class="transparent rounded-full" on:click={() => goToIndex(index)}>
					{#if index === currentIndex}
						<div in:scale class="rounded-full bg-black h-[1.2rem] w-[1.2rem] opacity-100" />
					{:else}
						<div in:scale class="rounded-full bg-black h-[0.8rem] w-[0.8rem] opacity-20" />
					{/if}
				</button>
			{/each}
		</div>
		{#if interval}
			<button on:click={stopCycle}><Pause /></button>
		{:else}
			<button on:click={startCycle}><Play /></button>
		{/if}
		<button
			on:click={() => {
				stopCycle();
				nextSlide();
			}}><Right /></button
		>
	</div>
</div>
