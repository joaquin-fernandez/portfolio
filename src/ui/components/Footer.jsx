import { Box, Typography, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <Box
            sx={{
                py: 4,
                px: 2,
                textAlign: 'center',
                opacity: 0.8,
            }}
        >
            <Typography variant='body2' sx={{ mb: 1 }}>
                © 2025 Joaquín Fernández
            </Typography>

            <Stack
                direction='row'
                spacing={2}
                justifyContent='center'
                sx={{ mb: 2 }}
            >
                <IconButton
                    href='https://github.com/joaquin-fernandez'
                    target='_blank'
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    href='https://linkedin.com/in/joaquin-fernandez-dev'
                    target='_blank'
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    href='mailto:joaquin.fernandez.dev@gmail.com'
                    aria-label='Email'
                >
                    <EmailIcon />
                </IconButton>
            </Stack>

            <Typography
                variant='caption'
                sx={{ fontStyle: 'italic', fontSize: '0.85rem' }}
            >
                {t('footerText')}
            </Typography>
        </Box>
    );
};
