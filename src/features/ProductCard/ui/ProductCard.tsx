'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ProductModel } from '@/entities/ProductData';
import { Review } from '@/entities/Review';
import { cn } from '@/shared/helpers/classNames';
import { priceRu } from '@/shared/helpers/priceRu';
import { Chip } from '@/shared/ui/Chip';
import { Card } from '@/shared/ui/Card';
import { Rating } from '@/shared/ui/Rating';
import { Button } from '@/shared/ui/Button';
import { Divider } from '@/shared/ui/Divider';
import { Text } from '@/shared/ui/Text';
import { declOfNum } from '@/shared/helpers/declOfNum';
import cls from './ProductCard.module.css';

interface ProductCardProps {
	className?: string;
	product: ProductModel;
}

export const ProductCard = (props: ProductCardProps): JSX.Element => {
	const { className, product } = props;
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

	const onReview = () => {
		setIsReviewOpened(!isReviewOpened);
	};

	return (
		<>
			<Card className={cn(cls.product, {}, [className])}>
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
					{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
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
			<Card
				color='blue'
				className={cn(
					cls.reviews,
					{
						[cls.opened]: isReviewOpened,
						[cls.closed]: !isReviewOpened,
					},
					[]
				)}
			>
				{product.reviews.length ? (
					product.reviews.map((r) => <Review key={r._id} review={r} />)
				) : (
					<Text size='medium'>Отзывов еще нет</Text>
				)}
			</Card>
		</>
	);
};
