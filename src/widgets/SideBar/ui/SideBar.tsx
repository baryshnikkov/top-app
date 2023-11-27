import { Menu } from '@/features/Menu';
import { getMenu } from '@/entities/MenuData';
import { cn } from '@/shared/helpers/classNames';
import cls from './SideBar.module.css';

interface SideBarProps {
	className?: string;
}

export const SideBar = async (props: SideBarProps): Promise<JSX.Element> => {
	const { className } = props;
	const menu = await getMenu(0);

	return (
		<div className={cn(cls.sideBar, {}, [className])}>
			<Menu menu={menu} />
		</div>
	);
};
