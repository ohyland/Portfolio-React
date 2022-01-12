import { Link } from 'react-router-dom';
import photo from '../images/olivia-hyland.jpg';
import { Typography } from '@mui/material';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    homeSection: {
        '& h3': {
            textTransform: 'uppercase',
        },
        display: 'flex',
        justifyContent: 'space-between',
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
            width: '90%',
            boxShadow: '0 0 8px 8px white inset',
        },
        '& a': {
            textTransform: 'uppercase',
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
                <Link to="/portfolio">
                    See My Portfolio <ChevronRightIcon />
                </Link>
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
