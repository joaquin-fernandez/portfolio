import { Chip, useColorScheme } from '@mui/material';

import StackIcon from 'tech-stack-icons';

export const CustomChip = ({ label, iconName }) => {
    const { mode } = useColorScheme();
    return (
        <Chip
            avatar={
                iconName ? <StackIcon name={iconName} variant={mode} /> : null
            }
            label={label}
            sx={{
                height: '40px',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 500,
            }}
        />
    );
};
