<script>
	import Loading from '$components/Loading.svelte';
	import Price from '$components/Price.svelte';
	import Rating from '$components/Rating.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#await data.item.promise}
	<Loading />
{:then item}
	<article>
		<div class="w-full relative flex flex-col items-center">
			<img
				class="max-w-[20rem] max-h-[20rem] aspect-square object-contain"
				src={item.image}
				alt={item.title}
			/>
		</div>
		<div>
			<div>{item.title}</div>
			<div class="max-w-fit"><Price price={item.price} /></div>
			<div class="flex gap-2 items-center text-xs">
				<Rating rating={item.rating.rate} />
				<strong class="flex items-center gap-2 h-full">
					<div class="text-sm">{item.rating.rate}/5</div>
					<a href="#reviews"><u>Bekijk alle {item.rating.count} reviews</u></a>
				</strong>
			</div>
			<div>{item.description}</div>
		</div>
	</article>
{/await}
