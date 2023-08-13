/**@typedef {import('$lib/types').Product} Product */

/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
	let url = 'https://fakestoreapi.com/products/';
	if (params.category) url = `https://fakestoreapi.com/products/category/${params.category}`
	
	/** @type {Promise<Product[]>} */
	const items = fetch(url)
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.log(error);
		});

		
	return {
		search: params.category,
		items: { promise: items }
	};
};
