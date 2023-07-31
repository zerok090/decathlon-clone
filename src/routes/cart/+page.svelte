<script>
	import { cart } from '../../stores/cartStore';
	$: keys = $cart.keys();

	let input = 0;
</script>

<div>
	<h1>Cart</h1>

	<input bind:value={input} type="number" />
	<button on:click={() => cart.addItem(input)}>Add</button>
    <button on:click={() => cart.clear()}>Clear</button>

	{#each keys as key}
		<div>
			<h2>Id: {key}</h2>
			<h2>Amount: {$cart.get(key)}</h2>
			<button on:click={() => cart.removeItem(key)}>X</button>
		</div>
	{/each}
</div>
