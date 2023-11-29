import { Menu } from '@/features/Menu';
import { firstLevelMenu, getMenu } from '@/entities/MenuData';
import { cn } from '@/shared/helpers/classNames';
import cls from './SideBar.module.css';
import { TopLevelCategory } from '@/shared/constants/levelCategory';

interface SideBarProps {
	className?: string;
}

export const SideBar = async (props: SideBarProps): Promise<JSX.Element> => {
	const { className } = props;
	const firstCategory = TopLevelCategory.Courses;
	const menu = await getMenu(firstCategory);

	return (
		<div className={cn(cls.sideBar, {}, [className])}>
			<Menu menu={menu} firstLevelMenu={firstLevelMenu} firstCategory={firstCategory} />
		</div>
	);
};
