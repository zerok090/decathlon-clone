import { writable } from "svelte/store";

function menuStore() {
	const { subscribe, update } = writable(false);

	return {
		subscribe,
		toggle: () => update((val) => !val),
	};
}

export const openMenu = menuStore();