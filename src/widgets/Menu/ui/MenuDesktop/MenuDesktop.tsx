import cls from './MenuDesktop.module.css';
import { cn } from '@/shared/lib/cn';
import { AppLink } from '@/shared/ui/AppLink';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { getRouteLogin, getRoutePurchases } from '@/shared/consts/router';

interface MenuDesktopProps {
    className?: string;
}

export function MenuDesktop(props: MenuDesktopProps) {
    const { className } = props;

    return (
        <menu className={cn(cls.MenuDesktop, {}, [className])}>
            <AppLink href={getRoutePurchases()} alt="Корзина">
                <ShoppingCartIcon />
            </AppLink>
            <AppLink href={getRouteLogin()} variant="outline" alt="Войти">
                Войти
            </AppLink>
        </menu>
    );
}
