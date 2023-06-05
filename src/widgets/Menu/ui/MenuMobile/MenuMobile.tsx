import cls from './MenuMobile.module.css';
import { cn } from '@/shared/lib/cn';
import Divider from '@mui/material/Divider';
import {
    getRouteCatalog,
    getRouteCollaboration,
    getRouteCourses,
    getRouteLogin,
    getRoutePurchases,
} from '@/shared/consts/router';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Drawer } from '@/shared/ui/Drawer';

interface MenuMobileProps {
    className?: string;
}

export function MenuMobile(props: MenuMobileProps) {
    const { className } = props;

    const content = (
        <>
            <VStack className={cls.links} gap="24">
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
            </VStack>
            <Divider />
            <VStack className={cls.links} gap="24">
                <AppLink href={getRouteLogin()} variant="outline" alt="Войти">
                    Войти
                </AppLink>
            </VStack>
        </>
    );

    return (
        <menu className={cn(cls.MenuMobile, {}, [className])}>
            <AppLink href={getRoutePurchases()} alt="Корзина">
                <ShoppingCartIcon />
            </AppLink>
            <Drawer>{content}</Drawer>
        </menu>
    );
}
