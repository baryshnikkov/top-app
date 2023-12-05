import { TopPageAdvantage } from '@/entities/PageData';
import { cn } from '@/shared/helpers/classNames';
import CheckIcon from '@/shared/assets/icons/check.svg';
import { Title } from '@/shared/ui/Title';
import { Text } from '@/shared/ui/Text';
import cls from './Advantages.module.css';

interface AdvantagesProps {
	className?: string;
	advantages: TopPageAdvantage[];
}

export const Advantages = (props: AdvantagesProps): JSX.Element => {
	const { className, advantages } = props;

	return (
		<>
			{advantages.map((a) => (
				<div key={a._id} className={cn(cls.advantage, {}, [className])}>
					<CheckIcon />
					<Title className={cls.title} variant='h3'>
						{a.title}
					</Title>
					<hr className={cls.line} />
					<Text size='large'>{a.description}</Text>
				</div>
			))}
		</>
	);
};
