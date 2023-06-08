import cls from './Advantages.module.css';
import { cn } from '@/shared/lib/cn';
import { List, Typography } from '@mui/material';

interface AdvantagesProps {
    className?: string;
}

export function Advantages(props: AdvantagesProps) {
    const { className } = props;

    return (
        <>
            <List
                className={cn(cls.Advantages, {}, [className])}
                sx={{
                    display: { xs: 'none', md: 'grid' },
                    marginTop: '24px',
                    width: '100%',
                }}
            >
                <div className={cls.violet}>
                    <Typography variant="h6">Получите профессию</Typography>
                    <Typography color="#6b7094">
                        Пройдя обучение вы получите востребованную профессию и
                        высокое качество преподаваемых знаний
                    </Typography>
                </div>
                <div className={cls.green}>
                    <Typography variant="h6">Сертификат бетонщика</Typography>
                    <Typography color="#6b7094">
                        После прохождения обучения мы выдаем сертификат
                        подтверждающий ваши профессиональные навыки бетонщика
                    </Typography>
                </div>
                <div className={cls.orange}>
                    <Typography variant="h6">
                        Закрытый клуб нумерологов
                    </Typography>
                    <Typography color="#6b7094">
                        Все ученики прошедшие основной курс нумерологии получают
                        доступ в закрытый клуб нумерологов
                    </Typography>
                </div>
            </List>
            <List
                className={cn('', {}, [className])}
                sx={{
                    display: { sm: 'flex', md: 'none', xs: 'flex' },
                    flexDirection: 'column',
                    gap: '12px',
                    marginTop: '24px',
                    width: '100%',
                }}
            >
                <div className={cls.violet}>
                    <Typography variant="h6">Получите профессию</Typography>
                    <Typography color="#6b7094">
                        Пройдя обучение вы получите востребованную профессию и
                        высокое качество преподаваемых знаний
                    </Typography>
                </div>
                <div className={cls.green}>
                    <Typography variant="h6">Сертификат бетонщика</Typography>
                    <Typography color="#6b7094">
                        После прохождения обучения мы выдаем сертификат
                        подтверждающий ваши профессиональные навыки бетонщика
                    </Typography>
                </div>
                <div className={cls.orange}>
                    <Typography variant="h6">
                        Закрытый клуб нумерологов
                    </Typography>
                    <Typography color="#6b7094">
                        Все ученики прошедшие основной курс нумерологии получают
                        доступ в закрытый клуб нумерологов
                    </Typography>
                </div>
            </List>
        </>
    );
}
