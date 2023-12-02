import { API } from '@/shared/constants/api';
import { ProductModel } from '../model/types/product';

// TODO any
export async function getProduct(page: any, limit: number): Promise<ProductModel[]> {
	const response = await fetch(API.product.find, {
		method: 'POST',
		headers: new Headers({ 'content-type': 'application/json' }),
		body: JSON.stringify({
			category: page.category,
			limit: limit,
		}),
		next: { revalidate: 10 },
	});

	return response.json();
}
