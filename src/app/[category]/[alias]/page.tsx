import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TopPageComponent } from '@/widgets/TopPageComponent';
import { firstLevelMenu, getMenu } from '@/entities/MenuData';
import { getPage } from '@/entities/PageData';
import { getProduct } from '@/entities/ProductData';

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
		description: page?.metaDescription,
	};
}

export default async function TopLevelCategoryAliasPage(props: TopLevelCategoryAliasProps): Promise<JSX.Element> {
	const { params } = props;
	const page = await getPage(params.alias);
	const products = await getProduct(page, 10);

	if (!page || !products) {
		notFound();
	}

	return <TopPageComponent page={page} products={products} />;
}
