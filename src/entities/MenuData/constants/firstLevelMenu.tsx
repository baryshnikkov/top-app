import CoursesIcon from '@/shared/assets/icons/courses.svg';
import ServicesIcon from '@/shared/assets/icons/services.svg';
import BooksIcon from '@/shared/assets/icons/books.svg';
import ProductsIcon from '@/shared/assets/icons/products.svg';
import { TopLevelCategory } from '@/shared/constants/levelCategory';
import { FirstLevelMenuItem } from '../model/types/mainMenu';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', id: TopLevelCategory.Courses, icon: <CoursesIcon /> },
	{ route: 'services', name: 'Сервисы', id: TopLevelCategory.Services, icon: <ServicesIcon /> },
	{ route: 'books', name: 'Книги', id: TopLevelCategory.Books, icon: <BooksIcon /> },
	{ route: 'products', name: 'Товары', id: TopLevelCategory.Products, icon: <ProductsIcon /> },
];
