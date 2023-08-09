/**@typedef {import('$lib/types').Product} Product */

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const url = `https://fakestoreapi.com/products/${params.id}`;

	/** @type {Promise<Product>} */
	const item = fetch(url)
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.error(error);
		});

	return {
		item: { promise: item }
	};
}
