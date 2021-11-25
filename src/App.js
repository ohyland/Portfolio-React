import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    app: {
        color: 'white',
        margin: '20vh 150px 0px 150px',
        textTransform: 'uppercase',
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
