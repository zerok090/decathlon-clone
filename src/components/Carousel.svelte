<script>
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	import Right from '~icons/fa/chevron-right';
	import Left from '~icons/fa/chevron-left';
	import Pause from '~icons/fa/pause';
	import Play from '~icons/fa/play';
	import Image from '$components/Image.svelte';

	let currentIndex = 0;
	/** @type {HTMLDivElement} */
	let carousel;
	/** @type {{img: string, url: string , alt: string}[]} */
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

<div
	class="relative rounded-xl w-full aspect-square md:aspect-video overflow-hidden"
>
	<!-- Content -->
	<div bind:this={carousel} class="flex flex-row w-full h-full transition-transform ease-in-out">
		{#each slides as slide}
			<a href={slide.img} class="flex items-center justify-center min-w-full min-h-full object-cover">
				<Image alt={slide.alt} src={slide.url} />
			</a>
		{/each}
	</div>
	<!-- Controls -->
	<div
		class="absolute flex text-xs w-full items-center bottom-0 p-4 justify-end md:justify-center"
	>
		<div class="flex flex-row gap-2 text-white">
			<button
				on:click={() => {
					stopCycle();
					prevSlide();
				}}><Left /></button
			>
			<!-- Current slide nav -->
			<div class="flex gap-1 ">
				{#each slides as _, index}
					<button class="transparent rounded-full" on:click={() => goToIndex(index)}>
						{#if index === currentIndex}
							<div in:scale class="rounded-full bg-white h-[1.2rem] w-[1.2rem] opacity-100" />
						{:else}
							<div in:scale class="rounded-full bg-white h-[0.8rem] w-[0.8rem] opacity-30" />
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
</div>
