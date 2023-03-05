import React from "react";
import Container from "react-bootstrap/Container";
import Badge from 'react-bootstrap/Badge';
import { Col, Row } from "react-bootstrap";
import portrait from '../assets/images/portrait.png';


const Home = () => {

    const skills = ['Git / GitHub', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'APIs', 'React', 'JSON', 'JQuery', 'Node.js', 'Python', 'Agile Methodologies']

    return(<>
        
        <Container>
            <Row>
                <Col className="col-lg-4 col-xs-10">
                    <img id={portrait} src={ portrait } width="80%" alt="" />
                </Col>
                <Col>
                    <div className="statement">
                        <p>Hi there, my name is Berta and I'm a Frontend Developer based in London!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam repellendus delectus voluptas 
                            autem commodi voluptatum, a quos excepturi tempora expedita accusamus asperiores, qui culpa in
                            illum aspernatur, rerum amet eaque.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="badges m-5">
                    {skills.map(skill => <Badge className="badge m-2">{skill}</Badge>)}
                </div>
            </Row>
            <Row>
                <Col className="col-lg-4 my-5 mx-auto">
                    <a className="gitBtn" href="https://github.com/berta-rf"><i className="fa-brands fa-github"></i></a>
                </Col>
            </Row>
        </Container>

    </>);

}

export default Home;