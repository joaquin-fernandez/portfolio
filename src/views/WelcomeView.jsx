import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { getIsGreaterThanMediumBreakpoint } from '../helpers/getIsGreaterThanMediumBreakpoint';
import { useTranslation } from 'react-i18next';
import { getResumeLink } from '../data/aboutMe';

export const WelcomeView = () => {
    const isGreaterThanMediumBreakpoint = getIsGreaterThanMediumBreakpoint();
    const { t } = useTranslation();

    return (
        <Grid
            container
            sx={{
                height: `calc(100vh)`,
                width: '100%',
                zIndex: 1,
            }}
            alignItems='center'
            justifyContent='center'
            className='animate__animated animate__fadeIn'
        >
            <Grid container size={12} direction='column' alignItems='center'>
                <Typography
                    variant={isGreaterThanMediumBreakpoint ? 'h4' : 'h6'}
                    className='animate__animated animate__fadeIn animate__delay-0.5s'
                >
                    {t('welcomeMessage')}
                </Typography>
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    className='animate__animated animate__fadeInUp animate__delay-1s'
                >
                    <Typography
                        variant='h1'
                        className='name'
                        textAlign='center'
                        maxWidth='80%'
                    >
                        {t('name')}
                    </Typography>
                </Grid>

                <Typography
                    variant={isGreaterThanMediumBreakpoint ? 'h4' : 'h6'}
                    className='anim-typewriter line-1 animate__delay-2s'
                    sx={{ mt: '50px' }}
                >
                    {t('description')}
                </Typography>
                <Grid
                    sx={{ mt: '10px' }}
                    container
                    direction='row'
                    spacing={2}
                    className='animate__animated animate__fadeIn animate__delay-2s'
                >
                    <IconButton href='#contact'>
                        <AlternateEmailIcon
                            sx={{ width: '36px', height: '36px' }}
                        />
                    </IconButton>
                    <IconButton
                        href='https://www.linkedin.com/in/joaquin-fernandez-dev/'
                        target='_blank'
                    >
                        <LinkedInIcon sx={{ width: '36px', height: '36px' }} />
                    </IconButton>
                    <IconButton
                        href='https://github.com/joaquin-fernandez'
                        target='_blank'
                    >
                        <GitHubIcon sx={{ width: '36px', height: '36px' }} />
                    </IconButton>
                    <Tooltip title={t('tooltipResume')} placement='right' arrow>
                        <IconButton href={getResumeLink()} target='_blank'>
                            <FileDownloadIcon
                                sx={{ width: '36px', height: '36px' }}
                            />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </Grid>
    );
};
