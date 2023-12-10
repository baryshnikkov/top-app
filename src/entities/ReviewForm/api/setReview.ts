import { API } from '@/shared/constants/api';
import { ReviewFormData, ReviewSentResponse } from '../model/review';

export async function setReview(reviewData: ReviewFormData, productId: string): Promise<ReviewSentResponse> {
	const response = await fetch(API.review.createDemo, {
		method: 'POST',
		headers: new Headers({ 'content-type': 'application/json' }),
		body: JSON.stringify({
			...reviewData,
			productId,
		}),
	});

	return response.json();
}
