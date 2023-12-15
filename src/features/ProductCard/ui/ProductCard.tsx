'use client';

import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ProductModel } from '@/entities/ProductData';
import { ReviewForm } from '@/entities/ReviewForm';
import { Review } from '@/entities/Review';
import { cn } from '@/shared/helpers/classNames';
import { priceRu } from '@/shared/helpers/priceRu';
import { Chip } from '@/shared/ui/Chip';
import { Card } from '@/shared/ui/Card';
import { Rating } from '@/shared/ui/Rating';
import { Button } from '@/shared/ui/Button';
import { Divider } from '@/shared/ui/Divider';
import { declOfNum } from '@/shared/helpers/declOfNum';
import cls from './ProductCard.module.css';

interface ProductCardProps {
	className?: string;
	product: ProductModel;
}

export const ProductCard = motion(
	// eslint-disable-next-line react/display-name
	forwardRef((props: ProductCardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
		const { className, product } = props;
		const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
		const reviewRef = useRef<HTMLDivElement>(null);

		const variants = {
			visible: {
				opacity: 1,
				height: 'auto',
				overflow: 'visible',
				transition: {
					opacity: { duration: 0.5 },
					overflow: { duration: 0.001 },
					height: { duration: 0.5, delay: 0.001 },
				},
			},
			hidden: {
				opacity: 0,
				height: 0,
				overflow: 'hidden',
				transition: {
					opacity: { duration: 0.5 },
					overflow: { duration: 0.001, delay: 0.5 },
					height: { duration: 0.5 },
				},
			},
		};

		const scrollToReview = () => {
			setIsReviewOpened(true);
			setTimeout(() => {
				reviewRef.current?.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}, 0);
		};

		const onReview = () => {
			setIsReviewOpened(!isReviewOpened);
		};

		return (
			<div className={className} ref={ref}>
				<Card className={cls.product}>
					<div className={cls.logo}>
						<Image
							src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
							alt={product.title}
							width={70}
							height={70}
						/>
					</div>
					<div className={cls.title}>{product.title}</div>
					<div className={cls.price}>
						{priceRu(product.price)}
						{product.oldPrice && (
							<Chip className={cls.oldPrice} variant='green'>
								{priceRu(product.price - product.oldPrice)}
							</Chip>
						)}
					</div>
					<div className={cls.credit}>
						{priceRu(product.credit)}/<span className={cls.month}>мес</span>
					</div>
					<div className={cls.rating}>
						<Rating rating={product.reviewAvg ?? product.initialRating} />
					</div>
					<div className={cls.tags}>
						{product.categories.map((c) => (
							<Chip key={c} className={cls.category} variant='secondary'>
								{c}
							</Chip>
						))}
					</div>
					<div className={cls.priceTitle}>цена</div>
					<div className={cls.creditTitle}>кредит</div>
					<div className={cls.rateTitle}>
						<a href='#ref' onClick={scrollToReview}>
							{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
						</a>
					</div>
					<Divider className={cls.hr} />
					<div className={cls.description}>{product.description}</div>
					<div className={cls.feature}>
						{product.characteristics.map((c) => (
							<div className={cls.characteristics} key={c.name}>
								<span className={cls.characteristicsName}>{c.name}</span>
								<span className={cls.characteristicsDots}></span>
								<span className={cls.characteristicsValue}>{c.value}</span>
							</div>
						))}
					</div>
					<div className={cls.advBlock}>
						{product.advantages && (
							<div className={cls.advantages}>
								<div className={cls.advTitle}>Преимущества</div>
								<div>{product.advantages}</div>
							</div>
						)}
						{product.disadvantages && (
							<div className={cls.disadvantages}>
								<div className={cls.advTitle}>Недостатки</div>
								<div>{product.disadvantages}</div>
							</div>
						)}
					</div>
					<Divider className={cn(cls.hr, {}, [cls.hr2])} />
					<div className={cls.actions}>
						<Button variant='primary'>Узнать подробнее</Button>
						<Button
							variant='secondary'
							arrow={isReviewOpened ? 'down' : 'right'}
							className={cls.reviewButton}
							onClick={onReview}
						>
							Читать отзывы
						</Button>
					</div>
				</Card>
				<motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
					<Card color='blue' className={cls.reviews} ref={reviewRef}>
						{product.reviews.map((r) => (
							<div key={r._id}>
								<Review review={r} />
								<Divider />
							</div>
						))}
						<ReviewForm productId={product._id} />
					</Card>
				</motion.div>
			</div>
		);
	})
);

ProductCard.displayName = 'ProductCard';
