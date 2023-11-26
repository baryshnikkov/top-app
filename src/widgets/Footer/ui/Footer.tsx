import { cn } from '@/shared/helpers/classNames';
import cls from './Footer.module.css';

interface FooterProps {
	className?: string;
}

export const Footer = (props: FooterProps): JSX.Element => {
	const { className } = props;

	return <div className={cn(cls.footer, {}, [className])}>Footer</div>;
};
