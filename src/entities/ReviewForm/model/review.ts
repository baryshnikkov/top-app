export interface ReviewSentResponse {
	message: string;
	error?: string;
	statusCode?: string;
}

export interface ReviewFormData {
	name: string;
	title: string;
	description: string;
	rating: number;
}
