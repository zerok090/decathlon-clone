<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import Loading from '$components/Loading.svelte';
	import ProductCard from '$components/ProductCard.svelte';
	import Sliders from '~icons/fa/sliders';
</script>

{#await data.items.promise}
	<Loading />
{:then items}
	<div class="w-full">
		<!-- search hero + result amount + categories -->
		<div class="w-full bg-blue-400 p-1">
			<div>
				<div>Jouw zoekopdracht:</div>
				<div>{data.search}</div>
				<div>{items.length} producten</div>
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
				<nav
					class="grid grid-flow-col text-xs grid-cols-3 gap-2 min-h-[3rem] p-2 items-center justify-between"
				>
					<div>
						<span class="border border-blue-950 p-1 px-2 rounded text-white bg-blue-950">{items.length}</span>
						<span>Artikelen</span>
					</div>
					<button
						class="flex justify-center border relative text-blue-500 border-blue-500 p-2 gap-2 items-center"
					>
						<span class="font-bold">Filters</span>
						<div class="absolute right-0 px-2"><Sliders /></div>
					</button>
					<div class="flex justify-center align-middle h-full">
						<select class="w-full p-2.5 border-r-8 border-transparent outline outline-transparent">
							<option selected>Onze selectie</option>
							<option>Prijs laag - hoog</option>
							<option>Prijs hoog - laag</option>
							<option>Best beoordeeld</option>
						</select>
					</div>
				</nav>
				<div
					class="grid grid-cols-2 border-l border-t border-gray-200 border-solid sm:grid-cols-3 lg:grid-cols-4"
				>
					{#each items as product}
						<ProductCard {...product} />
					{/each}
				</div>
			</section>
		</div>
		<!-- pagination -->
		<!-- satisfaction level with page -->
	</div>
{/await}
