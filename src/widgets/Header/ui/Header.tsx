import { cn } from '@/shared/helpers/classNames';
import cls from './Header.module.css';

interface HeaderProps {
	className?: string;
}

export const Header = (props: HeaderProps): JSX.Element => {
	const { className } = props;

	return <div className={cn(cls.header, {}, [className])}>Header</div>;
};
