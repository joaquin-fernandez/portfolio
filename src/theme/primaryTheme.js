import { createTheme } from '@mui/material';

export const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#000000',
                    background: 'rgba(238, 119, 82, .3)',
                    buttonFocus: 'rgba(238, 119, 82, .2)',
                },
                secondary: {
                    main: 'rgb(238, 119, 82)',
                    background: 'rgb(250, 245, 245)',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: '#ffffff',
                    background: 'rgba(67, 162, 229, .3)',
                    buttonFocus: 'rgba(67, 162, 229, .2)',
                },
                secondary: {
                    main: 'rgb(67, 162, 229)',
                    background: 'rgb(17, 17, 17)',
                },
            },
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    cssVariables: {
        colorSchemeSelector: 'data',
    },
    transitions: {
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            // most basic recommended timing
            standard: 300,
            // this is to be used in complex animations
            complex: 375,
            // recommended when something is entering screen
            enteringScreen: 225,
            // recommended when something is leaving screen
            leavingScreen: 195,
        },
    },
});
