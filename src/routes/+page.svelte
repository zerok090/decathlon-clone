<script>
	import { onMount } from 'svelte';
	import { categories } from '$stores/navigationStore';
	import Carousel from '$components/Carousel.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		fetch('https://fakestoreapi.com/products/categories')
			.then((res) => res.json())
			.then((json) => {
				categories.setItems(json);
			});
	});
</script>

<div class="flex-1 flex justify-center">
	<div class="flex flex-col gap-4 max-w-[70rem] p-4">
		<section>
			{#await data.products then products}
				{#if products}
					{#each products.data.products.edges as product}
						<p>{product.node.id}</p>
						<p>{product.node.title}</p>
					{/each}
				{/if}
			{/await}
		</section>
		<section class="w-full">
			<Carousel
				slides={[
					{ url: '/carousel1.jpg', img: '/products/jewelery', alt: 'Invicsible Nike Pro' },
					{ url: '/carousel2.jpg', img: "/products/men's clothing", alt: 'Take Flight Adidas' },
					{ url: '/carousel3.jpg', img: "/products/women's clothing", alt: 'Puma' }
				]}
			/>
		</section>
		<section class="w-full">
			<ul class="capitalize grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
				{#each $categories as category}
					<li class="w-full px-4 py-2 border border-black hover:bg-gray-200">
						<a class=" flex justify-center w-full" href={`/products/${category}`}>{category}</a>
					</li>
				{/each}
			</ul>
		</section>
	</div>
</div>
