'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/shared/helpers/classNames';
import { useScrollY } from '@/shared/hooks/useScrollY';
import { ButtonIcon } from '@/shared/ui/ButtonIcon';

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
		controls.start({ opacity: document.body.scrollHeight / y > 15 ? 0 : 1 });
	}, [y, controls]);

	return (
		<motion.div className={cn('', {}, [className])} animate={controls} initial={{ opacity: 0 }}>
			<ButtonIcon variant='primary' icon='up' onClick={scrollToTop} />
		</motion.div>
	);
};
