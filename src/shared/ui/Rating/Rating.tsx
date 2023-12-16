'use client';
import { ForwardedRef, HTMLAttributes, KeyboardEvent, forwardRef, useEffect, useRef, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { cn } from '@/shared/helpers/classNames';
import StarIcon from '@/shared/assets/icons/star.svg';
import cls from './Rating.module.css';

interface RatingProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	isEditable?: boolean;
	rating: number;
	setRating?: (rating: number) => void;
	error?: FieldError;
}

export const Rating = forwardRef((props: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const { className, isEditable = false, rating, setRating, error, tabIndex } = props;
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
	const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

	useEffect(() => {
		constructRating(rating);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating, tabIndex]);

	const computeFocus = (r: number, i: number): number => {
		if (!isEditable) {
			return -1;
		}
		if (!rating && i == 0) {
			return tabIndex ?? 0;
		}
		if (r == i + 1) {
			return tabIndex ?? 0;
		}
		return -1;
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};

	const handleKey = (e: KeyboardEvent) => {
		if (!isEditable || !setRating) {
			return;
		}
		if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
			if (!rating) {
				setRating(1);
			} else {
				e.preventDefault();
				setRating(rating < 5 ? rating + 1 : 5);
			}
			ratingArrayRef.current[rating]?.focus();
		}
		if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
			e.preventDefault();
			setRating(rating > 1 ? rating - 1 : 1);
			ratingArrayRef.current[rating - 2]?.focus();
		}
	};

	const constructRating = (currentRating: number) => {
		const updateRating = ratingArray.map((star: JSX.Element, i: number) => {
			return (
				<span
					key={i}
					className={cn(
						cls.star,
						{
							[cls.filled]: i < currentRating,
							[cls.editable]: isEditable,
						},
						[]
					)}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i + 1)}
					tabIndex={computeFocus(rating, i)}
					onKeyDown={handleKey}
					ref={(r) => ratingArrayRef.current?.push(r)}
				>
					<StarIcon />
				</span>
			);
		});

		setRatingArray(updateRating);
	};

	return (
		<div className={cn(cls.ratingWrapper, { [cls.error]: Boolean(error) }, [className])} ref={ref}>
			{ratingArray.map((star: JSX.Element, i: number) => (
				<span key={i}>{star}</span>
			))}
			{error && <span className={cls.errorMessage}>{error.message}</span>}
		</div>
	);
});

Rating.displayName = 'Rating';
