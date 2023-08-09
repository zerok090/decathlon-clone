/**@typedef {import('$lib/types').Product} Product */

/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
	let url = '';
	if (params.slug) {
		url = `https://fakestoreapi.com/products/category/${params.slug}`;
	} else {
		url = 'https://fakestoreapi.com/products/';
	}

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
		search: params.slug,
		items: { promise: items }
	};
};
