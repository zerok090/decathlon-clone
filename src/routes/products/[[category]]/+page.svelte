<script>
	/** @typedef {import('$lib/types').Product} Product */
	import Loading from '$components/Loading.svelte';
	import ProductCard from '$components/ProductCard.svelte';
	import Sliders from '~icons/fa/sliders';

	/** @type {import('./$types').PageData} */
	export let data;
	let loading = true;
	/** @type {Product[] | undefined} */
	let products;
	let filtersOpen = false;

	/** @type {string} */
	let sortValue;
	let priceRange = 0;
	$: filterPrice = priceRange;

	data.items.promise.then((val) => {
		for (const product of val) {
			priceRange = Math.max(Math.ceil(product.price), priceRange);
		}

		priceRange = priceRange;
		products = val;
		loading = false;
	});

	$: productsFiltered = filterProducts(filterPrice, products);
	$: productsToDisplay = [...productsFiltered].sort((a, b) => {
		if (sortValue !== '') {
			if (sortValue === 'asc') {
				return a.price - b.price;
			}
			if (sortValue === 'desc') {
				return b.price - a.price;
			}
			if (sortValue === 'rating') {
				return b.rating.rate - a.rating.rate;
			}
		}
		return 0;
	});

	/**
	 * @param {typeof filterPrice} filterPrice
	 * @param {Product[]} [products]
	 */
	const filterProducts = (filterPrice, products) => {
		/** @type {Product[]} */
		const result = [];
		if (!products) return result;
		if (filterPrice === undefined) return products;

		for (const product of products) {
			if (filterPrice < product.price) continue;

			result.push(product);
		}

		return result;
	};
</script>

{#if loading}
	<Loading />
{:else}
	<div class="w-full">
		<div class="w-full text-white bg-blue-400 px-14 py-12">
			<div>
				<h1 class="text-2xl">Jouw zoekopdracht : <span>"{data.search}"</span></h1>
				<div>{productsToDisplay.length} producten</div>
			</div>
		</div>
		<div>
			<section />
			<section>
				<div class="grid grid-flow-col lg:grid-cols-[300px_1fr]">
					<div class="hidden lg:flex max-h-min flex-col bg-white w-full">
						<div
							class="text-white drop-shadow-md shadow-gray-200 w-full bg-blue-400 grid grid-flow-col gap-2 min-h-[3rem] p-3.5 items-center"
						>
							<div class="flex gap-2 items-center w-full">
								<div><Sliders /></div>
								<h1>Filters</h1>
							</div>
						</div>
						<div class="p-2">
							<!-- Price filter -->
							<div class="flex flex-col gap-2">
								<label for="price">Prijs</label>
								<input
									id="price"
									type="range"
									bind:value={filterPrice}
									min="0"
									max={priceRange}
									step="5"
									/>
									<input class="border border-gray-200 bg-gray-200 p-2 w-full" bind:value={filterPrice} min="0" max={priceRange} />
							</div>
						</div>
					</div>
					<div>
						<nav
							class="grid grid-flow-col text-xs grid-cols-3 gap-2 min-h-[3rem] p-2 items-center justify-between"
						>
							<div>
								<span class="border border-blue-950 p-1 px-2 rounded text-white bg-blue-950"
									>{productsToDisplay.length}</span
								>
								<span>Artikelen</span>
							</div>
							<button
								on:click={() => (filtersOpen = !filtersOpen)}
								class="lg:invisible flex justify-center border relative text-blue-500 border-blue-500 p-2 gap-2 items-center"
							>
								<span class="font-bold">Filters</span>
								<div class="absolute right-0 px-2"><Sliders /></div>
							</button>
							<div class="flex justify-center align-middle">
								<select
									bind:value={sortValue}
									class="w-full p-2.5 border-r-8 border-transparent outline outline-transparent"
								>
									<option selected value="">Onze selectie</option>
									<option value="asc">Prijs laag - hoog</option>
									<option value="desc">Prijs hoog - laag</option>
									<option value="rating">Best beoordeeld</option>
								</select>
							</div>
						</nav>
						{#if filtersOpen}
							<div class="p-2 w-full border-t border-gray-200 border-solid">
								<!-- Price filter -->
								<div class="grid grid-flow-col w-full gap-2">
									<label for="price">Price</label>
									<input
										id="price"
										type="range"
										bind:value={filterPrice}
										min="0"
										max={priceRange}
										step="5"
									/>
									<input class="w-full" bind:value={filterPrice} min="0" max={priceRange} />
								</div>
							</div>
						{/if}
						<div
							class="grid grid-cols-2 border-l border-t border-gray-200 border-solid sm:grid-cols-3 lg:grid-cols-4"
						>
							{#each productsToDisplay as product}
								<ProductCard {...product} />
							{/each}
						</div>
					</div>
				</div>
			</section>
		</div>
		<!-- pagination -->
		<!-- satisfaction level with page -->
	</div>
{/if}
