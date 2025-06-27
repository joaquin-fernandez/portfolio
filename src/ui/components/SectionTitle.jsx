import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

export const SectionTitle = ({ title }) => {
    const theme = useTheme();

    const isGreaterThanMediumBreakpoint = useMediaQuery(
        theme.breakpoints.up('md')
    );

    return (
        <Grid
            container
            direction='row'
            alignItems='center'
            alignContent='center'
            justifyContent='center'
            spacing={1}
        >
            <Typography
                variant={isGreaterThanMediumBreakpoint ? 'h3' : 'h4'}
                sx={{
                    fontWeight: 900,
                }}
                className='decoration'
            >
                {'{'}
            </Typography>
            <Typography
                variant={isGreaterThanMediumBreakpoint ? 'h3' : 'h4'}
                sx={{
                    fontWeight: 700,
                }}
            >
                {title}
            </Typography>
            <Typography
                variant={isGreaterThanMediumBreakpoint ? 'h3' : 'h4'}
                sx={{
                    fontWeight: 900,
                }}
                className='decoration'
            >
                {'}'}
            </Typography>
        </Grid>
    );
};
