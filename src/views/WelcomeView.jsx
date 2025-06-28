import { Grid, IconButton, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { getIsGreaterThanMediumBreakpoint } from '../helpers/getIsGreaterThanMediumBreakpoint';

export const WelcomeView = () => {
    const isGreaterThanMediumBreakpoint = getIsGreaterThanMediumBreakpoint();
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
                    Hola 👋🏼, soy
                </Typography>
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    className='animate__animated animate__fadeInUp animate__delay-1s'
                >
                    <Typography className='name'>Joaquín</Typography>
                    <Typography className='name'>Fernández</Typography>
                </Grid>

                <Typography
                    variant={isGreaterThanMediumBreakpoint ? 'h4' : 'h6'}
                    className='anim-typewriter line-1 animate__delay-2s'
                    sx={{ mt: '50px' }}
                >
                    Software Developer.
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
                        href='https://www.linkedin.com/in/joaquin-fernandez-a32570131/'
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
                    <IconButton
                        href='https://drive.google.com/file/d/1jlVw7xzPPuUhtXQbb9GI4rFeq4Vsa7zK/view?usp=sharing'
                        target='_blank'
                    >
                        <FileDownloadIcon
                            sx={{ width: '36px', height: '36px' }}
                        />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
};
