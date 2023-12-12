'use client';

import { ButtonHTMLAttributes, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/shared/helpers/classNames';
import { useScrollY } from '@/shared/hooks/useScrollY';
import ArrowUpIcon from '@/shared/assets/icons/arrowUp.svg';
import cls from './ButtonUp.module.css';

interface ButtonUpProps {
	className?: string;
}

export const ButtonUp = (props: ButtonUpProps): JSX.Element => {
	const { className } = props;
	const controls = useAnimation();
	const y = useScrollY();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		controls.start({ opacity: y / document.body.scrollHeight });
	}, [y, controls]);

	return (
		<motion.button
			className={cn(cls.buttonUp, {}, [className])}
			animate={controls}
			initial={{ opacity: 0 }}
			onClick={scrollToTop}
		>
			<ArrowUpIcon />
		</motion.button>
	);
};
