import cls from './AppLink.module.css';
import { cn } from '@/shared/lib/cn';
import Link from 'next/link';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

type Variants = 'clear' | 'outline';

interface AppLinkProps {
    className?: string;
    href: string;
    alt: string;
    active?: boolean;
    children: ReactNode;
    variant?: Variants;
}

export function AppLink(props: AppLinkProps) {
    const { className, href, active, alt, variant = 'clear', children } = props;
    const router = useRouter();

    const isActive = router.pathname === href && active;

    return (
        <Link
            className={cn(cls.AppLink, { [cls.active]: isActive }, [
                className,
                cls[variant],
            ])}
            href={href}
            alt={alt}
        >
            {children}
        </Link>
    );
}
