import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    AppBar,
    Drawer,
    ListItem,
    List,
    IconButton,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {
    Person as PersonIcon,
    Apps as AppsIcon,
    MailOutlineOutlined as MailOutlineOutlinedIcon,
    Menu as MenuIcon,
} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    drawer: {
        color: 'white',
        textTransform: 'uppercase',
    },
    appBar: {
        '& .MuiTypography-body1': {
            borderBottom: '3px solid transparent',
            color: 'white',
        },
        '& .MuiTypography-root': {
            fontWeight: 'bold',
            margin: '0 10px',
            color: 'white',
        },
        '& .MuiListItem-root': {
            color: 'white',
        },
        '& .MuiToolbar-root': {
            textTransform: 'uppercase',
            display: 'flex',
            justifyContent: 'flex-end',
        },
        '& .active': {
            '& .MuiTypography-body1': {
                transitionDuration: '0.3s',
                borderBottom: '3px solid #da57f3',
                fontWeight: '800',
            },
        },
        '& a': {
            color: 'white',
            textDecoration: 'none',
        },
    },
});

const Nav = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const naviagtionArray = [
        {
            text: 'Home',
            url: '/',
            icon: <PersonIcon />,
        },
        {
            text: 'Portfolio',
            url: '/portfolio',
            icon: <AppsIcon />,
        },
        {
            text: 'Contact',
            url: '/contact',
            icon: <MailOutlineOutlinedIcon />,
        },
    ];

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                {isMobile ? (
                    <>
                        <Drawer
                            anchor="top"
                            id="basic-menu"
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <List>
                                {naviagtionArray.map((menuItem, index) => (
                                    <ListItem
                                        className={classes.drawer}
                                        onClick={handleClose}
                                        key={index}
                                        variant="contained"
                                        component={NavLink}
                                        to={menuItem.url}
                                    >
                                        {menuItem.text}
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>

                        <IconButton color="secondary" onClick={handleClick}>
                            <MenuIcon />
                        </IconButton>
                    </>
                ) : (
                    <>
                        {naviagtionArray.map((menuItem, index) => (
                            <MenuItem
                                onClick={handleClose}
                                key={index}
                                variant="contained"
                                component={NavLink}
                                to={menuItem.url}
                                activeClassName="active"
                            >
                                <Typography>{menuItem.text}</Typography>
                            </MenuItem>
                        ))}
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
