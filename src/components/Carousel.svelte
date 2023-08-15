<script>
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

	/** @type {NodeJS.Timer | undefined}*/
	let interval;
	function startCycle() {
		if (!interval) interval = setInterval(nextSlide, 5000);
	}

	function stopCycle() {
		clearInterval(interval);
		interval = undefined;
	}

	startCycle();
</script>

<div class="relative w-full aspect-square m-0 overflow-hidden">
	<div bind:this={carousel} class="flex flex-row w-full h-full transition-transform ease-in-out">
		{#each slides as slide}
			<div class="flex items-center justify-center min-w-full min-h-full">
				{slide.url}
				{slide.img}
			</div>
		{/each}
	</div>
	<div class="absolute flex flex-row gap-2 items-center right-1 bottom-1 border border-black">
		<button on:click={prevSlide}><Left /></button>
		{#if interval}
			<button on:click={() => stopCycle()}><Pause /></button>
		{:else}
			<button on:click={startCycle}><Play /></button>
		{/if}
		<button on:click={nextSlide}><Right /></button>
	</div>
</div>
