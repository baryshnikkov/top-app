import { cn } from '@/shared/helpers/classNames';
import cls from './Loader.module.css';

interface LoaderProps {
	className?: string;
	isCenter?: boolean;
}

export const Loader = (props: LoaderProps): JSX.Element => {
	const { className, isCenter = true } = props;

	return (
		<div className={cn(cls.ldsRoller, { [cls.center]: isCenter }, [className])}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
