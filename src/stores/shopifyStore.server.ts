import type { ProductsResponse } from "$lib/types";

export const getProducts = async (): Promise<ProductsResponse | undefined> => {
	try {
		const response = await fetch('https://store-dcc.myshopify.com/admin/api/2023-07/graphql.json', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Access-Token': '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'
			},
			body: JSON.stringify({
				query: `{
          products (first: 10) {
            edges {
              node {
                id
                title
              }
            }
          }
       }`
			})
		});

		if (!response.ok) {
			throw new Error(`Request failed with status: ${response.status}`);
		}
		return await response.json();
	} catch (e) {
		console.log(e);
	}
};
