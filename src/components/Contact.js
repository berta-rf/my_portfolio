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
        <Col>

        <div className="contactinfo my-3">
            <p>Why don't you</p>
            <Button className="mb-3" href="mailto: bertaromanofernandez@gmail.com">Send me an email <i className="fa-solid fa-envelope"></i></Button>
            <p>or</p>
            <Button className="mb-3" href="tel:+447989122309">Call me <i className="fa-solid fa-phone"></i></Button>
            <div><br></br></div>
            <p>Or perhaps you prefer to checkout out my</p>
            <Button className="mb-3" href="https://github.com/berta-rf">GitHub <i className="fa-brands fa-github"></i></Button>
            <p>and</p>
            <Button className="mb-3" href="https://www.Buttonedin.com/in/berta-romano-fernandez-85a51117a/">LinkedIn <i className="fa-brands fa-linkedin"></i></Button>
            <p>or have a look at my solved challenges on</p>
            <Button className="mb-3" href="https://www.frontendmentor.io/profile/berta-rf">FrontEnd Mentor <i className="fa-regular fa-folder-open"></i></Button>
        </div>
        
        </Col>
        <Col>
            <Form className="my-3">
                <h2>Or use this handy form!</h2>
                <Form.Group className="my-5" controlId="exampleForm.ControlInput1">
                    <Form.Label>What's your name?</Form.Label>
                    <Form.Control type="name" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>What did you have in mind?</Form.Label>
                    <Form.Control as="textarea" placeholder="Type your message here..." rows={12} />
                </Form.Group>
            </Form>
        </Col>
      </Row>
    </Container>

    </>);
}

export default Contact;