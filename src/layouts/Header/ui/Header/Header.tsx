import cls from './Header.module.css';
import { cn } from '@/shared/lib/cn';
import Image from 'next/image';
import LogoIcon from '@/shared/assets/logos/logo.svg';
import { HStack } from '@/shared/ui/Stack';
import { useRouter } from 'next/router';
import { Desktop } from '../Desktop/Desktop';
import { Mobile } from '../Mobile/Mobile';
import { getRouteMain } from '@/shared/consts/router';

interface HeaderProps {
    className?: string;
}

export function Header(props: HeaderProps) {
    const { className } = props;
    const route = useRouter();

    const onClickLogo = () => {
        route.push(getRouteMain());
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
                <Desktop />
                <Mobile />
            </HStack>
        </header>
    );
}
