import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    routes: {
        margin: '20vh 10vw 50px 10vw',
    },
    app: {
        color: 'white',
        '& .MuiAppBar-root': {
            padding: '0 2vw 0 2vw',
        },
        '& .MuiTypography-body2': {
            marginBottom: '10px',
            fontWeight: 'bold',
        },
        '& .MuiTypography-h3': {
            marginBottom: '40px',
        },
        '& .MuiTypography-h4': {
            marginBottom: '40px',
        },
        '& .MuiTypography-h5': {
            marginBottom: '25px',
            fontWeight: 'bold',
        },
    },
});

function App() {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <Nav />
            <div className={classes.routes}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
