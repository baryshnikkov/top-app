'use client';

import { HTMLAttributes } from 'react';
import { cn } from '@/shared/helpers/classNames';
import SortIcon from '@/shared/assets/icons/sort.svg';
import { SortVariant } from '../model/types/sort';
import cls from './Sort.module.css';

interface SortProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	sort: SortVariant;
	setSort: (sort: SortVariant) => void;
}

export const Sort = (props: SortProps): JSX.Element => {
	const { className, sort, setSort, ...otherProps } = props;

	return (
		<div className={cn(cls.sort, {}, [className])} {...otherProps}>
			<span
				onClick={() => setSort('rating')}
				className={cn(
					'',
					{
						[cls.active]: sort == 'rating',
					},
					[]
				)}
			>
				<SortIcon className={cls.sortIcon} />
				По рейтингу
			</span>
			<span
				onClick={() => setSort('price')}
				className={cn(
					'',
					{
						[cls.active]: sort == 'price',
					},
					[]
				)}
			>
				<SortIcon className={cls.sortIcon} />
				По цене
			</span>
		</div>
	);
};
