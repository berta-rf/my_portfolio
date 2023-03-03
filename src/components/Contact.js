import React from "react";
import Form from 'react-bootstrap/Form'

const Contact = () => {

    return(<>

{/* //     <div class="mt-5 pb-4 d-flex justify-content-around">
//     <a href="mailto: bertaromanofernandez@gmail.com">Send me an email <i class="fa-solid fa-envelope"></i></a>
//     <a href="tel:+447989122309">Call me <i class="fa-solid fa-phone"></i></a>
//     <a href="https://www.linkedin.com/in/berta-romano-fernandez-85a51117a/">Let's connect on LinkedIn <i class="fa-brands fa-linkedin"></i></a>
//   </div>

//   <div class="mt-3 d-flex justify-content-around">
//   <a href="https://github.com/berta-rf">Check out my GitHub profile <i class="fa-brands fa-github"></i></a>
//   <a href="https://www.frontendmentor.io/profile/berta-rf">Have a look at my projects on FrontEnd Mentor <i class="fa-regular fa-folder-open"></i></a>
//   </div> */}

        <Form>
            <h2>Anything you wanna share...?</h2>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Berta Romano Fernandez" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>What did you have in mind?</Form.Label>
                <Form.Control as="textarea" rows={5} />
            </Form.Group>
        </Form>

    </>);
}

export default Contact;