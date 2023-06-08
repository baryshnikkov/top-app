import { List, Typography } from '@mui/material';
import { cn } from '@/shared/lib/cn';
import cls from './School.module.css';
import { Text } from '@/shared/ui/Text';
import Image from 'next/image';

interface SchoolProps {
    className?: string;
}

export function School(props: SchoolProps) {
    const { className } = props;

    return (
        <>
            <List
                className={cn('', {}, [className])}
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    width: '100%',
                    gap: '74px',
                    marginTop: '84px',
                    alignItems: 'center',
                }}
            >
                <div className={cls.text}>
                    <Text
                        title="КУРСЫ НУМЕРОЛОГИИ ДЛЯ НАЧИНАЮЩИХ"
                        nSize={20}
                        variant="accent"
                    />
                    <Typography variant="h4">
                        Школа нумерологии Numeria — это простой и надежный путь
                        в обучении нумерологии, ведь от выбора школы зависит
                        качество получаемых знаний
                    </Typography>
                    <Typography color="#6b7094">
                        Если в школе математика была нелюбимым предметом - это
                        не приговор. С нуля обучиться нумерологии может
                        абсолютно любой. Наши онлайн-курсы окажут существенную
                        помощь, и уже по прошествии пары недель, вы начнете
                        понимать, о чем говорят цифры.
                    </Typography>
                    <Typography color="#6b7094">
                        Загадочная наука нумерология: и развлечение, и польза, и
                        заработок. Освоить нумерологию легко, достаточно лишь
                        записаться на базовый курс нумерологии по интересующей
                        системе, и в комфортном режиме получать информацию. Вы
                        быстро убедитесь, что наука о цифрах доступна всем, и не
                        надо тратить годы для ее освоения!
                    </Typography>
                </div>
                <Image
                    className={cls.img}
                    src="/images/school.webp"
                    width={385}
                    height={526}
                    alt={'Candle'}
                />
            </List>
            <List
                className={cn('', {}, [className])}
                sx={{
                    display: { sm: 'flex', md: 'none', xs: 'flex' },
                    flexDirection: 'column',
                    gap: '24px',
                    marginTop: '64px',
                    width: '100%',
                }}
            >
                <Text
                    title="КУРСЫ НУМЕРОЛОГИИ ДЛЯ НАЧИНАЮЩИХ"
                    nSize={20}
                    variant="accent"
                />
                <Typography variant="h5">
                    Школа нумерологии Numeria — это простой и надежный путь в
                    обучении нумерологии, ведь от выбора школы зависит качество
                    получаемых знаний
                </Typography>
                <Typography color="#6b7094">
                    Если в школе математика была нелюбимым предметом - это не
                    приговор. С нуля обучиться нумерологии может абсолютно
                    любой. Наши онлайн-курсы окажут существенную помощь, и уже
                    по прошествии пары недель, вы начнете понимать, о чем
                    говорят цифры.
                </Typography>
                <Typography color="#6b7094">
                    Загадочная наука нумерология: и развлечение, и польза, и
                    заработок. Освоить нумерологию легко, достаточно лишь
                    записаться на базовый курс нумерологии по интересующей
                    системе, и в комфортном режиме получать информацию. Вы
                    быстро убедитесь, что наука о цифрах доступна всем, и не
                    надо тратить годы для ее освоения!
                </Typography>
            </List>
        </>
    );
}
