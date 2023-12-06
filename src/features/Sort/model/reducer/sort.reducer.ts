import { ProductModel } from '@/entities/ProductData';
import { SortVariant } from '../types/sort';

export type SortActions = { type: 'rating' } | { type: 'price' };

export interface SortReducerState {
	sort: SortVariant;
	products: ProductModel[];
}

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
	switch (action.type) {
	case 'rating':
		return {
			sort: 'rating',
			products: state.products.sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
		};
	case 'price':
		return {
			sort: 'price',
			products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
		};
	default:
		throw new Error('Неверный тип сортировки');
	}
};
