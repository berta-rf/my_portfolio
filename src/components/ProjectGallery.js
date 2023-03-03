import React from "react";
import Project from './Project';
import projects from '../assets/projects.json'
import { Container } from "react-bootstrap";


const ProjectGallery = () => {

   return (<>
    
        <Container className="d-flex flex-wrap">
            {projects.map( project => <Project key={project.key} 
                title={project.title} 
                image={project.image} 
                githubLink={project.githubLink} 
                deployedURL={project.deployedURL} 
            />)}
        </Container>

    </>);   

}

export default ProjectGallery;