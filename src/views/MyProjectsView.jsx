import { Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { Carousel, CustomChip, SectionTitle } from '../ui';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { technologies } from '../utils';

import calendar1 from '../assets/calendar1.png';
import calendar2 from '../assets/calendar2.png';
import calendar3 from '../assets/calendar3.png';
import journal1 from '../assets/journal1.png';
import journal2 from '../assets/journal2.png';
import journal3 from '../assets/journal3.png';
import heroes1 from '../assets/heroes1.png';
import heroes2 from '../assets/heroes2.png';
import heroes3 from '../assets/heroes3.png';

const projects = [
    {
        title: 'Calendar App 📅',
        description:
            'Un calendario web personal para mantener organizada tu agenda, administrando tus eventos y reuniones. Permite crear eventos, editarlos y eliminarlos. ',
        images: [calendar1, calendar2, calendar3],
        technologies: [
            'js',
            'html5',
            'css3',
            'react',
            'redux',
            'reactrouter',
            'bootstrap5',
            'mongodb',
            'mongoose',
            'expressjs',
            'nodejs',
        ],
        repo_url: 'https://github.com/joaquin-fernandez/mern-calendar',
        demo_url: 'https://mern-calendar-backend-hybs.onrender.com',
    },
    {
        title: 'Journal App 📕',
        description:
            'Un diario personal para el día a día, permite crear, editar y borrar entradas. A su vez, permite almacenar imágenes gracias a Cloudinary. ',
        images: [journal1, journal2, journal3],
        technologies: [
            'js',
            'html5',
            'css3',
            'react',
            'redux',
            'reactrouter',
            'materialui',
            'firebase',
        ],
        repo_url: 'https://github.com/joaquin-fernandez/journal_app',
        demo_url: 'https://journal-app-lgl1.onrender.com',
    },
    {
        title: 'Heroes App 🦸‍♂️',
        description:
            'Una aplicación sencilla que lista héroes de Marvel y DC, permite buscar por nombre y ofrece una vista detallada de cada héroe.',
        images: [heroes1, heroes2, heroes3],
        technologies: ['js', 'html5', 'css3', 'react', 'reactrouter'],
        repo_url: 'https://github.com/joaquin-fernandez/heroes_app',
        demo_url: '',
    },
];

export const MyProjectsView = () => {
    return (
        <Grid
            container
            sx={{
                width: '100%',
                zIndex: 1,
            }}
            justifyContent='center'
            id='projects'
        >
            <Grid
                container
                size={12}
                direction='column'
                alignItems='center'
                className='section-container'
                sx={{ p: 3 }}
            >
                <SectionTitle title='MIS PROYECTOS' />

                <Divider
                    sx={{
                        backgroundColor: 'primary.main',
                        width: '100%',
                        mt: 2,
                    }}
                />

                <Typography variant='body1' sx={{ mt: 4 }}>
                    Éstos son algunos de los proyectos que desarrollé usando
                    tecnologías modernas y buenas prácticas.
                </Typography>

                <Grid container size={12} spacing={2} sx={{ mt: 4, mb: 8 }}>
                    {projects.map((project, i) => (
                        <Grid
                            size={12}
                            container
                            key={project.title}
                            className=''
                            direction={i % 2 === 0 ? 'row' : 'row-reverse'}
                        >
                            {/* Imagenes del proyecto */}

                            <Grid
                                size={{ xs: 12, md: 6 }}
                                alignContent='center'
                                alignItems='center'
                                container
                            >
                                <Carousel
                                    images={project.images}
                                    key={i}
                                    id={`carousel-${i}`}
                                    title={project.title}
                                />
                            </Grid>

                            {/* Informacion del proyecto */}

                            <Grid
                                size={{ xs: 12, md: 6 }}
                                container
                                direction='column'
                                sx={{
                                    mt: { xs: 0, md: 2 },
                                    mb: { xs: 0, md: 2 },
                                    p: 2,
                                    pt: { xs: 0, md: 2 },
                                }}
                            >
                                <Typography
                                    variant='h6'
                                    sx={{
                                        mt: 2,
                                        mb: 2,
                                        fontWeight: 600,
                                        textAlign: {
                                            xs: 'left',
                                            md: i % 2 === 0 ? 'left' : 'right',
                                        },
                                    }}
                                >
                                    {project.title}
                                </Typography>
                                <Typography
                                    variant='body1'
                                    sx={{
                                        mt: 0,
                                        mb: 2,
                                        fontWeight: 400,
                                        textAlign: {
                                            xs: 'left',
                                            md: i % 2 === 0 ? 'left' : 'right',
                                        },
                                    }}
                                >
                                    {project.description}
                                </Typography>
                                <Grid
                                    container
                                    spacing={1}
                                    size={12}
                                    direction={{
                                        xs: 'row',
                                        md: i % 2 === 0 ? 'row' : 'row-reverse',
                                    }}
                                >
                                    {project.technologies.map((technology) => (
                                        <CustomChip
                                            key={technology}
                                            label={technologies[technology]}
                                            iconName={technology}
                                        />
                                    ))}
                                </Grid>
                                <Grid
                                    container
                                    spacing={1}
                                    size={12}
                                    direction={{
                                        xs: 'row',
                                        md: i % 2 === 0 ? 'row' : 'row-reverse',
                                    }}
                                >
                                    <Grid>
                                        <Tooltip title='Ver repositorio'>
                                            <IconButton
                                                href={project.repo_url}
                                                target='_blank'
                                            >
                                                <GitHubIcon
                                                    sx={{
                                                        width: '32px',
                                                        height: '32px',
                                                    }}
                                                />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid
                                        display={
                                            !!project.demo_url
                                                ? 'block'
                                                : 'none'
                                        }
                                    >
                                        <Tooltip title='Ver demo'>
                                            <IconButton
                                                href={project.demo_url}
                                                target='_blank'
                                            >
                                                <OpenInNewIcon
                                                    sx={{
                                                        width: '32px',
                                                        height: '32px',
                                                    }}
                                                />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Divider
                                sx={{
                                    width: '100%',
                                    mb: 2,
                                    display: { xs: 'block', md: 'none' },
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};
