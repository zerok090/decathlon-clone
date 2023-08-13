<script>
	import CartItem from '$components/CartItem.svelte';
	import Price from '$components/Price.svelte';

	import { cart, amount, totalPrice } from '$stores/cartStore';

	$: keys = $cart.keys();
</script>

<div class="relative mb-4 w-full bg-gray-200">
	<!-- <section class="flex flex-row justify-center gap-4 bg-white px-4 py-2">
		<div>Winkelwagen</div>
		<div>Gegevens</div>
		<div>Bezorgen</div>
		<div>Betalen</div>
	</section> -->
	<div class="flex flex-col gap-4 p-4 mb-16 lg:flex-row lg:justify-center">
		<section class="flex flex-col gap-4">
			<h1 class="font-bold text-2xl">Winkelwagen</h1>
			<div class="flex flex-col gap-4 p-4 shadow-md w-full bg-white">
				{#if $cart.size === 0}
					No items in cart
				{:else}
					{#each keys as key}
						<div class="border-b p-2 border-gray-200 last:border-b-0">
							<CartItem productId={key} />
						</div>
					{/each}
				{/if}
			</div>
		</section>
		<section class="flex flex-col gap-4">
			<h1 class="font-bold text-2xl">Overzicht</h1>
			<div>
				<div class="flex flex-row gap-2 justify-between p-4 shadow-md w-full align-middle items-center bg-white">
					{#await $amount then amount}
						<div class="flex items-center">
							Totaal {amount}
							producten
						</div>
					{/await}
					{#await $totalPrice then price}
						<div>
							<Price {price} />
						</div>
					{/await}
				</div>
				<div class="hidden bg-white p-4 lg:block">
					<div class="bg-yellow-300 w-full min-h-full rounded-md">
						<a href="/cart" class="appearance-none font-bold block w-full text-center py-3">
							Naar kassa
						</a>
					</div>
				</div>
			</div>
		</section>
	</div>
	<div class="fixed bottom-0 shadow-md right-0 left-0 bg-white p-4 lg:hidden">
		<div class="bg-yellow-300 w-full min-h-full rounded-md">
			<a href="/cart" class="appearance-none font-bold block w-full text-center py-3">
				Naar kassa
			</a>
		</div>
	</div>
</div>
