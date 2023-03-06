import React from "react";
import { Container, Col, Row, Navbar, Nav} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const Header = () => {

    return(<>
      <Container fluid>
        <Row>
          <Col>
            <div>
                <h1>/berta-rf</h1>
            </div>
          </Col>

          <Col>
            <Navbar collapseOnSelect expand="lg">
              <NavbarToggle aria-controls="responsive-navbar-nav" />
              <NavbarCollapse id="responsive-navbar-nav" >
                <Nav>
                    <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                    <Nav.Link className="nav-link" href="/projects">Projects</Nav.Link>
                    <Nav.Link className="nav-link" href="/contact">Contact</Nav.Link>
                </Nav>
              </NavbarCollapse>
            </Navbar>
          </Col>

        </Row>
      </Container>

    </>);

}

export default Header;