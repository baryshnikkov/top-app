import { CustomHead } from '@/shared/ui/CustomHead';
import { HomePage } from '@/layouts/HomePage';

export default function Home() {
    return (
        <>
            <CustomHead title="aromaTM" description="description" />
            <main>
                <HomePage />
            </main>
        </>
    );
}
