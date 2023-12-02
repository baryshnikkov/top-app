import { firstLevelMenu } from '@/entities/MenuData';

export function generateStaticParams() {
	return firstLevelMenu.map((m) => {
		category: m.route;
	});
}

interface TopLevelCategoryPageProps {
	params: {
		category: string;
	};
}

export default function TopLevelCategoryPage(props: TopLevelCategoryPageProps): JSX.Element {
	const { params } = props;

	return <div>TopLevelCategoryPage category={params.category}</div>;
}
