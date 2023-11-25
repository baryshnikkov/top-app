'use client';
import { HTMLAttributes, KeyboardEvent, memo, useEffect, useState } from 'react';
import { cn } from '@/shared/helpers/classNames';
import StarIcon from '@/shared/assets/icons/star.svg';
import cls from './Rating.module.css';

interface RatingProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	isEditable?: boolean;
	rating: number;
	setRating?: (rating: number) => void;
}

export const Rating = memo((props: RatingProps): JSX.Element => {
	const { className, isEditable = false, rating, setRating, ...otherProps } = props;
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updateRating = ratingArray.map((star: JSX.Element, i: number) => {
			return (
				<StarIcon
					key={i}
					className={cn(cls.star, { [cls.filled]: i < currentRating, [cls.pointer]: isEditable }, [])}
					onMouseEnter={onHoverRating(i + 1)}
					onMouseLeave={onHoverRating(rating)}
					onClick={onClickMouse(i + 1)}
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(event: KeyboardEvent<SVGElement>) => isEditable && onClickSpaceKey(i + 1, event)}
				/>
			);
		});

		setRatingArray(updateRating);
	};

	const onHoverRating = (hoverRating: number) => () => {
		if (isEditable) {
			constructRating(hoverRating);
		}
	};

	const onClickMouse = (newRating: number) => () => {
		if (isEditable && setRating) {
			setRating(newRating);
		}
	};

	const onClickSpaceKey = (newRating: number, event: KeyboardEvent<SVGElement>) => {
		if ((event.code === 'Space' || event.code === 'Enter') && setRating) {
			setRating(newRating);
		}
	};

	return (
		<div className={cn(cls.ratingWrapper, {}, [className])} {...otherProps}>
			{ratingArray.map((star: JSX.Element, i: number) => (
				<span key={i}>{star}</span>
			))}
		</div>
	);
});

Rating.displayName = 'Rating';
