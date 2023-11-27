'use client';
import { useState } from 'react';
import { MenuItem } from '@/entities/MenuData';
import { cn } from '@/shared/helpers/classNames';

interface MenuProps {
	className?: string;
	menu: MenuItem[];
}

export const Menu = (props: MenuProps): JSX.Element => {
	const { className, menu } = props;
	const [menuState, setMenuState] = useState<MenuItem[]>(menu);

	return <div className={cn('', {}, [className])}>menu</div>;
};
