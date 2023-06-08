import { Button, List, Typography } from '@mui/material';
import { cn } from '@/shared/lib/cn';
import cls from './Products.module.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { AppLink } from '@/shared/ui/AppLink';
import {
    getRouteCalculator,
    getRouteCatalog,
    getRouteConsultations,
    getRouteCourses,
} from '@/shared/consts/router';
import CalculateIcon from '@mui/icons-material/Calculate';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useRouter } from 'next/router';

interface ProductsProps {
    className?: string;
}

export function Products(props: ProductsProps) {
    const { className } = props;
    const route = useRouter();

    const onClickCourses = () => {
        route.push(getRouteCourses());
    };

    const onClickCalculator = () => {
        route.push(getRouteCalculator());
    };

    const onClickConsultations = () => {
        route.push(getRouteConsultations());
    };

    const onClickOther = () => {
        route.push(getRouteCatalog());
    };

    return (
        <>
            <List
                className={cn(cls.Products, {}, [className])}
                sx={{
                    display: { xs: 'none', md: 'grid' },
                    width: '100%',
                }}
            >
                <Typography variant="h4">Наши продукты</Typography>
                <Typography className={cls.paragraph} color="#6b7094">
                    Обучение в нашей школе построено на современных
                    нумерологических методах
                </Typography>
                <div className={cls.wrapper}>
                    <div className={cls.courses} onClick={onClickCourses}>
                        <PlayArrowIcon className={cls.playIcon} />
                        <AppLink
                            className={cls.link}
                            href={getRouteCourses()}
                            alt="Каталог курсов"
                        >
                            Каталог курсов
                        </AppLink>
                        <Typography className={cls.paragraph} color="#6b7094">
                            В нашей школе широкий выбор обучающих программ
                            нумерологии по различным системам
                        </Typography>
                        <Button
                            className={cls.btn}
                            onClick={onClickCourses}
                            variant="contained"
                        >
                            Посмотреть курсы
                        </Button>
                    </div>
                    <div className={cls.calculator} onClick={onClickCalculator}>
                        <CalculateIcon className={cls.calculatorIcon} />
                        <AppLink
                            className={cls.link}
                            href={getRouteCalculator()}
                            alt="Каталог курсов"
                        >
                            Калькуляторы
                        </AppLink>
                        <Typography className={cls.paragraph} color="#6b7094">
                            Рассчитайте свою дату рождения в калькуляторах по
                            нумерологии
                        </Typography>
                        <Button
                            className={cls.btn}
                            onClick={onClickCalculator}
                            variant="contained"
                        >
                            Посмотреть калькуляторы
                        </Button>
                    </div>
                    <div
                        className={cls.consultations}
                        onClick={onClickConsultations}
                    >
                        <SignLanguageIcon className={cls.consultationsIcon} />
                        <AppLink
                            className={cls.link}
                            href={getRouteConsultations()}
                            alt="Каталог курсов"
                        >
                            Консультации
                        </AppLink>
                        <Typography className={cls.paragraph} color="#6b7094">
                            Консультация нумеролога с детальным разбором вашей
                            даты рождения
                        </Typography>
                        <Button
                            className={cls.btn}
                            onClick={onClickConsultations}
                            variant="contained"
                        >
                            Перейти на страницу
                        </Button>
                    </div>
                    <div className={cls.other} onClick={onClickOther}>
                        <LibraryBooksIcon className={cls.otherIcon} />
                        <AppLink
                            className={cls.link}
                            href={getRouteCatalog()}
                            alt="Каталог курсов"
                        >
                            Каталог ингредиентов
                        </AppLink>
                        <Typography className={cls.paragraph} color="#6b7094">
                            Содержат информацию, которой нет в курсах и
                            мастер-классах
                        </Typography>
                        <Button
                            className={cls.btn}
                            onClick={onClickOther}
                            variant="contained"
                        >
                            Перейти на страницу
                        </Button>
                    </div>
                </div>
            </List>
            <List
                className={cn('', {}, [className])}
                sx={{
                    display: { sm: 'flex', md: 'none', xs: 'flex' },
                    flexDirection: 'column',
                    gap: '8px',
                    marginTop: '54px',
                    width: '100%',
                }}
            >
                <Typography variant="h4">Наши продукты</Typography>
                <Typography className={cls.paragraph} color="#6b7094">
                    Обучение в нашей школе построено на современных
                    нумерологических методах
                </Typography>
                <div className={cls.wrapperSM}>
                    <div className={cls.courses} onClick={onClickCourses}>
                        <PlayArrowIcon className={cls.playIcon} />
                        <AppLink
                            className={cls.link}
                            href={getRouteCourses()}
                            alt="Каталог курсов"
                        >
                            Каталог курсов
                        </AppLink>
                        <Typography className={cls.paragraph} color="#6b7094">
                            В нашей школе широкий выбор обучающих программ
                            нумерологии по различным системам
                        </Typography>
                        <Button
                            className={cls.btn}
                            onClick={onClickCourses}
                            variant="contained"
                        >
                            Посмотреть курсы
                        </Button>
                    </div>
                    <div className={cls.calculator} onClick={onClickCalculator}>
                        <CalculateIcon className={cls.calculatorIcon} />
                        <AppLink
                            className={cls.link}
                            href={getRouteCalculator()}
                            alt="Каталог курсов"
                        >
                            Калькуляторы
                        </AppLink>
                        <Typography className={cls.paragraph} color="#6b7094">
                            Рассчитайте свою дату рождения в калькуляторах по
                            нумерологии
                        </Typography>
                        <Button
                            className={cls.btn}
                            onClick={onClickCalculator}
                            variant="contained"
                        >
                            Посмотреть калькуляторы
                        </Button>
                    </div>
                    <div
                        className={cls.consultations}
                        onClick={onClickConsultations}
                    >
                        <SignLanguageIcon className={cls.consultationsIcon} />
                        <AppLink
                            className={cls.link}
                            href={getRouteConsultations()}
                            alt="Каталог курсов"
                        >
                            Консультации
                        </AppLink>
                        <Typography className={cls.paragraph} color="#6b7094">
                            Консультация нумеролога с детальным разбором вашей
                            даты рождения
                        </Typography>
                        <Button
                            className={cls.btn}
                            onClick={onClickConsultations}
                            variant="contained"
                        >
                            Перейти на страницу
                        </Button>
                    </div>
                    <div className={cls.other} onClick={onClickOther}>
                        <LibraryBooksIcon className={cls.otherIcon} />
                        <AppLink
                            className={cls.link}
                            href={getRouteCatalog()}
                            alt="Каталог курсов"
                        >
                            Каталог ингредиентов
                        </AppLink>
                        <Typography className={cls.paragraph} color="#6b7094">
                            Содержат информацию, которой нет в курсах и
                            мастер-классах
                        </Typography>
                        <Button
                            className={cls.btn}
                            onClick={onClickOther}
                            variant="contained"
                        >
                            Перейти на страницу
                        </Button>
                    </div>
                </div>
            </List>
        </>
    );
}
