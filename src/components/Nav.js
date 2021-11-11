import { Link } from 'react-router-dom';
import {
    AppBar,
    Button,
    Drawer,
    Toolbar,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Person as PersonIcon,
    Apps as AppsIcon,
    MailOutlineOutlined as MailOutlineOutlinedIcon,
} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    appBar: {
        display: 'flex',
        backgroundColor: 'grey',
        '& a': {
            color: 'white',
            textDecoration: 'none',
        },
    },
});

const Nav = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton
                    size="small"
                    edge="center"
                    color="inherit"
                    aria-label="Menu"
                >
                    <MenuIcon />
                </IconButton>
                <Drawer open anchor="right">
                    <List>
                        {[
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
                        ].map((menuItem, index) => (
                            <Link to={menuItem.url} key={index}>
                                <ListItem button>
                                    <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                    <ListItemText>{menuItem.text}</ListItemText>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    {/* <Button>
                        
                    </Button>
                    <Button>
                        <Link to="/portfolio">Portfolio</Link>
                    </Button>
                    <Button>
                        <Link to="/contact">Contact</Link>
                    </Button> */}
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
