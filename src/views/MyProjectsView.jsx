import { Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { Carousel, CustomChip, SectionTitle } from '../ui';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { technologies } from '../utils';
import { useTranslation } from 'react-i18next';
import { getProjects } from '../data';

export const MyProjectsView = () => {
    const { t } = useTranslation();
    const projects = getProjects();

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
                sx={{ pr: 3, pl: 3 }}
            >
                <SectionTitle title={t('projectsTitle')} />

                <Divider
                    sx={{
                        backgroundColor: 'primary.main',
                        width: '100%',
                        mt: 2,
                    }}
                />

                <Typography variant='body1' sx={{ mt: 4 }}>
                    {t('projectsDescription')}
                </Typography>

                <Grid container size={12} spacing={2} sx={{ mt: 4, mb: 4 }}>
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
                                    {t(project.description)}
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
                                    display: {
                                        xs:
                                            projects.length === i + 1
                                                ? 'none'
                                                : 'block',
                                        md: 'none',
                                    },
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};
