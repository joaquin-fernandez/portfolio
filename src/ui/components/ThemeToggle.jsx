import { IconButton, useColorScheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const ThemeToggle = () => {
    const { mode, setMode } = useColorScheme();
    if (!mode) return null;

    const handleMode = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    };

    return (
        <IconButton
            onClick={handleMode}
            sx={{ width: '40px', height: '40px', mr: 1 }}
        >
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
    );
};
