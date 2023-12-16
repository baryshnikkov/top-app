'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { cn } from '@/shared/helpers/classNames';
import { Input } from '@/shared/ui/Input';
import { Rating } from '@/shared/ui/Rating';
import { Textarea } from '@/shared/ui/Textarea';
import { Button } from '@/shared/ui/Button';
import CloseIcon from '@/shared/assets/icons/close.svg';
import { ReviewFormData } from '../model/review';
import { setReview } from '../api/setReview';
import cls from './ReviewForm.module.css';

interface ReviewFormProps {
	className?: string;
	productId: string;
	isOpened: boolean;
}

export const ReviewForm = (props: ReviewFormProps): JSX.Element => {
	const { className, productId, isOpened } = props;
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ReviewFormData>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const throwError = () => {
		setError('Что-то пошло не так, попробуйте обновить страницу и отправить еще раз');
	};

	const onCloseSuccess = () => {
		setIsSuccess(false);
	};

	const onCloseError = () => {
		setError(null);
	};

	const onSubmit = async (data: ReviewFormData) => {
		try {
			const { error } = await setReview(data, productId);

			if (error) {
				throwError();
			} else {
				setIsSuccess(true);
				reset();
			}
		} catch (e: any) {
			throwError();
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(cls.reviewForm, {}, [className])}>
				<Input
					placeholder='Имя'
					error={errors.name}
					{...register('name', { required: { value: true, message: 'Заполните имя' } })}
					tabIndex={isOpened ? 0 : -1}
				/>
				<Input
					className={cls.title}
					placeholder='Заголовок отзыва'
					error={errors.title}
					{...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
					tabIndex={isOpened ? 0 : -1}
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
								tabIndex={isOpened ? 0 : -1}
							/>
						)}
					/>
				</div>
				<Textarea
					className={cls.description}
					placeholder='Текст отзыва'
					error={errors.description}
					{...register('description', { required: { value: true, message: 'Заполните описание' } })}
					tabIndex={isOpened ? 0 : -1}
				/>
				<div className={cls.submit}>
					<Button variant='primary' tabIndex={isOpened ? 0 : -1}>
						Отправить
					</Button>
					<span className={cls.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и проверку
					</span>
				</div>
			</div>
			{isSuccess && (
				<div className={cn(cls.success, {}, [cls.panel])}>
					<div className={cls.successTitle}>Ваш отзыв отправлен</div>
					<div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
					<CloseIcon className={cls.close} onClick={onCloseSuccess} />
				</div>
			)}
			{error && (
				<div className={cn(cls.error, {}, [cls.panel])}>
					{error}
					<CloseIcon className={cls.close} onClick={onCloseError} />
				</div>
			)}
		</form>
	);
};
