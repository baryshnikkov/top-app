import { ReactNode, useMemo } from 'react';
import { cn } from '@/shared/helpers/classNames';
import cls from './Title.module.css';

type VariantHeader = 'h1' | 'h2' | 'h3';

interface TitleProps {
	variant: VariantHeader;
	className?: string;
	children: ReactNode;
}

const mapVariantToClass: Record<VariantHeader, string> = {
	h1: cls.h1,
	h2: cls.h2,
	h3: cls.h3,
};

export const Title = (props: TitleProps): JSX.Element => {
	const { variant: HeaderTag, className, children } = props;

	const additional = useMemo(() => {
		const variantClass = mapVariantToClass[HeaderTag];

		return [className, variantClass];
	}, [HeaderTag, className]);

	return <HeaderTag className={cn(cls.Title, {}, additional)}>{children}</HeaderTag>;
};
