'use client';

import { useReducer } from 'react';
import { HhCard } from '@/features/HhCard';
import { Sort, SortVariant, sortReducer } from '@/features/Sort';
import { Advantages } from '@/features/Advantages';
import { TopPageModel } from '@/entities/PageData';
import { ProductModel } from '@/entities/ProductData';
import { cn } from '@/shared/helpers/classNames';
import { Title } from '@/shared/ui/Title';
import { Chip } from '@/shared/ui/Chip';
import cls from './TopPageComponent.module.css';

interface TopPageComponentProps {
	className?: string;
	page: TopPageModel;
	products: ProductModel[];
}

export const TopPageComponent = (props: TopPageComponentProps): JSX.Element => {
	const { className, page, products } = props;
	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: 'rating' });

	const setSort = (sort: SortVariant) => {
		dispatchSort({ type: sort });
	};

	return (
		<div className={cn('', {}, [className])}>
			<div className={cls.title}>
				<Title variant='h1'>{page.title}</Title>
				{products && (
					<Chip variant='grey' size='medium'>
						{products.length}
					</Chip>
				)}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div>{sortedProducts && sortedProducts.map((p) => <div key={p._id}>{p.title}</div>)}</div>
			{page.hh && (
				<>
					<div className={cls.hhTitle}>
						<Title variant='h2'>Вакансии - {page.category}</Title>
						<Chip variant='red' size='medium'>
							hh.ru
						</Chip>
					</div>
					<HhCard
						_id={page.hh._id}
						count={page.hh.count}
						juniorSalary={page.hh.juniorSalary}
						middleSalary={page.hh.middleSalary}
						seniorSalary={page.hh.seniorSalary}
						updateAt={page.hh.updateAt}
					/>
				</>
			)}
			{page.advantages && page.advantages.length > 0 && (
				<>
					<Title variant='h2'>Преимущества</Title>
					<Advantages advantages={page.advantages} />
				</>
			)}
			{page.seoText && <div className={cls.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
			<Title variant='h2'>Получаемые навыки</Title>
			{page.tags.map((t) => (
				<Chip key={t} color='primary' className={cls.tag}>
					{t}
				</Chip>
			))}
		</div>
	);
};
