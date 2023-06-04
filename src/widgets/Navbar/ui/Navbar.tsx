import cls from './Navbar.module.css';
import { cn } from '@/shared/lib/cn';
import { AppLink } from '@/shared/ui/AppLink';

interface NavbarProps {
    className?: string;
}

export function Navbar(props: NavbarProps) {
    const { className } = props;

    return (
        <nav className={cn(cls.Navbar, {}, [className])}>
            <AppLink href="/catalog" active={true} alt="Каталог">
                Каталог
            </AppLink>
            <AppLink href="/courses" active={true} alt="Курсы">
                Курсы
            </AppLink>
            <AppLink href="/collaboration" active={true} alt="Сотрудничество">
                Сотрудничество
            </AppLink>
        </nav>
    );
}
