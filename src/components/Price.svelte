<script>
    /** @type {number} */
    export let price;
	const EURO = new Intl.NumberFormat('nl-NL', {
		style: 'currency',
		currency: 'EUR'
	});
</script>

<div class="p-1 px-2 text-base rounded bg-yellow-300">
	<strong>{EURO.format(price)}</strong>
</div>
