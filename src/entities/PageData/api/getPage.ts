import { API } from '@/shared/constants/api';
import { TopPageModel } from '../model/types/page';

export async function getPage(alias: string): Promise<TopPageModel | null> {
	const response = await fetch(API.topPage.byAlias + alias, {
		next: {
			revalidate: 10,
		},
	});

	if (!response.ok) {
		return null;
	}

	return response.json();
}
