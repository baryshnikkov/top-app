import cls from './Footer.module.css';
import { cn } from '@/shared/lib/cn';

interface FooterProps {
    className?: string;
}

export function Footer(props: FooterProps) {
    const { className } = props;

    return <footer className={cn(cls.Footer, {}, [className])}>123</footer>;
}
