import { Typography } from '@mui/material';
import todoListPhoto from '../images/todo-list.jpg';
import weatherAppPhoto from '../images/weather-app.jpg';
import twitterPhoto from '../images/twitter.jpg';
import gamesAppPhoto from '../images/games.jpg';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {
    LaptopMac as LaptopMacIcon,
    GitHub as GitHubIcon,
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
        '& .MuiPaper-root': {
            margin: '5px',
            '& .MuiTypography-root': {
                color: 'white',
            },
        },
    },
});

const Portfolio = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h4">Things I've built...</Typography>
            <div className={classes.works}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={todoListPhoto}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Todo List
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton color="secondary">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton color="secondary">
                            <LaptopMacIcon />
                        </IconButton>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={weatherAppPhoto}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Weather App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton color="secondary">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton color="secondary">
                            <LaptopMacIcon />
                        </IconButton>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={twitterPhoto}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Twitter clone
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton color="secondary">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton color="secondary">
                            <LaptopMacIcon />
                        </IconButton>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={gamesAppPhoto}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Games App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton color="secondary">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton color="secondary">
                            <LaptopMacIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        </>
    );
};

export default Portfolio;
