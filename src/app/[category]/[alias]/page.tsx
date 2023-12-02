import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { firstLevelMenu, getMenu } from '@/entities/MenuData';
import { getPage } from '@/entities/PageData';

interface TopLevelCategoryAliasProps {
	params: {
		alias: string;
	};
}

export async function generateStaticParams() {
	let alias: string[] = [];

	for (const m of firstLevelMenu) {
		const menu = await getMenu(m.id);

		alias.push(...menu.flatMap((m) => m.pages.map((p) => p.alias)));
	}

	return alias.map((a) => {
		alias: a;
	});
}

export async function generateMetadata(props: TopLevelCategoryAliasProps): Promise<Metadata> {
	const { params } = props;
	const page = await getPage(params.alias);
	return {
		title: page?.metaTitle,
	};
}

export default async function TopLevelCategoryAliasPage(props: TopLevelCategoryAliasProps): Promise<JSX.Element> {
	const { params } = props;
	const page = await getPage(params.alias);

	if (!page) {
		notFound();
	}

	return (
		<div>
			ProductsPage
			<h1>alias = {params.alias}</h1>
			<h2>title = {page.title}</h2>
		</div>
	);
}
