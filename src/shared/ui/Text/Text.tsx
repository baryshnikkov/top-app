import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/shared/helpers/classNames';
import cls from './Text.module.css';

type TextSize = 'large' | 'medium' | 'small';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
	className?: string;
	children: ReactNode;
	size: TextSize;
}

export const Text = (props: TextProps): JSX.Element => {
	const { className, children, size, ...otherProps } = props;

	return (
		<p className={cn('', {}, [className, cls[size]])} {...otherProps}>
			{children}
		</p>
	);
};
