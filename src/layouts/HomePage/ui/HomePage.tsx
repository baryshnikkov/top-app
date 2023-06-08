import cls from './HomePage.module.css';
import { cn } from '@/shared/lib/cn';
import { Text } from '@/shared/ui/Text';
import { Button } from '@mui/material';

interface HomePagerProps {
    className?: string;
}

export function HomePage(props: HomePagerProps) {
    const { className } = props;

    return (
        <div className={cn(cls.header, {}, [className])}>
            <div>
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
                <Button variant="contained">Курсы свечеварения</Button>
            </div>
            <video className={cls.video} autoPlay muted>
                <source src="/video/home.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
