import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    List,
    Typography,
} from '@mui/material';
import { cn } from '@/shared/lib/cn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import cls from './Answers.module.css';
import { useState } from 'react';

interface AnswersProps {
    className?: string;
}

export function Answers(props: AnswersProps) {
    const { className } = props;
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <>
            <List
                className={cn('', {}, [className])}
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    width: '100%',
                    gap: '74px',
                    marginTop: '84px',
                }}
            >
                <div className={cls.question}>
                    <Typography variant="h4">
                        Ответы на часто задаваемые вопросы
                    </Typography>
                    <Typography color="#6b7094">
                        Также вы можете задать вопрос если не нашли ответ на
                        нашем сайте
                    </Typography>
                    <Button size="large" variant="contained">
                        Задать вопрос
                    </Button>
                </div>
                <div className={cls.accoridon}>
                    <Accordion
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ flexShrink: 0 }}>
                                О школе нумерологии Нумерия
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="#6b7094">
                                При создании онлайн-курсов и обучающих
                                материалов, мы опираемся на научный и духовный
                                подход. Нумерология будущего объединит между
                                собой именно эти два противоположных
                                направления.
                            </Typography>
                            <Typography color="#6b7094">
                                Научный подход нашей школы состоит в том, чтобы
                                выбирать только те методы, которые
                                подтверждаются практическим опытом и имеют в
                                своей основе концептуальные учения и системный
                                подход. Важно, чтобы расчеты, на которых
                                основывается метод, были достоверными.
                            </Typography>
                            <Typography color="#6b7094">
                                Духовный подход состоит в том, чтобы знания
                                имели нравственные основания, и человек мог
                                развиваться благодаря им, даже если он не
                                сделает нумерологию своей профессией, а также
                                давали понимание, как использовать свои знания в
                                повседневной жизни максимально выгодно и этично.
                                В концепции курсов по нумерологии есть такие
                                духовные дисциплины и традиции как тантра, йога,
                                буддизм, китайская философия и другое.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel2'}
                        onChange={handleChange('panel2')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ flexShrink: 0 }}>
                                Могу ли я купить курс в рассрочку?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="#6b7094">
                                Мы стараемся, чтобы наши платные онлайн-курсы по
                                нумерологии соответствовали соотношению
                                цена-качество. Для тех, кто не может оплатить
                                обучение нумерологии сразу, есть возможность
                                оформить беспроцентную рассрочку.
                            </Typography>
                            <Typography color="#6b7094">
                                Вы можете приобрести курс по нумерологии в
                                беспроцентную рассрочку от 10 банков, и у вас не
                                будет комиссий, все проценты банку за вас
                                оплачиваем мы. В банковском договоре этот
                                процент выступает в качестве скидки.
                            </Typography>
                            <Typography color="#6b7094">
                                Также у нас есть альтернатива рассрочки «Частями
                                от Продамус», где Вы можете разделить ваш заказ
                                на 4 равных платежа в течение 6 недель. Первая
                                часть 25% оплачивается банковской картой сразу в
                                момент оформления. Остальные три части будут
                                списываться с шагом в 2 недели.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel3'}
                        onChange={handleChange('panel3')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{ flexShrink: 0 }}>
                                Выдаются ли сертификаты после прохождения
                                обучения?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="#6b7094">
                                Да! После прохождения программы курса или
                                мастер-класса, вам потребуется сдать итоговое
                                практическое задание для получения сертификата,
                                подтверждающего ваши знания.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel4'}
                        onChange={handleChange('panel4')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ flexShrink: 0 }}>
                                Какие знания я получу на курсе?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="#6b7094">
                                В курсах по нумерологии мы используем только
                                современные знания, без использования отжившей и
                                неактуальной информации, которой пользовались
                                наши предки и которую до сих пор используют
                                некоторые школы нумерологии, что вызывает
                                ощущение мистификации в данной области.
                            </Typography>
                            <Typography color="#6b7094">
                                В курсах по нумерологии мы используем только
                                современные знания, без использования отжившей и
                                неактуальной информации, которой пользовались
                                наши предки и которую до сих пор используют
                                некоторые школы нумерологии, что вызывает
                                ощущение мистификации в данной области.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel5'}
                        onChange={handleChange('panel5')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ flexShrink: 0 }}>
                                Когда проходят занятия на курсах? Можно ли
                                совмещать с работой?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="#6b7094">
                                Все уроки в записи, и вы можете просматривать их
                                в удобное время, особенно это касается всех
                                мастер-классов. Но в основном курсе есть
                                моменты, которые зависят от выбранного тарифного
                                плана. Если это групповое обучение, то
                                желательно - не отставать от остальных, чтобы
                                получать качественную обратную связь. При
                                индивидуальном и самостоятельном тарифе, вы сами
                                выбираете комфортный для себя график.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
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
                <div className={cls.question}>
                    <Typography variant="h4">
                        Ответы на часто задаваемые вопросы
                    </Typography>
                    <Typography color="#6b7094">
                        Также вы можете задать вопрос если не нашли ответ на
                        нашем сайте
                    </Typography>
                    <Button size="large" variant="contained">
                        Задать вопрос
                    </Button>
                </div>
                <div className={cls.accoridonSM}>
                    <Accordion
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography>О школе нумерологии Нумерия</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="#6b7094">
                                При создании онлайн-курсов и обучающих
                                материалов, мы опираемся на научный и духовный
                                подход. Нумерология будущего объединит между
                                собой именно эти два противоположных
                                направления.
                            </Typography>
                            <Typography color="#6b7094">
                                Научный подход нашей школы состоит в том, чтобы
                                выбирать только те методы, которые
                                подтверждаются практическим опытом и имеют в
                                своей основе концептуальные учения и системный
                                подход. Важно, чтобы расчеты, на которых
                                основывается метод, были достоверными.
                            </Typography>
                            <Typography color="#6b7094">
                                Духовный подход состоит в том, чтобы знания
                                имели нравственные основания, и человек мог
                                развиваться благодаря им, даже если он не
                                сделает нумерологию своей профессией, а также
                                давали понимание, как использовать свои знания в
                                повседневной жизни максимально выгодно и этично.
                                В концепции курсов по нумерологии есть такие
                                духовные дисциплины и традиции как тантра, йога,
                                буддизм, китайская философия и другое.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel2'}
                        onChange={handleChange('panel2')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography>
                                Могу ли я купить курс в рассрочку?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="#6b7094">
                                Мы стараемся, чтобы наши платные онлайн-курсы по
                                нумерологии соответствовали соотношению
                                цена-качество. Для тех, кто не может оплатить
                                обучение нумерологии сразу, есть возможность
                                оформить беспроцентную рассрочку.
                            </Typography>
                            <Typography color="#6b7094">
                                Вы можете приобрести курс по нумерологии в
                                беспроцентную рассрочку от 10 банков, и у вас не
                                будет комиссий, все проценты банку за вас
                                оплачиваем мы. В банковском договоре этот
                                процент выступает в качестве скидки.
                            </Typography>
                            <Typography color="#6b7094">
                                Также у нас есть альтернатива рассрочки «Частями
                                от Продамус», где Вы можете разделить ваш заказ
                                на 4 равных платежа в течение 6 недель. Первая
                                часть 25% оплачивается банковской картой сразу в
                                момент оформления. Остальные три части будут
                                списываться с шагом в 2 недели.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel3'}
                        onChange={handleChange('panel3')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography>
                                Выдаются ли сертификаты после прохождения
                                обучения?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="#6b7094">
                                Да! После прохождения программы курса или
                                мастер-класса, вам потребуется сдать итоговое
                                практическое задание для получения сертификата,
                                подтверждающего ваши знания.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel4'}
                        onChange={handleChange('panel4')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography>
                                Какие знания я получу на курсе?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="#6b7094">
                                В курсах по нумерологии мы используем только
                                современные знания, без использования отжившей и
                                неактуальной информации, которой пользовались
                                наши предки и которую до сих пор используют
                                некоторые школы нумерологии, что вызывает
                                ощущение мистификации в данной области.
                            </Typography>
                            <Typography color="#6b7094">
                                В курсах по нумерологии мы используем только
                                современные знания, без использования отжившей и
                                неактуальной информации, которой пользовались
                                наши предки и которую до сих пор используют
                                некоторые школы нумерологии, что вызывает
                                ощущение мистификации в данной области.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel5'}
                        onChange={handleChange('panel5')}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography>
                                Когда проходят занятия на курсах? Можно ли
                                совмещать с работой?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="#6b7094">
                                Все уроки в записи, и вы можете просматривать их
                                в удобное время, особенно это касается всех
                                мастер-классов. Но в основном курсе есть
                                моменты, которые зависят от выбранного тарифного
                                плана. Если это групповое обучение, то
                                желательно - не отставать от остальных, чтобы
                                получать качественную обратную связь. При
                                индивидуальном и самостоятельном тарифе, вы сами
                                выбираете комфортный для себя график.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </List>
        </>
    );
}
