import { Typography } from '@mui/material';
import todoListPhoto from '../images/todo-list.jpg';
import weatherAppPhoto from '../images/weather-app.jpg';
import twitterPhoto from '../images/twitter.jpg';
import gamesAppPhoto from '../images/games.jpg';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Tooltip,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
    LaptopMac as LaptopMacIcon,
    GitHub as GitHubIcon,
} from '@mui/icons-material';

const useStyles = makeStyles({
    portfolio: {
        '& .MuiGrid-root': {
            justifyContent: 'space-between',
        },
        // '& .MuiPaper-root': {
        //     maxWidth: '85%',
        // },
        '& .MuiTypography-root': {
            color: 'white',
        },
        '& .icons': {
            display: 'flex',
            '& .MuiButtonBase-root': {
                backgroundColor: 'white',
            },
        },
    },
});

const Portfolio = () => {
    const classes = useStyles();
    return (
        <div className={classes.portfolio}>
            <Typography variant="h4" component="h1">
                Things I've built...
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={5} md={4} lg={3}>
                    <Card variant="outlined" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={todoListPhoto}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Todo List
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Todo List App created with React, Redux,
                                Typescript and JSS
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Tooltip title="View code">
                                <IconButton
                                    color="secondary"
                                    href="https://github.com/ohyland/Todo-List-React"
                                >
                                    <GitHubIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="View live">
                                <IconButton
                                    href="https://reacttodolist20.netlify.app/"
                                    color="secondary"
                                >
                                    <LaptopMacIcon />
                                </IconButton>
                            </Tooltip>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={5} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={weatherAppPhoto}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Weather App
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                Weather app created using React and weather data
                                fetched using Axios
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Tooltip title="View code">
                                <IconButton
                                    href="https://github.com/ohyland/weather"
                                    color="secondary"
                                >
                                    <GitHubIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="View live">
                                <IconButton color="secondary">
                                    <LaptopMacIcon />
                                </IconButton>
                            </Tooltip>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={5} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={twitterPhoto}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Twitter clone
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Twitter Clone created using React and styled
                                using Material UI
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Tooltip title="View code">
                                <IconButton
                                    color="secondary"
                                    href="https://github.com/ohyland/twitter-clone"
                                >
                                    <GitHubIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="View live">
                                <IconButton color="secondary">
                                    <LaptopMacIcon />
                                </IconButton>
                            </Tooltip>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={5} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={gamesAppPhoto}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Games App
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Games App created using React, react-router,
                                Redux and fetching data from an API
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Tooltip title="View code">
                                <IconButton
                                    href="https://github.com/ohyland/ignite"
                                    color="secondary"
                                >
                                    <GitHubIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="View live">
                                <IconButton color="secondary">
                                    <LaptopMacIcon />
                                </IconButton>
                            </Tooltip>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Portfolio;
