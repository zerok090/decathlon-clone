export type ProductId = number;

export type Product = {
	id: ProductId;
	title: string;
	price: number;
	category: string;
	description: string;
	image: string;
	rating: { rate: number; count: number };
}

export type ProductsResponse = {
	data: {
		products: {
			edges: Node[]
		}
	}
}

type Node = {
	node: {
		id: string,
		title: string,
	}
};

export type PromiseProductResponse = Promise<ProductsResponse> | undefined;