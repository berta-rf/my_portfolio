import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {

    return(<>

        <nav classNameName="navbar">
            <h1>/berta-rf</h1>
            <div classNameName="navLinks">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Get in touch</Link>
            </div>
        </nav>

    </>);

}

export default Header;