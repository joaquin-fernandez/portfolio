import { Grid, Typography } from '@mui/material';
import { getIsGreaterThanMediumBreakpoint } from '../../helpers/getIsGreaterThanMediumBreakpoint';

export const CardTitle = ({ text }) => {
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
                variant={isGreaterThanMediumBreakpoint ? 'h6' : 'subtitle1'}
                sx={{
                    fontWeight: 900,
                }}
                className='decoration'
            >
                {'[ '}
            </Typography>
            <Typography
                variant={isGreaterThanMediumBreakpoint ? 'h6' : 'subtitle1'}
                sx={{
                    fontWeight: 500,
                }}
            >
                {text}
            </Typography>
            <Typography
                variant={isGreaterThanMediumBreakpoint ? 'h6' : 'subtitle1'}
                sx={{
                    fontWeight: 900,
                }}
                className='decoration'
            >
                {' ]'}
            </Typography>
        </Grid>
    );
};
