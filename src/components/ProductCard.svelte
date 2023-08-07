<script>
	import Rating from '$components/Rating.svelte';

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

	const EURO = new Intl.NumberFormat('nl-NL', {
		style: 'currency',
		currency: 'EUR'
	});
</script>

<a
	href="/product/{id}"
	class="flex gap-1 justify-center relative flex-col h-[290px] items-center p-3 px-4 text-sm border-b border-r border-gray-200 border-solid"
>
	<img src={image} alt="img" width="160" height="160" class="aspect-square object-contain" />
	<div class="sm:absolute top-1 right-1 p-1 px-2 text-base rounded bg-yellow-300">
		<strong>{EURO.format(price)}</strong>
	</div>
	<strong class="text-center">{title}</strong>
	<div class="flex items-center gap-2 text-xs mt-1">
		<Rating rating={rating.rate} /> ({rating.count})
	</div>
</a>
