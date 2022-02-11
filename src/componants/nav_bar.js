import react from "react";
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-box"></div>
            <h3>
                <Link to="/" className="nav-btn">Home</Link>
            </h3>
            <h3>
                <Link to="/about_page" className="nav-btn">About</Link>
            </h3>
            <h3>
                <Link to="/projects_page" className="nav-btn">Projects</Link>
            </h3>
            <h3>
                <Link to="/contact_page" className="nav-btn">Contact</Link>
            </h3>
        </div>
    );
}

export default NavBar;