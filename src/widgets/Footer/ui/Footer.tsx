import { format } from 'date-fns';
import { cn } from '@/shared/helpers/classNames';
import cls from './Footer.module.css';

interface FooterProps {
	className?: string;
}

export const Footer = (props: FooterProps): JSX.Element => {
	const { className } = props;

	return (
		<footer className={cn(cls.footer, {}, [className])}>
			<div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
			<a href='#' target='_blank'>
				Пользовательское соглашение
			</a>
			<a href='#' target='_blank'>
				Политика конфиденциальности
			</a>
		</footer>
	);
};
