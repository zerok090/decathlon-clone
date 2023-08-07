<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { apiData } from '$stores/productStore';

	import ProductCard from '$components/ProductCard.svelte';
</script>

<div>
	<!-- search hero + result amount + categories -->
	<div class="w-full bg-blue-400 p-1">
		<div>
			<div>Jouw zoekopdracht:</div>
			<div>{data.search}</div>
			<div>{$apiData.length} producten</div>
		</div>
		<div>
			<div>Categorien bij je zoekopdracht</div>
			<div />
		</div>
	</div>
	<!-- amount + filter button (opens sidenav) (hidden on screens bigger than ) + sort -->
	<!-- results -->
	<div>
		<section />
		<section>
			<nav class="flex">
				<div>{$apiData.length} Artikelen</div>
				<div><button>Filters</button></div>
				<div>
					<select>
						<option>Onze selectie</option>
						<option>Prijs laag - hoog</option>
						<option>Prijs hoog - laag</option>
						<option>Best beoordeeld</option>
					</select>
				</div>
			</nav>
			<div
				class="grid grid-cols-2 border-l border-t border-gray-200 border-solid sm:grid-cols-3 lg:grid-cols-4"
			>
				{#each $apiData as product}
					<ProductCard {...product} />
				{/each}
			</div>
		</section>
	</div>
	<!-- pagination -->
	<!-- satisfaction level with page -->
</div>
