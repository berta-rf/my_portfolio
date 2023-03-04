import React, { useState } from "react";
import { Project, ProjectImg } from './Project';
import projects from '../assets/projects.json'
import { Container, ListGroup } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function ProjectGallery() {

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const currentProject = projects[currentProjectIndex];

   return (<>
    
    <Container className="projects">
        <Row>
            <Col>
                <ListGroup className="ul">
                    {projects.map( (project, index) => <Project
                    key={project.key}
                    title={project.title}
                    githubLink={project.githubLink}
                    deployedURL={project.deployedURL}
                    setCurrentProjectIndex={setCurrentProjectIndex}
                    projectIndex={index}
                    />)}
                </ListGroup>    
            </Col>

            <Col>
                <ProjectImg deployedURL={currentProject.deployedURL} image={currentProject.image}></ProjectImg>
            </Col>
        </Row>
            
            
    </Container>

    </>);   

}