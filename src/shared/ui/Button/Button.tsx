import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/helpers/classNames';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import cls from './Button.module.css';

type VariantButton = 'primary' | 'secondary';
type VariantArrow = 'right' | 'down' | 'none';

interface ButtonProps
	extends Omit<
		ButtonHTMLAttributes<HTMLButtonElement>,
		'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
	> {
	className?: string;
	children: ReactNode;
	variant?: VariantButton;
	arrow?: VariantArrow;
}

const mapArrowToClass: Record<VariantButton, string> = {
	primary: cls.arrowPrimary,
	secondary: cls.arrowSecondary,
};

export const Button = (props: ButtonProps): JSX.Element => {
	const { className, children, variant = 'primary', arrow = 'none', ...otherProps } = props;

	const colorArrowClass = mapArrowToClass[variant];

	return (
		<motion.button
			className={cn(cls.button, {}, [className, cls[variant]])}
			whileHover={{ scale: 1.05 }}
			{...otherProps}
		>
			{children}
			<ArrowIcon className={cn(cls.arrowIcon, {}, [colorArrowClass, cls[arrow]])} />
		</motion.button>
	);
};
