import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {

    return(<>

    <Container className="contactPage">
      <Row>
        <Col xs={12} sm={12} md={6} >
            <div className="contactinfo my-3">
                <p>Why don't you</p>
                <Button className="mb-3" href="mailto: bertaromanofernandez@gmail.com">Send me an email <i className="fa-solid fa-envelope"></i></Button>
                <p>or</p>
                <Button className="mb-3" href="tel:+447989122309">Call me <i className="fa-solid fa-phone"></i></Button>
                <div><br></br></div>
                <p>Or checkout out my socials!</p>
                <Button className="m-3" href="https://github.com/berta-rf">GitHub <i className="fa-brands fa-github"></i></Button>
                <Button className="m-3" href="https://www.Buttonedin.com/in/berta-romano-fernandez-85a51117a/">LinkedIn <i className="fa-brands fa-linkedin"></i></Button>
                <Button className="m-3" href="https://www.frontendmentor.io/profile/berta-rf">FrontEnd Mentor <i className="fa-regular fa-folder-open"></i></Button>
            </div>
        </Col>

        <Col xs={12} sm={12} md={6}>
            <Form className="my-3">
                <h2>Contact Me</h2>
                <Form.Group className="my-5" controlId="form.ControlInput1">
                    <Form.Control type="name" placeholder="What's your name?" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="form.ControlInput2">
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="form.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="What's on your mind? " rows={8} />
                </Form.Group>
                <Button className="btn" type="submit">Submit</Button>
            </Form>
        </Col>
      </Row>
    </Container>

    </>);
}

export default Contact;