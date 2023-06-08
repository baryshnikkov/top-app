import { List, Typography } from '@mui/material';
import { cn } from '@/shared/lib/cn';
import cls from './Description.module.css';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ComputerIcon from '@mui/icons-material/Computer';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';
import InsertChartIcon from '@mui/icons-material/InsertChart';

interface DescriptionProps {
    className?: string;
}

const cards = [
    {
        Icon: SchoolIcon,
        title: 'Акцент на качество',
        description:
            'В обучении мы делаем акцент на качество знаний и не даем поверхностную информацию, которую можно получить из открытых источников.',
    },
    {
        Icon: LocalLibraryIcon,
        title: 'Опытные преподаватели',
        description:
            'Преподаватели школы являются практикующими нумерологами, доказавшими свою профпригодность. Они передадут вам знания, и научат разбираться в людях.',
    },
    {
        Icon: ComputerIcon,
        title: 'Онлайн-формат',
        description:
            'Обучение нумерологии проходит в онлайн-формате, поэтому вам будет удобно смотреть видео-лекции в любое время из любой точки мира.',
    },
    {
        Icon: OndemandVideoIcon,
        title: 'Качественное видео и звук',
        description:
            'Качество подачи материала играет первостепенную роль. Вы ничего не пропустите, и вам не придется испытывать неудобств из-за размытой картинки, либо плохого звука.',
    },
    {
        Icon: SignLanguageIcon,
        title: 'Обратная связь',
        description:
            'На протяжении обучения поддерживается постоянная обратная связь с учениками. И даже по завершению обучения, вы всегда можете обратится за помощью.',
    },
    {
        Icon: InsertChartIcon,
        title: 'Прикладные знания',
        description:
            'Обучаясь у нас, вы получите фундаментальное понимание нумерологии, после чего сможете начать применять полученные знания для улучшения жизни.',
    },
];

export function Description(props: DescriptionProps) {
    const { className } = props;

    return (
        <>
            <Typography className={cls.title} variant="h4">
                Что вы получаете, обучаясь в нашей школе?
            </Typography>
            <Typography color="#6b7094">
                Узнайте, какие преимущества получают наши студенты
            </Typography>
            <List
                className={cn(cls.Description, {}, [className])}
                sx={{
                    display: { xs: 'none', md: 'grid' },
                    width: '100%',
                    marginTop: '24px',
                }}
            >
                {cards.map(({ Icon, title, description }) => (
                    <div className={cls.card} key={title}>
                        <Icon className={cls.icon} />
                        <div>
                            <Typography variant="h6">{title}</Typography>
                            <Typography color="#6b7094">
                                {description}
                            </Typography>
                        </div>
                    </div>
                ))}
            </List>
            <List
                className={cn('', {}, [className])}
                sx={{
                    display: { sm: 'flex', md: 'none', xs: 'flex' },
                    flexDirection: 'column',
                    gap: '8px',
                    marginTop: '24px',
                    width: '100%',
                }}
            >
                {cards.map(({ Icon, title, description }) => (
                    <div className={cls.card} key={title}>
                        <Icon className={cls.icon} />
                        <div>
                            <Typography variant="h6">{title}</Typography>
                            <Typography color="#6b7094">
                                {description}
                            </Typography>
                        </div>
                    </div>
                ))}
            </List>
        </>
    );
}
