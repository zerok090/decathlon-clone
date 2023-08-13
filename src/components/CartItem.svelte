<script>
	import { onMount } from 'svelte';
	import { cart } from '$stores/cartStore';

	import Plus from '~icons/fa/plus';
	import Minus from '~icons/fa/minus';
	import Trash from '~icons/fa/trash';

	import Price from '$components/Price.svelte';
	import Loading from '$components/Loading.svelte';

	/** @type {number} */
	export let productId;

	/** @type {import("$lib/types").Product} */
	let product;
	let loading = true;

	$: amount = $cart.get(productId) || [1, 0];

	onMount(() => {
		fetch('https://fakestoreapi.com/products/' + productId)
			.then((res) => res.json())
			.then((json) => {
				product = json;
				loading = false;
			});
	});
</script>

{#if loading}
	<Loading />
{:else}
	<div class="relative">
		<div class="flex flex-row gap-2">
			<img
				alt={product.title}
				src={product.image}
				width="120"
				height="120"
				class="aspect-square object-contain"
			/>
			<div class="flex flex-col gap-1 text-md">
				<h2 class="font-bold">{product.title}</h2>
				<h3 class="font-semibold">{product.category}</h3>
			</div>
		</div>
		<div class="absolute right-1 bottom-1 flex flex-row gap-2">
			<Price price={product.price * amount[0]} />
			<div class="flex flex-row gap-2 items-center justify-between">
				{#if amount[0] === 1}
					<button on:click={() => cart.removeItem(productId)}><Trash /></button>
				{:else}
					<button on:click={() => cart.removeItem(productId)}><Minus /></button>
				{/if}
				<span>{amount[0]}</span>
				<button on:click={() => cart.addItem(productId, product.price)}><Plus /></button>
			</div>
		</div>
	</div>
{/if}
