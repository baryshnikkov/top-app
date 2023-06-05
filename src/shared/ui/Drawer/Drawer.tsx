import cls from './Drawer.module.css';
import { cn } from '@/shared/lib/cn';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { KeyboardEvent, MouseEvent, ReactNode, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

interface DrawerProps {
    className?: string;
    children: ReactNode;
}

export function Drawer(props: DrawerProps) {
    const { className, children } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer =
        (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as KeyboardEvent).key === 'Tab' ||
                    (event as KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setIsOpen(open);
        };

    return (
        <>
            <Button
                className={cn(cls.menuBtn, {}, [className])}
                onClick={toggleDrawer(true)}
            >
                <MenuIcon style={{ color: 'var(--text)' }} />
            </Button>
            <SwipeableDrawer
                anchor={'bottom'}
                open={isOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Box
                    sx={{
                        width: 'auto',
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    {children}
                </Box>
            </SwipeableDrawer>
        </>
    );
}
