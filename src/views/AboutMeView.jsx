import { Box, Divider, Grid, Tab, Typography } from '@mui/material';
import { SectionSubtitle, SectionTitle, TimelineSection } from '../ui';
import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Trans, useTranslation } from 'react-i18next';
import { aboutMeData } from '../data';

export const AboutMeView = () => {
    const data = aboutMeData();
    const [tabSelected, setTabSelected] = useState('jobs');

    const onTabChange = (event, newValue) => {
        setTabSelected(newValue);
    };

    const { t } = useTranslation();

    return (
        <Grid
            container
            sx={{
                minHeight: `calc(100vh)`,
                width: '100%',
                zIndex: 1,
                pt: 3,
                pb: 3,
            }}
            justifyContent='center'
            id='about-me'
        >
            <Grid
                container
                size={12}
                direction='column'
                alignItems='center'
                className='section-container'
                sx={{ p: 3 }}
            >
                <SectionTitle title={t('aboutMeTitle')} />

                <Divider
                    sx={{
                        backgroundColor: 'primary.main',
                        width: '100%',
                        mt: 2,
                    }}
                />

                <Box
                    sx={{
                        mt: 3,
                        mb: 2,
                        p: 4,
                    }}
                    className='styledBox'
                >
                    <Typography variant={'body1'}>
                        <Trans
                            i18nKey='aboutMeDescription'
                            components={{
                                b: <b />,
                            }}
                        ></Trans>
                    </Typography>
                </Box>

                <SectionSubtitle text={t('trayectoryTitle')} />

                <TabContext value={tabSelected}>
                    <TabList
                        sx={{ mt: 3 }}
                        onChange={onTabChange}
                        className='tabList'
                        variant='scrollable'
                        scrollButtons='auto'
                    >
                        <Tab label={t('jobs')} value='jobs' />
                        <Tab label={t('education')} value='education' />
                        <Tab
                            label={t('certifications')}
                            value='certifications'
                        />
                    </TabList>
                    <Grid
                        container
                        alignItems='center'
                        justifyContent='center'
                        sx={{ width: '100%', flexGrow: 1 }}
                    >
                        <Grid
                            sx={{ mt: 4 }}
                            size={12}
                            container
                            direction='column'
                            alignItems='center'
                        >
                            <TimelineSection
                                events={data[tabSelected].data}
                                icon={data[tabSelected].icon}
                            />
                        </Grid>
                    </Grid>
                </TabContext>
            </Grid>
        </Grid>
    );
};
