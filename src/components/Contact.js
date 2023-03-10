import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack'

const Contact = () => {

    return(<>

    <Container className="contactPage wrapper">
      <Row className="my-5">
        <Col xs={12} sm={12} md={6} >
            <Stack className="contactinfo my-3">
                <Button className="m-3" href="mailto: bertaromanofernandez@gmail.com">Send me an email <i className="fa-solid fa-envelope"></i></Button>
                <Button className="m-3" href="tel:+447989122309">Call me <i className="fa-solid fa-phone"></i></Button>
                <div><br></br></div>
                <Button className="m-3" href="https://github.com/berta-rf">GitHub <i className="fa-brands fa-github"></i></Button>
                <Button className="m-3" href="https://www.linkedin.com/in/berta-rf/">LinkedIn <i className="fa-brands fa-linkedin"></i></Button>
                <Button className="m-3" href="https://www.frontendmentor.io/profile/berta-rf">FrontEnd Mentor <i className="fa-regular fa-folder-open"></i></Button>
            </Stack>
        </Col>

        <Col xs={12} sm={12} md={6}>
            <Form name="contact" method="POST">
                <input type="hidden" name="form-name" value="contact" />
                    <h2>Contact Me</h2>
                <Form.Group  className="my-5" controlId="form.ControlInput1">
                    <Form.Control type="name" name="name" placeholder="What's your name?" required/>
                </Form.Group>
                <Form.Group className="mb-5" controlId="form.ControlInput2">
                    <Form.Control type="email" name="email" placeholder="name@example.com" required/>
                </Form.Group>
                <Form.Group className="mb-5" controlId="form.ControlInput3">
                    <Form.Control as="textarea" name="message" placeholder="What's on your mind? " rows={8} required/>
                </Form.Group>
                <Button className="btn" type="submit">Submit</Button>
            </Form>
        </Col>
      </Row>
    </Container>

    </>);
}

export default Contact;