import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import {
    Person as PersonIcon,
    Apps as AppsIcon,
    MailOutlineOutlined as MailOutlineOutlinedIcon,
} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    appBar: {
        '& .MuiToolbar-root': {
            backgroundColor: '#242424',
        },
        '& a': {
            color: 'white',
            textDecoration: 'none',
        },
    },
    drawer: {
        '& .MuiPaper-root': {
            backgroundColor: '#3e3e3ebd',
        },
    },
});

const Nav = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                {/* <div> */}
                {[
                    {
                        text: 'About',
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
                ].map((menuItem, index) => (
                    <Link to={menuItem.url} key={index}>
                        <Typography>{menuItem.text}</Typography>
                    </Link>
                ))}
                {/* </div> */}
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
