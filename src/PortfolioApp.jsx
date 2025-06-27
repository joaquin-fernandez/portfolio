import { useState } from 'react';
import {
    Background,
    Footer,
    GoTopButton,
    Navbar,
    SectionSubtitle,
    SectionTitle,
    TimelineSection,
} from './ui';
import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Paper,
    Tab,
    Tabs,
    Typography,
} from '@mui/material';
import {
    AboutMeView,
    ContactMeView,
    MyProjectsView,
    MyStackView,
    WelcomeView,
} from './views';

function PortfolioApp() {
    return (
        <>
            <Navbar />
            <Grid container justifyContent='center'>
                <Grid container size={{ xs: 12, md: 10, lg: 8 }}>
                    <GoTopButton />
                    <WelcomeView />
                    {/* <Divider
                        sx={{ backgroundColor: 'primary.main', width: '100%' }}
                    /> */}
                    <AboutMeView />
                    <MyStackView />
                    <MyProjectsView />
                    <ContactMeView />
                </Grid>
            </Grid>
            <Background />
            <Footer />
        </>
    );
}

export default PortfolioApp;
