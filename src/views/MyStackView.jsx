import { Divider, Grid } from '@mui/material';
import { SectionTitle, TechStackCard } from '../ui';

const stack = {
    frontend: ['js', 'html5', 'css3', 'react', 'materialui'],
    backend: ['nodejs', 'expressjs', 'mongodb', 'mongoose', 'mysql'],
    testing: ['jest', 'reacttestinglibrary'],
    tools: ['git', 'github', 'postman', 'jira', 'jenkins'],
};

const cardTitles = {
    frontend: 'Front-End 🖥️',
    backend: 'Back-End 🛠️',
    testing: 'Testing 🧪',
    tools: 'Tools 🧰',
};

export const MyStackView = () => {
    return (
        <Grid
            container
            sx={{
                width: '100%',
                zIndex: 1,
            }}
            justifyContent='center'
            id='stack'
        >
            <Grid
                container
                size={12}
                direction='column'
                alignItems='center'
                className='section-container'
                sx={{ p: 3 }}
            >
                <SectionTitle title='MI STACK' />

                <Divider
                    sx={{
                        backgroundColor: 'primary.main',
                        width: '100%',
                        mt: 2,
                    }}
                />

                <Grid container size={12} spacing={2} sx={{ mt: 8, mb: 8 }}>
                    {Object.keys(stack).map((key) => (
                        <TechStackCard
                            key={key}
                            title={cardTitles[key]}
                            stack={stack[key]}
                        />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};
