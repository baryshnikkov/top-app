'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/shared/helpers/classNames';
import { ButtonIcon } from '@/shared/ui/ButtonIcon';
import Logo from '@/shared/assets/icons/logo.svg';
import cls from './Header.module.css';

interface HeaderProps {
	className?: string;
	menu: ReactNode;
}

export const Header = (props: HeaderProps): JSX.Element => {
	const { className, menu } = props;
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const pathname = usePathname();

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20,
			},
		},
		closed: {
			opacity: 0,
			x: '100%',
		},
	};

	const onOpenMenu = () => {
		setIsOpened(true);
	};

	const onCloseMenu = () => {
		setIsOpened(false);
	};

	useEffect(() => {
		setIsOpened(false);
	}, [pathname]);

	return (
		<header className={cn(cls.header, {}, [className])}>
			<Logo />
			<ButtonIcon variant='secondary' icon='menu' onClick={onOpenMenu} />
			<motion.div
				className={cls.mobileMenu}
				variants={variants}
				initial={'closed'}
				animate={isOpened ? 'opened' : 'closed'}
			>
				{menu}
				<ButtonIcon className={cls.menuClose} variant='secondary' icon='close' onClick={onCloseMenu} />
			</motion.div>
		</header>
	);
};
