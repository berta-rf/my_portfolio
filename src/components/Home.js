import React from "react";
import Container from "react-bootstrap/Container";
import Badge from 'react-bootstrap/Badge';
import { Col, Row} from "react-bootstrap";
import portrait from '../assets/images/portrait.png';


const Home = () => {

    const skills = ['Git / GitHub', 'HTML', 'SCSS', 'JavaScript', 'Python', 'MySQL', 'APIs', 'React', 'JQuery', 'Flask', 'Node.js', 'Agile Methodologies', 'Bootstrap', 'MUI']

    return(<>
        
        <Container className="wrapper">
            <Row>           
                <Col  className="my-5" xs={12} md={8} xl={8}>
                    <div className="statement text-justify">
                        <p className="firstLine"><i class="fa-solid fa-terminal fa-xl"></i> Hi there 👋<br></br>my name is Berta and I'm a junior <b>Frontend Developer</b> based in London!</p>
                        <p>Currently expanding my horizons with <b>Code First Girls CFGDegree in Software</b>.</p>
                        <p>Former Social Worker, and now also an ex-Sommelier, although you won't take the wine geek out of me... </p>
                        <p>After completing Google’s Project Management course, I gained an understanding of the life cycle of tech
                        projects and learned about Agile methodologies, and that just left me wanting more so I enrolled in edX Frontend Bootcamp and completed it with flying colours 💪!</p>
                        <p>In the 16-week program, I gained skills in HTML, SCSS, Javascript, jQuery, React, ES6, and Nodejs. I’ve also learned to work with Git, in GitHub and GitLab, worked with APIs and fetch/axios, and dipped my toes in UX design and deployment of modern web applications with Netlify. </p>
                    </div>
                </Col>
                <Col className="my-5 mx-auto portrait" xs={12} md={4} xl={4}>
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
                    <a className="linkBtn" href="https://www.linkedin.com/in/berta-rf/"><i className="fa-brands fa-linkedin fa-2xl mx-3"></i></a>
                </Col>
            </Row>
        </Container>

    </>);

}

export default Home;
