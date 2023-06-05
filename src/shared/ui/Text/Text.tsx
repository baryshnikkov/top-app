import { useMemo } from 'react';
import { cn } from '@/shared/lib/cn';
import cls from './Text.module.css';

type TextVariant = 'primary' | 'accent';

type TextAlign = 'left' | 'center' | 'right';

type TextSize = 's' | 'm' | 'l';

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
    s: cls.size_s,
    m: cls.size_m,
    l: cls.size_l,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    bold?: boolean;
    size?: TextSize;
    nSize?: Number;
}

export function Text(props: TextProps) {
    const {
        className,
        title,
        text,
        variant = 'primary',
        align = 'left',
        size = 'm',
        bold,
        nSize,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const additional = useMemo(
        () => [className, cls[variant], cls[align], sizeClass],
        [align, className, sizeClass, variant],
    );

    const numberSize = nSize ? { fontSize: `${nSize}px` } : {};

    return (
        <div
            className={cn('', { [cls.bold]: bold }, additional)}
            style={numberSize}
        >
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
}
