import { cn } from '@/shared/helpers/classNames';
import cls from './Divider.module.css';

interface DividerProps {
	className?: string;
}

export const Divider = (props: DividerProps): JSX.Element => {
	const { className } = props;

	return <hr className={cn(cls.hr, {}, [className])} />;
};
