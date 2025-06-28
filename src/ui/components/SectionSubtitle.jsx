import { Grid, Typography } from '@mui/material';
import { getIsGreaterThanMediumBreakpoint } from '../../helpers/getIsGreaterThanMediumBreakpoint';

export const SectionSubtitle = ({ text, sx = {} }) => {
    const isGreaterThanMediumBreakpoint = getIsGreaterThanMediumBreakpoint();
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
                variant={isGreaterThanMediumBreakpoint ? 'h4' : 'h6'}
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
                variant={isGreaterThanMediumBreakpoint ? 'h4' : 'h6'}
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
