'use client';

import { useState, KeyboardEvent } from 'react';
import { cn } from '@/shared/helpers/classNames';
import cls from './SkipLink.module.css';

interface SkipLinkProps {
	className?: string;
}

export const SkipLink = (props: SkipLinkProps): JSX.Element => {
	const { className } = props;
	const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);
	const mainBlock = document.querySelector('main');

	const skipContentAction = (key: KeyboardEvent) => {
		if (key.code === 'Space' || key.code === 'Enter') {
			key.preventDefault();
			mainBlock?.focus();
		}
	};

	const onFocus = () => {
		setIsSkipLinkDisplayed(true);
	};

	const onBlur = () => {
		setIsSkipLinkDisplayed(false);
	};

	return (
		<a
			className={cn(cls.skipLink, { [cls.displayed]: isSkipLinkDisplayed }, [className])}
			onFocus={onFocus}
			onBlur={onBlur}
			onKeyDown={skipContentAction}
			tabIndex={1}
		>
			Сразу к содержанию
		</a>
	);
};
