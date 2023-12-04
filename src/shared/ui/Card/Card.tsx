import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/shared/helpers/classNames';
import cls from './Card.module.css';

type CardColor = 'white' | 'blue';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: ReactNode;
	color?: CardColor;
}

export const Card = (props: CardProps): JSX.Element => {
	const { children, className, color = 'white', ...otherProps } = props;

	return (
		<div className={cn(cls.card, {}, [className, cls[color]])} {...otherProps}>
			{children}
		</div>
	);
};
