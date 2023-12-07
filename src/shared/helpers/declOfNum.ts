export const declOfNum = (number: number, titles: [string, string, string]): string => {
	const lastDigit = number % 10;

	return titles[lastDigit === 1 ? 0 : lastDigit <= 4 && lastDigit !== 0 ? 1 : 2];
};
