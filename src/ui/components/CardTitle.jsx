import { Grid, Typography } from '@mui/material';

export const CardTitle = ({ text }) => {
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
                variant='h6'
                sx={{
                    fontWeight: 900,
                }}
                className='decoration'
            >
                {'[ '}
            </Typography>
            <Typography
                variant='h6'
                sx={{
                    fontWeight: 500,
                }}
            >
                {text}
            </Typography>
            <Typography
                variant='h6'
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
