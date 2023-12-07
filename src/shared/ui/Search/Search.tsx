'use client';

import { ChangeEvent, KeyboardEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/shared/helpers/classNames';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { getRouteSearch } from '@/shared/constants/router';
import SearchIcon from '@/shared/assets/icons/search.svg';
import cls from './Search.module.css';

interface SearchProps {
	className?: string;
}

export const Search = (props: SearchProps): JSX.Element => {
	const { className } = props;
	const [value, setValue] = useState<string>('');
	const router = useRouter();

	const onSearch = () => {
		router.push(getRouteSearch(value));
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key == 'Enter') {
			onSearch();
		}
	};

	return (
		<div className={cn(cls.search, {}, [className])}>
			<Input
				className={cls.input}
				placeholder='Поиск...'
				value={value}
				onChange={onChange}
				onKeyDown={handleKeyDown}
			/>
			<Button className={cls.button} variant='primary' onClick={onSearch}>
				<SearchIcon />
			</Button>
		</div>
	);
};
