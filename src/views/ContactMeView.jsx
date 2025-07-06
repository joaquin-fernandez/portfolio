import {
    Divider,
    Grid,
    IconButton,
    Snackbar,
    Tooltip,
    Typography,
} from '@mui/material';
import { ContactForm, SectionTitle } from '../ui';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';
import { getIsGreaterThanMediumBreakpoint } from '../helpers/getIsGreaterThanMediumBreakpoint';
import { Trans, useTranslation } from 'react-i18next';

export const ContactMeView = () => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const isGreaterThanMediumBreakpoint = getIsGreaterThanMediumBreakpoint();

    const onClickCopy = () => {
        navigator.clipboard.writeText('joaquin.fernandez.dev@gmail.com');
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Grid
            container
            sx={{
                width: '100%',
                zIndex: 1,
            }}
            justifyContent='center'
            id='contact'
        >
            <Grid
                container
                size={12}
                direction='column'
                alignItems='center'
                className='section-container'
                sx={{ p: 3 }}
            >
                <SectionTitle title={t('contactMeTitle')} />

                <Divider
                    sx={{
                        backgroundColor: 'primary.main',
                        width: '100%',
                        mt: 2,
                    }}
                />

                <Grid
                    container
                    size={12}
                    spacing={5}
                    sx={{ mt: { xs: 4, md: 8 }, mb: { xs: 4, md: 8 } }}
                >
                    <Grid
                        container
                        alignContent='center'
                        alignItems='center'
                        size={{ xs: 12, md: 6 }}
                    >
                        <Typography
                            variant={
                                isGreaterThanMediumBreakpoint ? 'h5' : 'h6'
                            }
                            sx={{
                                fontWeight: 700,
                            }}
                        >
                            {t('contactMeSubtitle')}
                        </Typography>
                        <Typography variant='body1' sx={{ mt: 0 }}>
                            <Trans
                                i18nKey='contactMeDescription'
                                components={{
                                    b: <b />,
                                    br: <br />,
                                }}
                            />
                        </Typography>
                        <Grid
                            container
                            spacing={1}
                            sx={{ mt: 0 }}
                            alignItems='center'
                        >
                            <Typography
                                sx={{ fontWeight: 900, fontSize: '1.1rem' }}
                                className='decoration'
                            >
                                @
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: isGreaterThanMediumBreakpoint
                                        ? '1.1rem'
                                        : '1rem',
                                }}
                            >
                                joaquin.fernandez.dev@gmail.com
                            </Typography>
                            <Tooltip title='Copiar al portapapeles'>
                                <IconButton onClick={onClickCopy} size='small'>
                                    <ContentCopyIcon
                                        sx={{ width: '20px', height: '20px' }}
                                    />
                                </IconButton>
                            </Tooltip>
                            <Snackbar
                                open={open}
                                autoHideDuration={3000}
                                onClose={onClose}
                                message={t('toastMessageCopied')}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                sx={{
                                    '& .MuiSnackbarContent-message': {
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <ContactForm />
                    </Grid>
                </Grid>

                <Divider
                    sx={{
                        backgroundColor: 'primary.main',
                        width: '100%',
                        mt: 2,
                    }}
                />

                <Typography
                    variant='h6'
                    sx={{
                        mt: 3,
                        fontWeight: 500,
                        opacity: 0.8,
                        width: '100%',
                        textAlign: 'center',
                    }}
                >
                    {t('thanksMessage')}
                </Typography>
            </Grid>
        </Grid>
    );
};
