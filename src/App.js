import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    app: {
        color: 'white',
        margin: '20vh 15vw 0px 15vw',
        '& .MuiTypography-h3': {
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </div>
    );
}

export default App;
