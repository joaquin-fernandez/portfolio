import { Box, Divider, Grid, Tab, Typography } from '@mui/material';
import { SectionSubtitle, SectionTitle, TimelineSection } from '../ui';
import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

const data = {
    jobs: {
        icon: '💼',
        data: [
            {
                title: 'Senior Software Engineer',
                location: 'GlobalLogic Argentina',
                date: 'Febrero 2018 - Marzo 2025',
            },
            {
                title: 'IT Support',
                location: 'Universidad Tecnológica Nacional - FRLP',
                date: 'Junio 2015 - Marzo 2017',
            },
        ],
    },
    education: {
        icon: '🎓',
        data: [
            {
                title: 'Ingeniería en Sistemas de Información',
                location: 'Universidad Tecnológica Nacional - FRLP',
                date: 'Febrero 2013 - Actualidad',
            },
            {
                title: 'Bachiller en Ciencias Sociales',
                location: 'Colegio San Cayetano - La Plata',
                date: 'Marzo 2000 - Diciembre 2012',
            },
        ],
    },
    certifications: {
        icon: '📜',
        data: [
            {
                title: 'React: de cero a experto (Hooks y MERN)',
                location: 'Udemy',
                date: 'Junio 2025',
            },
        ],
    },
};

export const AboutMeView = () => {
    const [tabSelected, setTabSelected] = useState('jobs');

    const onTabChange = (event, newValue) => {
        setTabSelected(newValue);
    };

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
                <SectionTitle title='SOBRE MÍ' />

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
                    <Typography variant='body1'>
                        👨‍💻<b> Software Developer</b> con más de 7 años de
                        experiencia en <b>aplicaciones web escalables</b>,
                        especialmente en el <b>sector financiero.</b> Experto en
                        <b> JavaScript, React y metodologías ágiles </b>
                        🚀. Comprometido con la <b>calidad del código</b> y el
                        trabajo en equipos interdisciplinarios 🤝. Fuerte
                        enfoque en la{' '}
                        <b>
                            automatización, testing 🧪 y buenas prácticas de
                            desarrollo
                        </b>
                        ✅.
                    </Typography>
                </Box>

                <SectionSubtitle text='Mi trayectoria' />

                <TabContext value={tabSelected}>
                    <TabList
                        sx={{ mt: 3 }}
                        onChange={onTabChange}
                        className='tabList'
                    >
                        <Tab label='💼 Trabajos' value='jobs' />
                        <Tab label='🎓 Estudios' value='education' />
                        <Tab
                            label='📜 Certificaciones'
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
