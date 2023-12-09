import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { cn } from '@/shared/helpers/classNames';
import cls from './Textarea.module.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	error?: FieldError;
}

export const Textarea = forwardRef((props: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
	const { className, error, ...otherProps } = props;

	return (
		<div className={cn(cls.textareaWrapper, {}, [className])}>
			<textarea className={cn(cls.textarea, { [cls.error]: Boolean(error) }, [])} ref={ref} {...otherProps} />
			{error && <span className={cls.errorMessage}>{error.message}</span>}
		</div>
	);
});

Textarea.displayName = 'Textarea';
