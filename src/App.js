import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Work from './pages/Work';

function App() {
    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/work" element={<Work />} />
            </Routes>
        </div>
    );
}

export default App;
