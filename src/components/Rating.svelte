<script>
	import Star from '~icons/fa/star';
	import StarO from '~icons/fa/star-o';
	import StarHalfO from '~icons/fa/star-half-o';

	/** @type {number} */
	export let rating;
	const numberOfStars = 5;
</script>

<div class="flex gap-2 items-center text-xs text-yellow-400">
	{#each { length: numberOfStars } as _, i}
		{#if rating - i - 1 >= 0}
			<Star />
		{:else if rating - i - 1 >= -0.5}
			<StarHalfO />
		{:else}
			<StarO />
		{/if}
	{/each}
</div>
