import { Typography } from '@mui/material';
import todoListPhoto from '../images/todo-list.jpg';
import weatherAppPhoto from '../images/weather-app.jpg';
import twitterPhoto from '../images/twitter.jpg';
import { makeStyles } from '@mui/styles';
import {
    LaptopMac as LaptopMacIcon,
    GitHub as GitHubIcon,
    Code as CodeIcon,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';

const useStyles = makeStyles({
    icons: {
        display: 'flex',
        '& .MuiButtonBase-root': {
            backgroundColor: 'white',
        },
    },
    works: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    work: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        boxShadow: 'inset 0px 0px 23px 10px rgba(0,0,0,0.43)',
        padding: '23px',
        width: '32%',
        marginBottom: '80px',
        '&::hover': {
            boxShadow: 'none',
        },
        '& img': {
            width: '100%',
            height: '250px',
            objectFit: 'cover',
        },
        '& .workDescription': {
            '& p': {
                margin: 0,
                textTransform: 'none',
                padding: '0 20px',
            },
            display: 'flex',
        },
    },
});

const Portfolio = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h3">My Work</Typography>
            <div className={classes.works}>
                <div className={classes.work}>
                    <div>
                        <Typography variant="h5">Todo List</Typography>
                    </div>

                    <img src={todoListPhoto} alt="" />
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                    </p>
                    <div>
                        <IconButton color="secondary">
                            <LaptopMacIcon />
                        </IconButton>
                        <IconButton color="secondary">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton color="secondary">
                            <CodeIcon />
                        </IconButton>
                    </div>
                </div>
                <div className={classes.work}>
                    <div>
                        <Typography variant="h5">Weather App</Typography>
                    </div>

                    <img src={weatherAppPhoto} alt="" />
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scr
                    </p>
                    <div>
                        <IconButton color="secondary">
                            <LaptopMacIcon />
                        </IconButton>
                        <IconButton color="secondary">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton color="secondary">
                            <CodeIcon />
                        </IconButton>
                    </div>
                </div>
                <div className={classes.work}>
                    <div>
                        <Typography variant="h5">Twitter Clone</Typography>
                    </div>

                    <img src={twitterPhoto} alt="" />
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                    </p>
                    <div>
                        <IconButton color="secondary">
                            <LaptopMacIcon />
                        </IconButton>
                        <IconButton color="secondary">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton color="secondary">
                            <CodeIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
