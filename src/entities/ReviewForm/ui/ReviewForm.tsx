'use client';

import { useForm, Controller } from 'react-hook-form';
import { cn } from '@/shared/helpers/classNames';
import { Input } from '@/shared/ui/Input';
import { Rating } from '@/shared/ui/Rating';
import { Textarea } from '@/shared/ui/Textarea';
import { Button } from '@/shared/ui/Button';
import CloseIcon from '@/shared/assets/icons/close.svg';
import cls from './ReviewForm.module.css';

interface ReviewFormData {
	name: string;
	title: string;
	description: string;
	rating: number;
}

interface ReviewFormProps {
	className?: string;
	productId: string;
}

export const ReviewForm = (props: ReviewFormProps): JSX.Element => {
	const { className, productId } = props;
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ReviewFormData>();

	const onSubmit = (data: ReviewFormData) => {
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(cls.reviewForm, {}, [className])}>
				<Input
					placeholder='Имя'
					error={errors.name}
					{...register('name', { required: { value: true, message: 'Заполните имя' } })}
				/>
				<Input
					className={cls.title}
					placeholder='Заголовок отзыва'
					error={errors.title}
					{...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
				/>
				<div className={cls.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
						render={({ field }) => (
							<Rating
								rating={field.value}
								setRating={field.onChange}
								ref={field.ref}
								isEditable
								error={errors.rating}
							/>
						)}
					/>
				</div>
				<Textarea
					className={cls.description}
					placeholder='Текст отзыва'
					error={errors.description}
					{...register('description', { required: { value: true, message: 'Заполните описание' } })}
				/>
				<div className={cls.submit}>
					<Button variant='primary'>Отправить</Button>
					<span className={cls.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и проверку
					</span>
				</div>
			</div>
			<div className={cls.success}>
				<div className={cls.successTitle}>Ваш отзыв отправлен</div>
				<div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
				<CloseIcon className={cls.close} />
			</div>
		</form>
	);
};
