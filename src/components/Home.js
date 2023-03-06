import React from "react";
import Container from "react-bootstrap/Container";
import Badge from 'react-bootstrap/Badge';
import { Col, Row} from "react-bootstrap";
import portrait from '../assets/images/portrait.png';


const Home = () => {

    const skills = ['Git / GitHub', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'APIs', 'React', 'JSON', 'JQuery', 'Node.js', 'Python', 'Agile Methodologies']

    return(<>
        
        <Container>
            <Row className="my-5">
                <Col xs={12} md={4} xl={4}>
                    <img id={portrait} src={ portrait } width="80%" heigth="auto" alt="" />
                </Col>
                <Col xs={12} md={8} xl={8}>
                    <div className="statement text-justify">
                        <p>Hi there, my name is Berta and I'm a <b>Frontend Developer</b> based in London!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam repellendus delectus voluptas 
                            autem commodi voluptatum, a quos excepturi tempora expedita accusamus asperiores, qui culpa in
                            illum aspernatur, rerum amet eaque.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="badges m-5 text-center">
                    {skills.map(skill => <Badge className="badge m-2">{skill}</Badge>)}
                </div>
            </Row>
            <Row >
                <Col className="text-center">
                    <a className="gitBtn" href="https://github.com/berta-rf"><i className="fa-brands fa-github fa-2xl mx-3"></i></a>
                    <a className="linkBtn" href="https://github.com/berta-rf"><i className="fa-brands fa-linkedin fa-2xl mx-3"></i></a>
                </Col>
            </Row>
        </Container>

    </>);

}

export default Home;