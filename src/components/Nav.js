import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to="/">Home</Link> | <Link to="/work">My Work</Link> |{' '}
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default Nav;
