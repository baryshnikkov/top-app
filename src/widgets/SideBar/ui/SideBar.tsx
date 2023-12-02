import { Menu } from '@/features/Menu';
import { MenuItem, firstLevelMenu, getMenu } from '@/entities/MenuData';
import { TopLevelCategory } from '@/shared/constants/levelCategory';
import { cn } from '@/shared/helpers/classNames';
import cls from './SideBar.module.css';

interface SideBarProps {
	className?: string;
}

export const SideBar = async (props: SideBarProps): Promise<JSX.Element> => {
	const { className } = props;

	let menuByLevelCategory: Record<TopLevelCategory, MenuItem[]> = { 0: [], 1: [], 2: [], 3: [] };
	for (const m of firstLevelMenu) {
		const menu = await getMenu(m.id);

		menuByLevelCategory[m.id] = menu;
	}

	return (
		<div className={cn(cls.sideBar, {}, [className])}>
			<Menu menu={menuByLevelCategory} firstLevelMenu={firstLevelMenu} />
		</div>
	);
};
