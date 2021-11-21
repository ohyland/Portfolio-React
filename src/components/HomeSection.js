import photo from '../images/olivia-hyland.jpg';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    homeSection: {
        color: 'white',
        display: 'flex',
        justifyContent: 'space-evenly',
        '& .homePageText': {
            '& .MuiTypography-root': {
                marginBottom: '10px',
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
    },
    image: {
        borderRadius: '50%',
        height: '400px',
        boxShadow: '0 0 8px 8px white inset',
    },
});

const HomeSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.homeSection}>
            <div className="homePageText">
                <Typography variant="h3">Olivia Hyland</Typography>
                <Typography variant="h5">
                    Frontend Software Developer
                </Typography>
                <Button variant="outlined" color="secondary">
                    See My Portfolio
                </Button>
            </div>
            <div>
                <img
                    className={classes.image}
                    src={photo}
                    alt={'Olivia Hyland'}
                />
            </div>
        </div>
    );
};

export default HomeSection;
