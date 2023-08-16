import { writable } from 'svelte/store';

function menuStore() {
	const { subscribe, update } = writable(false);

	return {
		subscribe,
		toggle: () => update((val) => !val)
	};
}

export const openMenu = menuStore();

function categoryStore() {
	/** @type {string[]} */
	const initValue = [];
	const { subscribe, set } = writable(initValue);

	/** 
	 * @param {string[]} categories
	 */
	const setItems = (categories) => {
		set(['all', ...categories]);
	};

	return {
		subscribe,
		setItems
	};
}

export const categories = categoryStore();
