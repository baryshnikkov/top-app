import { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';
import { cn } from '@/shared/helpers/classNames';
import cls from './Card.module.css';

type CardColor = 'white' | 'blue';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: ReactNode;
	color?: CardColor;
}

export const Card = forwardRef((props: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const { children, className, color = 'white', ...otherProps } = props;

	return (
		<div className={cn(cls.card, {}, [className, cls[color]])} ref={ref} {...otherProps}>
			{children}
		</div>
	);
});

Card.displayName = 'Card';
