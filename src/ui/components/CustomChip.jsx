import { Chip, useColorScheme } from '@mui/material';

import StackIcon from 'tech-stack-icons';
import { getIsGreaterThanMediumBreakpoint } from '../../helpers/getIsGreaterThanMediumBreakpoint';

export const CustomChip = ({ label, iconName }) => {
    const { mode } = useColorScheme();
    const isGreaterThanMediumBreakpoint = getIsGreaterThanMediumBreakpoint();
    return (
        <Chip
            avatar={
                iconName ? (
                    <StackIcon
                        name={iconName}
                        variant={
                            mode === 'system' || mode === 'light'
                                ? 'light'
                                : 'dark'
                        }
                    />
                ) : null
            }
            label={label}
            sx={{
                height: '40px',
                borderRadius: '8px',
                fontSize: isGreaterThanMediumBreakpoint ? '0.9rem' : '0.8rem',
                fontWeight: 500,
            }}
        />
    );
};
