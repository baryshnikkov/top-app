'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/entities/MenuData';
import { TopLevelCategory } from '@/shared/constants/levelCategory';
import { cn } from '@/shared/helpers/classNames';
import cls from './Menu.module.css';

interface MenuProps {
	className?: string;
	menu: Record<TopLevelCategory, MenuItem[]>;
	firstLevelMenu: FirstLevelMenuItem[];
}

const mapFirstCategoryPathnameToFirstCategory: Record<string, TopLevelCategory> = {
	courses: TopLevelCategory.Courses,
	services: TopLevelCategory.Services,
	books: TopLevelCategory.Books,
	products: TopLevelCategory.Products,
};

export const Menu = (props: MenuProps): JSX.Element => {
	const { className, menu, firstLevelMenu } = props;
	const pathname = usePathname();
	const [menuState, setMenuState] = useState<Record<TopLevelCategory, MenuItem[]>>(menu);

	const firstCategoryPathname = pathname.split('/')[1];
	const firstCategory = mapFirstCategoryPathnameToFirstCategory[firstCategoryPathname];

	const openSecondLevel = (secondCategory: string) => () => {
		const newTopLevelCategory = menuState[firstCategory].map((m) => {
			if (m._id.secondCategory == secondCategory) {
				m.isOpened = !m.isOpened;
			}

			return m;
		});

		setMenuState({ ...menuState, [firstCategory]: newTopLevelCategory });
	};

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((m) => (
					<div key={m.route}>
						<Link href={`/${m.route}`}>
							<div
								className={cn(
									cls.firstLevel,
									{ [cls.firstLevelActive]: m.route === firstCategoryPathname },
									[]
								)}
							>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</Link>
						{m.route === firstCategoryPathname && buildSecondLevel(m)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={cls.secondBlock}>
				{menuState[firstCategory].map((m) => {
					if (m.pages.map((p) => p.alias).includes(pathname.split('/')[2])) {
						m.isOpened = true;
					}

					return (
						<div key={m._id.secondCategory}>
							<div className={cls.secondLevel} onClick={openSecondLevel(m._id.secondCategory)}>
								{m._id.secondCategory}
							</div>
							<div className={cn(cls.secondLevelBlock, { [cls.secondLevelBlockOpened]: m.isOpened }, [])}>
								{buildThirdLevel(m.pages, menuItem.route)}
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			<>
				{pages.map((p) => (
					<Link
						key={p.category}
						href={`/${route}/${p.alias}`}
						className={cn(
							cls.thirdLevel,
							{ [cls.thirdLevelActive]: `/${route}/${p.alias}` === pathname },
							[]
						)}
					>
						{p.category}
					</Link>
				))}
			</>
		);
	};

	return <div className={cn('', {}, [className])}>{buildFirstLevel()}</div>;
};
