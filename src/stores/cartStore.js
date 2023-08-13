import { derived, writable } from 'svelte/store';
import { fromLocalStorage, toLocalStorage } from '../client/localStorage';

const storageKey = 'storedCart';

function shoppingCart() {
	/** @type {Map<import('$lib/types').ProductId, [number, number]>} */
	const cart = fromLocalStorage(storageKey, new Map());
	const { subscribe, update } = writable(cart);

	/**
	 *  @param {import('$lib/types').ProductId} id
	 * @param {number} price
	 */
	function addItem(id, price) {
		update((items) => {
			const amount = items.get(id);
			if (amount === undefined) {
				items.set(id, [1, price]);
			} else {
				items.set(id, [amount[0] + 1, amount[1]]);
			}
			return items;
		});
		console.log(cart);
	}

	/** @param {import('$lib/types').ProductId} id */
	function removeItem(id) {
		update((items) => {
			const amount = items.get(id);
			if (!amount) {
				return items;
			} else if (amount[0] === 1) {
				items.delete(id);
			} else {
				items.set(id, [amount[0] - 1, amount[1]]);
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
		result += value[0];
	}

	return result;
});

export const totalPrice = derived(cart, async ($cart) => {
	let result = 0;
	for (const value of $cart.values()) {
		result += value[0] * value[1];
	}

	return result;
});
