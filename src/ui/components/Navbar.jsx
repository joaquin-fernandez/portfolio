import {
    AppBar,
    Button,
    Grid,
    IconButton,
    Menu,
    MenuItem,
    Slide,
    Toolbar,
    useScrollTrigger,
} from '@mui/material';
import { Logo, ThemeToggle } from './';
import MenuOutlined from '@mui/icons-material/MenuOutlined';
import { useEffect, useState } from 'react';
import { getIsGreaterThanMediumBreakpoint } from '../../helpers';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from './LanguageToggle';

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        threshold: 100,
    });

    return (
        <Slide appear={false} direction='down' in={!trigger}>
            {children ?? <div />}
        </Slide>
    );
}

export const Navbar = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { t } = useTranslation();
    const open = Boolean(anchorEl);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
    });

    const isGreaterThanMediumBreakpoint = getIsGreaterThanMediumBreakpoint();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event, goTo) => {
        setAnchorEl(null);
        if (goTo) document.getElementById(goTo).scrollIntoView();
    };

    useEffect(() => {
        if (isGreaterThanMediumBreakpoint) setAnchorEl(null);
    }, [isGreaterThanMediumBreakpoint]);

    return (
        <HideOnScroll {...props}>
            <AppBar
                position='fixed'
                sx={{
                    backgroundColor: 'transparent !important',
                    boxShadow: trigger
                        ? 'var(--mui-palette-secondary-main) 0px 0px 16px'
                        : 'none',
                    backdropFilter: trigger ? 'blur(10px)' : 'none',
                }}
                elevation={0}
            >
                <Toolbar disableGutters>
                    <Grid
                        container
                        sx={{ width: '100%' }}
                        justifyContent='center'
                    >
                        <Grid
                            size={{ xs: 12, md: 10, lg: 8 }}
                            container
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Grid container alignItems='center' spacing={1}>
                                <IconButton
                                    sx={{
                                        display: { md: 'none' },
                                        width: '40px',
                                        height: '40px',
                                        ml: 1,
                                    }}
                                    onClick={handleClick}
                                >
                                    <MenuOutlined />
                                </IconButton>
                                <Menu
                                    id='basic-menu'
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={(event) => handleClose(event)}
                                    variant='menu'
                                    className='customMenu'
                                    elevation={0}
                                    slotProps={{
                                        list: {
                                            className: 'customMenuList',
                                        },
                                        paper: {
                                            className: 'customMenuPaper',
                                        },
                                    }}
                                >
                                    <MenuItem
                                        onClick={(event) =>
                                            handleClose(event, 'about-me')
                                        }
                                    >
                                        {t('aboutMeMenu')}
                                    </MenuItem>
                                    <MenuItem
                                        onClick={(event) =>
                                            handleClose(event, 'stack')
                                        }
                                    >
                                        {t('stackMenu')}
                                    </MenuItem>
                                    <MenuItem
                                        onClick={(event) =>
                                            handleClose(event, 'projects')
                                        }
                                    >
                                        {t('projectsMenu')}
                                    </MenuItem>
                                    <MenuItem
                                        onClick={(event) =>
                                            handleClose(event, 'contact')
                                        }
                                    >
                                        {t('contactMenu')}
                                    </MenuItem>
                                </Menu>
                                <Logo
                                    variant='h6'
                                    sx={{ width: '158px', m: 1, mt: 0 }}
                                />
                            </Grid>
                            <Grid
                                container
                                spacing={2}
                                display={{ xs: 'none', md: 'flex' }}
                            >
                                <Button variant='text' href='#about-me'>
                                    {t('about')}
                                </Button>
                                <Button variant='text' href='#stack'>
                                    {t('stack')}
                                </Button>
                                <Button variant='text' href='#projects'>
                                    {t('projects')}
                                </Button>
                                <Button variant='text' href='#contact'>
                                    {t('contactMe')}
                                </Button>
                            </Grid>
                            <Grid container alignItems='center' spacing={1}>
                                <LanguageToggle />
                                <ThemeToggle />
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};
