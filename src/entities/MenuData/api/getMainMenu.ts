import { API } from '@/shared/constants/api';
import { MenuItem } from '../model/types/mainMenu';

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
	const response = await fetch(API.topPage.find, {
		method: 'POST',
		headers: new Headers({ 'content-type': 'application/json' }),
		body: JSON.stringify({
			firstCategory,
		}),
		next: { revalidate: 10 },
	});

	return response.json();
}
