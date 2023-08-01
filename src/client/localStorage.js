import { browser } from '$app/environment';

function replacer(key, value) {
	if (value instanceof Map) {
		return {
			dataType: 'Map',
			value: Array.from(value.entries())
		};
	} else {
		return value;
	}
}

function reviver(key, value) {
	if (typeof value === 'object' && value !== null) {
		if (value.dataType === 'Map') {
			return new Map(value.value);
		}
	}
	return value;
}

// Get value from localStorage if in browser and the value is stored, otherwise fallback
/**
 * @param {string} storageKey
 * @param {unknown} fallbackValue
 */
function fromLocalStorage(storageKey, fallbackValue) {
	if (browser) {
		const storedValue = window.localStorage.getItem(storageKey);

		if (storedValue !== 'undefined' && storedValue !== null) {
			return typeof fallbackValue === 'object' ? JSON.parse(storedValue, reviver) : storedValue;
		}
	}

	return fallbackValue;
}

/**
 * @param {*} store
 * @param {string} storageKey
 */
function toLocalStorage(store, storageKey) {
	if (browser) {
		store.subscribe((/** @type {any} */ value) => {
			const storageValue = typeof value === 'object' ? JSON.stringify(value, replacer) : value;
			window.localStorage.setItem(storageKey, storageValue);
		});
	}
}

export { fromLocalStorage, toLocalStorage };
