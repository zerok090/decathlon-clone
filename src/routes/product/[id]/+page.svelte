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
	<div>
		<article class="flex flex-col gap-2">
			<div class="w-full relative flex flex-col items-center">
				<img
					class="max-w-[20rem] max-h-[20rem] aspect-square object-contain"
					src={item.image}
					alt={item.title}
				/>
			</div>
			<div class="flex text-sm flex-col gap-2 p-2">
				<h1 class="font-bold text-base">{item.title}</h1>
				<div class="max-w-fit"><Price price={item.price} /></div>
				<div class="flex gap-2 items-center text-xs">
					<Rating rating={item.rating.rate} />
					<strong class="flex items-center gap-2 h-full">
						<div class="text-sm">{item.rating.rate}/5</div>
						<a class="underline text-center" href="#reviews"
							>Bekijk alle {item.rating.count} reviews</a
						>
					</strong>
				</div>
				<div>{item.description}</div>
				<button
					on:click={() => cart.addItem(item.id)}
					class="font-bold text-sm uppercase w-full bg-yellow-300 p-3 hover:bg-yellow-400 transition-colors ease-linear"
					>Toevoegen aan winkelwagen</button
				>
			</div>
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
