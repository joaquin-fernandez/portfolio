import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

export const SectionSubtitle = ({ text, sx = {} }) => {
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
            sx={sx}
        >
            <Typography
                variant={isGreaterThanMediumBreakpoint ? 'h4' : 'h5'}
                sx={{
                    mt: 2,
                    fontWeight: 700,
                    textDecoration: 'underline',
                    textUnderlineOffset: '6px',
                }}
            >
                {text}
            </Typography>
            <Typography
                variant={isGreaterThanMediumBreakpoint ? 'h4' : 'h5'}
                sx={{
                    mt: 2,
                    fontWeight: 900,
                }}
                className='decoration'
            >
                .
            </Typography>
        </Grid>
    );
};
