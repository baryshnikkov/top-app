import { InputHTMLAttributes } from 'react';
import { cn } from '@/shared/helpers/classNames';
import cls from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export const Input = (props: InputProps): JSX.Element => {
	const { className, ...otherProps } = props;

	return <input className={cn(cls.input, {}, [className])} {...otherProps} />;
};
