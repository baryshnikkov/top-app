import cls from './Navbar.module.css';
import { cn } from '@/shared/lib/cn';
import { AppLink } from '@/shared/ui/AppLink';
import {
    getRouteCatalog,
    getRouteCollaboration,
    getRouteCourses,
} from '@/shared/consts/router';

interface NavbarProps {
    className?: string;
}

export function Navbar(props: NavbarProps) {
    const { className } = props;

    return (
        <nav className={cn(cls.Navbar, {}, [className])}>
            <AppLink href={getRouteCatalog()} active={true} alt="Каталог">
                Каталог
            </AppLink>
            <AppLink href={getRouteCourses()} active={true} alt="Курсы">
                Курсы
            </AppLink>
            <AppLink
                href={getRouteCollaboration()}
                active={true}
                alt="Сотрудничество"
            >
                Сотрудничество
            </AppLink>
        </nav>
    );
}
