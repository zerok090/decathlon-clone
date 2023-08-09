<script>
	import Dropdown from '$components/Dropdown.svelte';
	import Loading from '$components/Loading.svelte';
	import Price from '$components/Price.svelte';
	import Rating from '$components/Rating.svelte';

	import { cart } from '$stores/cartStore';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#await data.item.promise}
	<Loading />
{:then item}
	<div class="w-full flex flex-col gap-2 sm:gap-0">
		<article class="grid grid-flow-row sm:min-h-[50rem] sm:grid-flow-col sm:grid-cols-12 md:grid-cols-10">
			<div class="hidden md:block md:col-span-1" />
			<div class="sm:col-span-8 md:col-span-5 relative flex flex-col items-center sm:flex-auto justify-center">
				<img
					class="max-w-[20rem]  max-h-[20rem] aspect-square object-contain"
					src={item.image}
					alt={item.title}
				/>
			</div>
			<div class="relative sm:col-span-4 md:col-span-3 flex text-sm flex-col h-full gap-2 p-3 py-6 justify-center sm:bg-gray-100 before:bottom-0 before:left-0 md:before:skew-x-[8deg] md:before:origin-bottom-left before:w-full before:h-full before:absolute before:content before:-z-10 before:bg-gray-100">
				<h1 class="font-bold text-base">{item.title}</h1>
				<div class="max-w-fit"><Price price={item.price} /></div>
				<div class="flex gap-2 items-center text-xs">
					<Rating rating={item.rating.rate} />
					<strong class="flex items-center gap-2 h-full">
						<div class="text-sm">{item.rating.rate}/5</div>
						<a class="underline text-center" href="#reviews"
							>Bekijk alle {item.rating.count} reviews
						</a>
					</strong>
				</div>
				<div>{item.description}</div>
				<button
					on:click={() => cart.addItem(item.id)}
					class="font-bold text-sm uppercase w-full bg-yellow-300 p-3 hover:bg-yellow-400 transition-colors ease-linear"
					>Toevoegen aan winkelwagen</button
				>
			</div>
			<div class="hidden md:block md:col-span-1 bg-gray-100" />
		</article>
		<div class="flex flex-col last:border-b">
			<Dropdown title="Aanbevolen artikelen">
				<div>TEST</div>
			</Dropdown>
			<Dropdown title="Productvoordelen">
				<div>TEST</div>
			</Dropdown>
			<Dropdown title="Technische informatie">
				<div>TEST</div>
			</Dropdown>
			<Dropdown title="Overige informatie">
				<div>TEST</div>
			</Dropdown>
			<Dropdown title="Afbeeldingen">
				<div>TEST</div>
			</Dropdown>
			<Dropdown title="Video">
				<div>TEST</div>
			</Dropdown>
			<Dropdown title="Vergelijkbare producten">
				<div>TEST</div>
			</Dropdown>
			<Dropdown title="Reviews">
				<div>TEST</div>
			</Dropdown>
			<Dropdown title="Vragen & antwoorden">
				<div>TEST</div>
			</Dropdown>
			<Dropdown title="Mijn laatst bekeken artikelen">
				<div>TEST</div>
			</Dropdown>
			<Dropdown title="Diensten">
				<div>TEST</div>
			</Dropdown>
		</div>
	</div>
{/await}
