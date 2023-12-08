import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { cn } from '@/shared/helpers/classNames';
import { Rating } from '@/shared/ui/Rating';
import { ReviewModel } from '@/shared/types/review';
import UserIcon from '@/shared/assets/icons/user.svg';
import cls from './Review.module.css';

export interface ReviewProps {
	className?: string;
	review: ReviewModel;
}

export const Review = (props: ReviewProps): JSX.Element => {
	const { review, className } = props;
	const { name, title, description, createdAt, rating } = review;

	return (
		<div className={cn(cls.review, {}, [className])}>
			<UserIcon className={cls.user} />
			<div className={cls.title}>
				<span className={cls.name}>{name}:</span>&nbsp;&nbsp;
				<span>{title}</span>
			</div>
			<div className={cls.date}>{format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}</div>
			<div className={cls.rating}>
				<Rating rating={rating} />
			</div>
			<div className={cls.description}>{description}</div>
		</div>
	);
};
