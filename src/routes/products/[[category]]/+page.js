/**@typedef {import('$lib/types').Product} Product */

/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {	
	return {
		search: params.category,
	};
};
