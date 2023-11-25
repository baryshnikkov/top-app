import { HTMLAttributes, ReactNode, memo } from 'react';
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

export const Chip = memo((props: ChipProps): JSX.Element => {
	const { className, children, size = 'medium', variant = 'primary' } = props;

	return <div className={cn(cls.chip, {}, [className, cls[size], cls[variant]])}>{children}</div>;
});

Chip.displayName = 'Chip';
