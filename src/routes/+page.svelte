<script>
	import { onMount } from 'svelte';
	import { categories } from '$stores/navigationStore';
	import Carousel from '$components/Carousel.svelte';

	onMount(() => {
		fetch('https://fakestoreapi.com/products/categories')
			.then((res) => res.json())
			.then((json) => {
				categories.setItems(json);
			});
	});
</script>

<div class="flex-1 mt-4 flex justify-center">
	<div class="flex flex-col gap-1 max-w-[121.6rem]">
		<section class="w-full">
			<Carousel
				slides={[
					{ img: 'img1', url: 'url1' },
					{ img: 'img2', url: 'url2' },
					{ img: 'img3', url: 'url3' }
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
