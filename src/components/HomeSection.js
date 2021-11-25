import { Link } from 'react-router-dom';
import photo from '../images/olivia-hyland.jpg';
import { Typography } from '@mui/material';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    homeSection: {
        display: 'flex',
        justifyContent: 'space-evenly',
        '& span': {
            fontWeight: 'bold',
        },
        '& .homePageText': {
            '& .MuiTypography-root': {
                marginBottom: '10px',
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        '& img': {
            borderRadius: '50%',
            width: '400px',
            boxShadow: '0 0 8px 8px white inset',
        },
        '& a': {
            display: 'flex',
            textDecoration: 'none',
            fontWeight: 'bolder',
            color: '#C133FF',
        },
    },
});

const HomeSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.homeSection}>
            <div className="homePageText">
                <Typography variant="h3">
                    <span>Olivia</span> Hyland
                </Typography>
                <Typography variant="h5">
                    Frontend <span>Software Developer</span>
                </Typography>
                {/* <Button variant="outlined" color="secondary"> */}
                <Link to="/portfolio">
                    See My Portfolio <ChevronRightIcon />
                </Link>
                {/* </Button> */}
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
