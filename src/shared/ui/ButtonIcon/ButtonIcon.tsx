import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/shared/helpers/classNames';
import UpIcon from '@/shared/assets/icons/arrowUp.svg';
import CloseIcon from '@/shared/assets/icons/closeBig.svg';
import MenuIcon from '@/shared/assets/icons/menu.svg';
import cls from './ButtonIcon.module.css';

const icons = {
	up: UpIcon,
	close: CloseIcon,
	menu: MenuIcon,
};

type IconVariants = keyof typeof icons;

type ButtonVariants = 'primary' | 'secondary';

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariants;
	icon: IconVariants;
}

export const ButtonIcon = (props: ButtonIconProps): JSX.Element => {
	const { className, variant = 'primary', icon, ...otherProps } = props;
	const Icon = icons[icon];

	return (
		<button className={cn(cls.button, {}, [className, cls[variant]])} {...otherProps}>
			<Icon className={cls[icon]} />
		</button>
	);
};
