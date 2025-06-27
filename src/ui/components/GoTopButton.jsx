import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from 'react';

export const GoTopButton = () => {
    const [showGoTop, setShowGoTop] = useState(false);

    const handleVisibleButton = () => {
        setShowGoTop(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton);
        return () => {
            window.removeEventListener('scroll', handleVisibleButton);
        };
    }, []);

    const onClickGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Fab
            color='primary'
            sx={{
                position: 'fixed',
                bottom: { xs: 25, md: 50 },
                right: { xs: 25, md: 50 },
                width: { xs: 40, md: 56 },
                height: { xs: 40, md: 56 },
            }}
            className={
                showGoTop
                    ? 'goUpButton animate__animated animate__bounceIn'
                    : 'display-none'
            }
            onClick={onClickGoToTop}
        >
            <ArrowUpwardIcon
                sx={{
                    margin: ' auto',
                }}
            />
        </Fab>
    );
};
