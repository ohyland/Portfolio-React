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
        '& span': {
            fontWeight: 'bold',
        },
        '& .homePageText': {
            '& .MuiTypography-root': {
                marginBottom: '10px',
            },
            '& .MuiTypography-body1': {
                display: 'flex',
                fontWeight: '800',
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        '& img': {
            borderRadius: '50%',
            width: '50%',
            boxShadow: '0 0 8px 8px white inset',
        },
        '& a': {
            textTransform: 'uppercase',
            display: 'flex',
            textDecoration: 'none',
            fontWeight: 'bolder',
        },
    },
});

const HomeSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.homeSection}>
            <div className="homePageText">
                <img
                    className={classes.image}
                    src={photo}
                    alt={'Olivia Hyland'}
                />
                <Typography variant="h3">
                    <span>Olivia</span> Hyland
                </Typography>

                <Typography variant="h5">
                    Frontend <span>Software Developer</span>
                </Typography>

                <Link to="/portfolio" color="secondary">
                    <Typography color="secondary" variant="body1">
                        See My Portfolio
                        <ChevronRightIcon />
                    </Typography>
                </Link>
            </div>
        </div>
    );
};

export default HomeSection;
