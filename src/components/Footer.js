import React from 'react';
import { Typography, AppBar, Toolbar, IconButton, Box } from '@mui/material';
import {
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    copyright: {
        textTransform: 'uppercase',
        fontWeight: 800,
    },
});

const Footer = () => {
    const classes = useStyles();
    return (
        <footer>
            <AppBar
                position="fixed"
                color="primary"
                sx={{ top: 'auto', bottom: 0 }}
            >
                <Toolbar variant="dense">
                    <Typography variant="caption" className={classes.copyright}>
                        © Olivia Hyland {new Date().getFullYear()}
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        target="_blank"
                        sx={{ mr: 2 }}
                        href="https://github.com/ohyland"
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        target="_blank"
                        sx={{ mr: 2 }}
                        href="https://www.linkedin.com/in/olivia-hyland-79775317b/"
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </footer>
    );
};

export default Footer;
