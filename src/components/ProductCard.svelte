<script>
	import Rating from '$components/Rating.svelte';
	import Price from '$components/Price.svelte';

	/** @type {string} */
	export let id;
	/** @type {string} */
	export let title;
	/** @type {string} */
	export let description;
	/** @type {string} */
	export let image;
	/** @type {number} */
	export let price;
	/** @type {{rate: number, count: number}} */
	export let rating;
	/** @type {string} */
	export let category;
</script>

<a
	href="/product/{id}"
	class="flex gap-1 justify-center relative flex-col h-[290px] items-center p-3 px-4 text-sm border-b border-r border-gray-200 border-solid"
>
	<img src={image} alt="img" width="160" height="160" class="aspect-square object-contain" />
	<div class="sm:absolute top-1 right-1">
		<Price price={price} />
	</div>
	<strong class="text-center">{title}</strong>
	<div class="flex items-center gap-2 text-xs mt-1">
		<Rating rating={rating.rate} /> ({rating.count})
	</div>
</a>
