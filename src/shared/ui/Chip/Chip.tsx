import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/shared/helpers/classNames';
import cls from './Chip.module.css';

type VariantChip = 'primary' | 'secondary' | 'red' | 'green' | 'grey';
type SizeChip = 'medium' | 'large';

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	size?: SizeChip;
	variant?: VariantChip;
	children: ReactNode;
}

export const Chip = (props: ChipProps): JSX.Element => {
	const { className, children, size = 'medium', variant = 'primary', ...otherProps } = props;

	return (
		<div className={cn(cls.chip, {}, [className, cls[size], cls[variant]])} {...otherProps}>
			{children}
		</div>
	);
};
