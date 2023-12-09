import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { cn } from '@/shared/helpers/classNames';
import cls from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	error?: FieldError;
}

export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
	const { className, error, ...otherProps } = props;

	return (
		<div className={cn(cls.inputWrapper, {}, [className])}>
			<input className={cn(cls.input, { [cls.error]: Boolean(error) }, [])} ref={ref} {...otherProps} />
			{error && <span className={cls.errorMessage}>{error.message}</span>}
		</div>
	);
});

Input.displayName = 'Input';
