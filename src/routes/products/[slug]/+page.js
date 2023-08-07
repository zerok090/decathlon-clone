import { apiData } from '$stores/productStore';

/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
	const url = `https://fakestoreapi.com/products/category/${params.slug}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			apiData.set(data);
		})
		.catch((error) => {
			console.log(error);
		});

	return {
		search: params.slug
	};
};
