import { useMediaQuery, useTheme } from '@mui/material';

export const getIsGreaterThanMediumBreakpoint = () => {
    const theme = useTheme();

    return useMediaQuery(theme.breakpoints.up('md'));
};
