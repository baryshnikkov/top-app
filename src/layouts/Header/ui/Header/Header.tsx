import cls from './Header.module.css';
import { cn } from '@/shared/lib/cn';
import Image from 'next/image';
import LogoIcon from '@/shared/assets/logos/logo.svg';
import { Navbar } from '@/widgets/Navbar';
import { HStack } from '@/shared/ui/Stack';
import { AppLink } from '@/shared/ui/AppLink';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router';

interface HeaderProps {
    className?: string;
}

export function Header(props: HeaderProps) {
    const { className } = props;
    const route = useRouter();

    const onClickLogo = () => {
        route.push('/');
    };

    return (
        <header className={cn(cls.Header, {}, [className])}>
            <HStack className={cls.headerWrapper} align="center" gap="32">
                <Image
                    className={cls.logo}
                    src={LogoIcon}
                    alt="Лого aromaTM"
                    onClick={onClickLogo}
                />
                <Navbar />
                <menu className={cls.menu}>
                    <AppLink href="/purchases" alt="Корзина">
                        <ShoppingCartIcon />
                    </AppLink>
                    <AppLink href="/login" variant="outline" alt="Войти">
                        Войти
                    </AppLink>
                </menu>
            </HStack>
        </header>
    );
}
