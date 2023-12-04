'use client';

import { usePathname } from 'next/navigation';
import { HhCard } from '@/features/HhCard';
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
	const pathName = usePathname();
	const firstCategory = pathName.split('/')[1];

	return (
		<div className={cn(cls.topPageComponent, {}, [className])}>
			<div className={cls.title}>
				<Title variant='h1'>{page.title}</Title>
				{products && (
					<Chip variant='grey' size='medium'>
						{products.length}
					</Chip>
				)}
				<span>Сортировка</span>
			</div>
			<div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>
			<div className={cls.hhTitle}>
				<Title variant='h2'>Вакансии - {page.category}</Title>
				<Chip variant='red' size='medium'>
					hh.ru
				</Chip>
			</div>
			{firstCategory === 'courses' && (
				<HhCard
					_id={page.hh._id}
					count={page.hh.count}
					juniorSalary={page.hh.juniorSalary}
					middleSalary={page.hh.middleSalary}
					seniorSalary={page.hh.seniorSalary}
					updateAt={page.hh.updateAt}
				/>
			)}
		</div>
	);
};
