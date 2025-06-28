import { Grid, Typography } from '@mui/material';
import { getIsGreaterThanMediumBreakpoint } from '../../helpers/getIsGreaterThanMediumBreakpoint';

export const SectionTitle = ({ title }) => {
    const isGreaterThanMediumBreakpoint = getIsGreaterThanMediumBreakpoint();

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
                variant={isGreaterThanMediumBreakpoint ? 'h3' : 'h5'}
                sx={{
                    fontWeight: 900,
                }}
                className='decoration'
            >
                {'{'}
            </Typography>
            <Typography
                variant={isGreaterThanMediumBreakpoint ? 'h3' : 'h5'}
                sx={{
                    fontWeight: 700,
                }}
            >
                {title}
            </Typography>
            <Typography
                variant={isGreaterThanMediumBreakpoint ? 'h3' : 'h5'}
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
