import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    app: {
        margin: '90px 30px',
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
