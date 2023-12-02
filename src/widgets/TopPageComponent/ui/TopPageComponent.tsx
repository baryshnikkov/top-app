import { TopPageModel } from '@/entities/PageData';
import { ProductModel } from '@/entities/ProductData';
import { cn } from '@/shared/helpers/classNames';
import cls from './TopPageComponent.module.css';

interface TopPageComponentProps {
	className?: string;
	page: TopPageModel;
	products: ProductModel[];
}

export const TopPageComponent = (props: TopPageComponentProps): JSX.Element => {
	const { className, page, products } = props;

	return <div className={cn(cls.topPageComponent, {}, [className])}>{products.length}</div>;
};
