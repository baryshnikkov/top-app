'use client';

import { HTMLAttributes, KeyboardEvent } from 'react';
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

	const onSortKey = (key: KeyboardEvent, s: SortVariant) => {
		if (key.code === 'Space' || key.code === 'Enter') {
			key.preventDefault();
			setSort(s);
		}
	};

	return (
		<div className={cn(cls.sort, {}, [className])} {...otherProps}>
			<button
				onClick={() => setSort('rating')}
				onKeyDown={(key: KeyboardEvent) => onSortKey(key, 'rating')}
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
			</button>
			<button
				onClick={() => setSort('price')}
				onKeyDown={(key: KeyboardEvent) => onSortKey(key, 'price')}
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
			</button>
		</div>
	);
};
