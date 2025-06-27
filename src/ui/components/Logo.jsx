import { Grid, Typography } from '@mui/material';

export const Logo = ({ variant, sx }) => {
    return (
        <Grid container sx={sx} size={12} alignItems='center' className='logo'>
            <Typography
                sx={{
                    color: 'primary.main',
                    fontWeight: 900,
                    fontSize: '34px',
                    lineHeight: '1 !important',
                }}
                className=''
            >
                {'{'}&nbsp;
            </Typography>
            <Typography
                variant={variant}
                sx={{
                    color: 'primary.main',
                    fontWeight: 900,
                }}
                className=''
            >
                {'joaa.dev:'}
            </Typography>
            <Typography
                variant={variant}
                className='blink'
                sx={{
                    color: 'primary.main',
                }}
            >
                &nbsp;{'|'}
            </Typography>
            <Typography
                sx={{
                    color: 'primary.main',
                    fontWeight: 900,
                    fontSize: '34px',
                    lineHeight: '1 !important',
                }}
                className=''
            >
                &nbsp;{'}'}
            </Typography>
        </Grid>
    );
};
