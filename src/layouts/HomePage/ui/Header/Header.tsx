import cls from './Header.module.css';
import { cn } from '@/shared/lib/cn';
import { Text } from '@/shared/ui/Text';
import { Button, List } from '@mui/material';
import { VStack } from '@/shared/ui/Stack';

interface HeaderProps {
    className?: string;
}

export function Header(props: HeaderProps) {
    const { className } = props;

    return (
        <>
            <List
                className={cn(cls.header, {}, [className])}
                sx={{
                    display: { xs: 'none', md: 'grid' },
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <VStack gap="24" justify="center">
                    <Text
                        title="ШКОЛА ОБУЧЕНИЯ СВЕЧЕВАРЕНИЮ"
                        size="l"
                        nSize={52}
                        bold
                    />
                    <Text
                        title="мы не экономим на вашем комфорте"
                        nSize={20}
                        variant="accent"
                    />
                    <Button size="large" variant="contained">
                        Курсы свечеварения
                    </Button>
                </VStack>
                <video className={cls.video} autoPlay muted>
                    <source src="/video/home.mp4" type="video/mp4" />
                </video>
            </List>
            <List
                className={cn(cls.header, {}, [className])}
                sx={{
                    display: { sm: 'flex', md: 'none', xs: 'none' },
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <VStack gap="24" justify="center" align="center">
                    <Text
                        title="ШКОЛА ОБУЧЕНИЯ СВЕЧЕВАРЕНИЮ"
                        size="l"
                        nSize={52}
                        bold
                        align="center"
                    />
                    <Text
                        title="мы не экономим на вашем комфорте"
                        nSize={20}
                        variant="accent"
                    />
                    <Button size="large" variant="contained">
                        Курсы свечеварения
                    </Button>
                </VStack>
                <video className={cls.videoSmall} autoPlay muted>
                    <source src="/video/home.mp4" type="video/mp4" />
                </video>
            </List>
            <List
                className={cn(cls.header, {}, [className])}
                sx={{
                    display: { sm: 'none', xs: 'flex' },
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <VStack gap="16" justify="center" align="center">
                    <Text
                        title="ШКОЛА ОБУЧЕНИЯ СВЕЧЕВАРЕНИЮ"
                        size="l"
                        nSize={28}
                        bold
                        align="center"
                    />
                    <Text
                        title="мы не экономим на вашем комфорте"
                        nSize={18}
                        variant="accent"
                        align="center"
                    />
                    <Button size="large" variant="contained">
                        Курсы свечеварения
                    </Button>
                </VStack>
                <video className={cls.videoSmall} autoPlay muted>
                    <source src="/video/home.mp4" type="video/mp4" />
                </video>
            </List>
        </>
    );
}
