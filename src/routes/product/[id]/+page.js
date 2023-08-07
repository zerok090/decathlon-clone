/**
 *  @typedef {Object} Product
 *  @property {number} id
 *  @property {string} title
 *  @property {number} price
 *  @property {string} category
 *  @property {string} description
 *  @property {string} image
 *  @property {{rate: number, count: number}} rating
 */

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
