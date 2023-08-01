import { derived, writable } from 'svelte/store';
import { fromLocalStorage, toLocalStorage } from '../client/localStorage';

const storageKey = 'storedCart';

function shoppingCart() {
	/** @type {Map<import('../lib/types').ProductId, number>} */
	const cart = fromLocalStorage(storageKey, new Map());
	const { subscribe, update } = writable(cart);

	/** @param {import('../lib/types').ProductId} id */
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

	/** @param {import('../lib/types').ProductId} id */
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
// local storage subscribes to cart state changes
toLocalStorage(cart, storageKey);

export const amount = derived(cart, async ($cart) => {
	let result = 0;

	for (const value of $cart.values()) {
		result += value;
	}

	return result;
});
