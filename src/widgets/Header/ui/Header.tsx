import { cn } from '@/shared/helpers/classNames';

interface HeaderProps {
	className?: string;
}

export const Header = (props: HeaderProps): JSX.Element => {
	const { className } = props;

	return <div className={cn('', {}, [className])}>Header</div>;
};
