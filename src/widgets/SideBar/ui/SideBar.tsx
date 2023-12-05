import { Menu } from '@/features/Menu';
import { FirstLevelMenuItem, MenuItem, firstLevelMenu, getMenu } from '@/entities/MenuData';
import { TopLevelCategory } from '@/shared/constants/levelCategory';
import { cn } from '@/shared/helpers/classNames';
import Logo from '@/shared/assets/icons/logo.svg';
import cls from './SideBar.module.css';

interface SideBarProps {
	className?: string;
}

const getMenuByLevelCategory = async (firstLevelMenu: FirstLevelMenuItem[]) => {
	let menuByLevelCategory: Record<TopLevelCategory, MenuItem[]> = { 0: [], 1: [], 2: [], 3: [] };

	for (const m of firstLevelMenu) {
		const menu = await getMenu(m.id);

		menuByLevelCategory[m.id] = menu;
	}

	return menuByLevelCategory;
};

export const SideBar = async (props: SideBarProps): Promise<JSX.Element> => {
	const { className } = props;
	const menuByLevelCategory = await getMenuByLevelCategory(firstLevelMenu);

	return (
		<div className={cn(cls.sideBar, {}, [className])}>
			<Logo />
			<div>Search</div>
			<Menu menu={menuByLevelCategory} firstLevelMenu={firstLevelMenu} />
		</div>
	);
};
