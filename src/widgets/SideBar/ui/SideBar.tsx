import { Menu } from '@/features/Menu';
import { firstLevelMenu, getMenu } from '@/entities/MenuData';
import { cn } from '@/shared/helpers/classNames';
import cls from './SideBar.module.css';

interface SideBarProps {
	className?: string;
}

export const SideBar = async (props: SideBarProps): Promise<JSX.Element> => {
	const { className } = props;
	const firstCategory = 0;
	const menu = await getMenu(firstCategory);

	return (
		<div className={cn(cls.sideBar, {}, [className])}>
			<Menu menu={menu} firstLevelMenu={firstLevelMenu} firstCategory={firstCategory} />
		</div>
	);
};
