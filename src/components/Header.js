import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Navbar } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

const Header = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(false);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


    return(<>
      <Container>
            <Navbar className="navbar navbar-expand-lg my-5">
                <div>
                    <h1>/berta-rf</h1>
                </div>

                <Button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </Button>
                
                <div className="justify-content-end" aria-expanded={isNavCollapsed ? 'collapse' : 'navbar-collapse'} id="navbarSupportedContent">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/projects">Projects</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </div>
                </div>
            </Navbar>
      </Container>

        {/* <nav class="navbar pb-5 navbar-dark navbar-expand-lg justify-content-end">
        <Button class="navbar-toggler" type="Button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </Button>
      
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div class="navbar-nav justify-content-end">
            <a class="nav-link" href="#skills">Skills</a>
            <a class="nav-link" href="#work">Work</a>
            <a class="nav-link" href="#contact">Contact</a>
          </div>
      
        </div>
      </nav> */}

    </>);

}

export default Header;