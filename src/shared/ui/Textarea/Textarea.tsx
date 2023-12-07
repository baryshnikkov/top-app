import { TextareaHTMLAttributes } from 'react';
import { cn } from '@/shared/helpers/classNames';
import cls from './Textarea.module.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
}

export const Textarea = (props: TextareaProps): JSX.Element => {
	const { className, ...otherProps } = props;

	return <textarea className={cn(cls.textarea, {}, [className])} {...otherProps} />;
};
