import { getProducts } from '$stores/shopifyStore.server';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		products: getProducts()
	};
}
