import { cn } from '@/shared/helpers/classNames';
import cls from './SideBar.module.css';

interface SideBarProps {
	className?: string;
}

export const SideBar = (props: SideBarProps): JSX.Element => {
	const { className } = props;

	return <div className={cn(cls.sideBar, {}, [className])}>SideBar</div>;
};
