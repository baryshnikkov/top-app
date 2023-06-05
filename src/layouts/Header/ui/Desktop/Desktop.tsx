import { cn } from '@/shared/lib/cn';
import { Navbar } from '@/widgets/Navbar';
import { List } from '@mui/material';
import { MenuDesktop } from '@/widgets/Menu';

interface DesktopProps {
    className?: string;
}

export function Desktop(props: DesktopProps) {
    const { className } = props;

    return (
        <List
            className={cn('', {}, [className])}
            sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                width: '100%',
            }}
        >
            <Navbar />
            <MenuDesktop />
        </List>
    );
}
