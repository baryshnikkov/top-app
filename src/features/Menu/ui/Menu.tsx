'use client';
import { useState } from 'react';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/entities/MenuData';
import { cn } from '@/shared/helpers/classNames';
import { TopLevelCategory } from '@/shared/constants/levelCategory';
import cls from './Menu.module.css';

interface MenuProps {
	className?: string;
	menu: MenuItem[];
	firstLevelMenu: FirstLevelMenuItem[];
	firstCategory: TopLevelCategory;
}

export const Menu = (props: MenuProps): JSX.Element => {
	const { className, menu, firstLevelMenu, firstCategory } = props;
	const [menuState, setMenuState] = useState<MenuItem[]>(menu);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((m) => (
					<div key={m.route}>
						<a href={`/${m.route}`}>
							<div className={cn(cls.firstLevel, { [cls.firstLevelActive]: m.id === firstCategory }, [])}>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</a>
						{m.id === firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={cls.secondBlock}>
				{menu.map((m) => (
					<div key={m._id.secondCategory}>
						<div className={cls.secondLevel}>{m._id.secondCategory}</div>
						<div className={cn(cls.secondLevelBlock, { [cls.secondLevelBlockOpened]: m.isOpened }, [])}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			<>
				{pages.map((p) => (
					<a
						key={p.category}
						href={`/${route}/${p.alias}`}
						className={cn(cls.thirdLevel, { [cls.thirdLevelActive]: false }, [])}
					>
						{p.category}
					</a>
				))}
			</>
		);
	};

	return <div className={cn('', {}, [className])}>{buildFirstLevel()}</div>;
};
