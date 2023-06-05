import { cn } from '@/shared/lib/cn';
import { List } from '@mui/material';
import { MenuMobile } from '@/widgets/Menu';

interface MobileProps {
    className?: string;
}

export function Mobile(props: MobileProps) {
    const { className } = props;

    return (
        <List
            className={cn('', {}, [className])}
            sx={{
                display: { xs: 'flex', sm: 'none' },
                alignItems: 'center',
                justifyContent: 'end',
                width: '100%',
            }}
        >
            <MenuMobile />
        </List>
    );
}
