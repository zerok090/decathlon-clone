import { derived, writable } from 'svelte/store';

function shoppingCart() {
	/** @type {Map<number, number>} */
	const cart = new Map();
	const { subscribe, update } = writable(cart);

	/**
	 * @param {import('../lib/types').ProductId} id
	 * */
	function addItem(id) {
		update((items) => {
			const amount = items.get(id);
			if (!amount) {
				items.set(id, 1);
			} else {
				items.set(id, amount + 1);
			}
			return items;
		});
	}

	/**
	 * @param {import('../lib/types').ProductId} id
	 * */
	function removeItem(id) {
		update((items) => {
			const amount = items.get(id);
			if (!amount) {
				return items;
			} else if (amount === 1) {
				items.delete(id);
			} else {
				items.set(id, amount - 1);
			}

			return items;
		});
	}

	function clear() {
		update((items) => {
			items.clear();
			return items;
		});
	}

	return {
		subscribe,
		addItem,
		removeItem,
		clear
	};
}

export const cart = shoppingCart();
export const amount = derived(cart, ($cart) => {
	let result = 0;

	for (const key of $cart.keys()) {
		result += $cart.get(key) || 0;
	}

	return result;
});
