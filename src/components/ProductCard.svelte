<script>
	import Rating from "$components/Rating.svelte";

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

<a href="/products/{id}" class="flex flex-col items-center">
	<p>{price}</p>
	<p>{category}</p>
	<img src={image} alt="img" width="160" height="160" class="aspect-square object-contain" />
	<p>{title}</p>
	<p>{description}</p>
	<div class="flex items-center gap-2"><Rating rating={rating.rate} /> ({rating.count})</div>
</a>
