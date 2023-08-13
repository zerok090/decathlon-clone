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
	const { subscribe, set } = writable([]);

	return {
		subscribe,
		set,
	}
}

export const categories = categoryStore();