import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { cn } from '@/shared/helpers/classNames';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import cls from './Button.module.css';

type VariantButton = 'primary' | 'secondary';
type VariantArrow = 'right' | 'down' | 'none';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	variant?: VariantButton;
	arrow?: VariantArrow;
}

const mapArrowToClass: Record<VariantButton, string> = {
	primary: cls.arrowPrimary,
	secondary: cls.arrowSecondary,
};

export const Button = memo((props: ButtonProps): JSX.Element => {
	const { className, children, variant = 'primary', arrow = 'none', ...otherProps } = props;

	const colorArrowClass = mapArrowToClass[variant];

	return (
		<button className={cn(cls.button, {}, [className, cls[variant]])} {...otherProps}>
			{children}
			<ArrowIcon className={cn(cls.arrowIcon, {}, [colorArrowClass, cls[arrow]])} />
		</button>
	);
});

Button.displayName = 'Button';
