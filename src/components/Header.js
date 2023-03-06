import React from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const Header = () => {

    return(<>
    <Container>
      <Navbar collapseOnSelect expand="md" className="my-5">
            <div>
                <h1>/berta-rf</h1>
            </div>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav" >
            <Nav>
                <Nav.Link className="nav-link m-4" href="/">Home</Nav.Link>
                <Nav.Link className="nav-link m-4" href="/projects">Projects</Nav.Link>
                <Nav.Link className="nav-link m-4" href="/contact">Contact</Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </Container>
    </>);

}

export default Header;