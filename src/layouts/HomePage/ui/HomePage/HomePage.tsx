import { Header } from '../Header/Header';
import { Advantages } from '../Advantages/Advantages';
import { Products } from '../Products/Products';
import { Description } from '../Description/Description';
import { School } from '../School/School/School';
import { Answers } from '@/layouts/HomePage/ui/Answers/Answers';

export function HomePage() {
    return (
        <>
            <Header />
            <Advantages />
            <Products />
            <Description />
            <School />
            <Answers />
        </>
    );
}
