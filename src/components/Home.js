import React from "react";
import Container from "react-bootstrap/Container";
import Badge from 'react-bootstrap/Badge';
import { Col, Row} from "react-bootstrap";
import portrait from '../assets/images/portrait.png';


const Home = () => {

    const skills = ['Git / GitHub', 'HTML', 'SCSS', 'JavaScript', 'Bootstrap', 'APIs', 'React', 'JSON', 'JQuery', 'Node.js', 'Python', 'Agile Methodologies']

    return(<>
        
        <Container>
            <Row>           
                <Col  className="my-5" xs={12} md={8} xl={8}>
                    <div className="statement text-justify">
                        <p><i class="fa-solid fa-code fa-xl"></i> Hi there, my name is Berta and I'm a <b>Frontend Developer</b> based in London!</p> 
                        <p>Former Social Worker, and now also an ex-Sommelier, although you won't take the wine geek out of me! (someone ask me about soils please...)</p>
                        <p>After completing Google’s Project Management course I gained an understanding of the life cycle of tech 
                        projects and learned about Agile methodologies, and that just kept me wanting more, so I enrolled in a Frontend bootcamp</p>
                        <p>Highly empathetic and with a mind for efficiency, I merge extensive hospitality experience with a 
                        BA in Social Work, which have shaped me into a resilient and adaptable individual, eager to keep learning! <i class="fa-solid fa-code fa-xl"></i> </p>
                    </div>
                </Col>
                <Col className="my-5" xs={12} md={4} xl={4}>
                    <img id={portrait} src={ portrait } width="80%" heigth="auto" alt="" />
                </Col>
            </Row>
            <Row>
                <div className="badges my-5 text-center">
                    {skills.map(skill => <Badge className="badge m-2">{skill}</Badge>)}
                </div>
            </Row>
            <Row className="my-5">
                <Col className="text-center">
                    <a className="gitBtn" href="https://github.com/berta-rf"><i className="fa-brands fa-github fa-2xl mx-3"></i></a>
                    <a className="linkBtn" href="https://github.com/berta-rf"><i className="fa-brands fa-linkedin fa-2xl mx-3"></i></a>
                </Col>
            </Row>
        </Container>

    </>);

}

export default Home;