import { HhData } from '@/entities/PageData';
import { cn } from '@/shared/helpers/classNames';
import RateIcon from '@/shared/assets/icons/rate.svg';
import { Card } from '@/shared/ui/Card';
import cls from './HhCard.module.css';
import { priceRu } from '@/shared/helpers/priceRu';

interface HhCardProps extends HhData {
	className?: string;
}

export const HhCard = (props: HhCardProps): JSX.Element => {
	const { className, count, juniorSalary, middleSalary, seniorSalary } = props;

	return (
		<div className={cn(cls.hhCard, {}, [className])}>
			<Card className={cls.count}>
				<div className={cls.title}>Всего вакансий</div>
				<div className={cls.countValue}>{count}</div>
			</Card>
			<Card className={cls.salary}>
				<div>
					<div className={cls.title}>Начальный</div>
					<div className={cls.salaryValue}>{priceRu(juniorSalary)}</div>
					<div className={cls.rate}>
						<RateIcon className={cls.filled} />
						<RateIcon />
						<RateIcon />
					</div>
				</div>
				<div>
					<div className={cls.title}>Средний</div>
					<div className={cls.salaryValue}>{priceRu(middleSalary)}</div>
					<div className={cls.rate}>
						<RateIcon className={cls.filled} />
						<RateIcon className={cls.filled} />
						<RateIcon />
					</div>
				</div>
				<div>
					<div className={cls.title}>Профессионал</div>
					<div className={cls.salaryValue}>{priceRu(seniorSalary)}</div>
					<div className={cls.rate}>
						<RateIcon className={cls.filled} />
						<RateIcon className={cls.filled} />
						<RateIcon className={cls.filled} />
					</div>
				</div>
			</Card>
		</div>
	);
};
