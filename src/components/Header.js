import React from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const Header = () => {

    return(<>
    <Container className="wrapper">
      <Navbar collapseOnSelect expand="lg" className="my-5">
          <Navbar.Brand id="brand" href="/">/berta-rf</Navbar.Brand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav" >
            <Nav className="ms-auto">

                <Nav.Link className="nav-link" href="/projects">Projects</Nav.Link>
                <Nav.Link className="nav-link" href="/contact">Contact</Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </Container>
    </>);

}

export default Header;