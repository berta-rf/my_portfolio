import React, { useState } from "react";
import { Project, ProjectImg } from './Project';
import projects from '../assets/projects.json'
import { Container, ListGroup } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectGallery() {

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const currentProject = projects[currentProjectIndex];

   return (<>
    
    <Container className="projects wrapper">

        <Row className="my-5">

            <Col xs={12} md={6}>
                <ProjectImg deployedURL={currentProject.deployedURL} image={currentProject.image}></ProjectImg>
            </Col>

            <Col xs={12} md={6} className="text-end">
                <ListGroup className="ul">
                    {projects.map( (project, index) => <Project
                    key={project.key}
                    title={project.title}
                    technologies={project.technologies}
                    githubLink={project.githubLink}
                    deployedURL={project.deployedURL}
                    setCurrentProjectIndex={setCurrentProjectIndex}
                    projectIndex={index}
                    />)}
                </ListGroup>    
            </Col>
        </Row>
            
            
    </Container>

    </>);   

}

export default ProjectGallery;