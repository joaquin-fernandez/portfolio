import { CardTitle } from './CardTitle';
import { Divider, Grid } from '@mui/material';
import { CustomChip } from './CustomChip';
import { technologies } from '../../utils';

const techWithoutIcon = {
    reacttestinglibrary: 'React Testing Library',
    jenkins: 'Jenkins',
};

export const TechStackCard = ({ title, stack }) => {
    return (
        <Grid size={{ xs: 12, md: 6, lg: 3 }} className='styledBoxSecondary'>
            <Grid sx={{ mt: 1, mb: 1 }}>
                <CardTitle text={title} />
            </Grid>
            <Divider />
            <Grid container spacing={1} sx={{ mt: 1, p: 2, mb: 1 }}>
                {stack.map((tech) => (
                    <CustomChip
                        key={tech}
                        label={technologies[tech]}
                        iconName={techWithoutIcon[tech] ? '' : tech}
                    />
                ))}
            </Grid>
        </Grid>
    );
};
