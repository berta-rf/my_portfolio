import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {

    return(<>

        <nav className="navbar p-5 mx-5">

            <h1>/berta-rf</h1>
            
            <div className="navLinks">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>

    </>);

}

export default Header;