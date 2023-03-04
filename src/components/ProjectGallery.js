import React from "react";
import { Project, ProjectImg } from './Project';
import projects from '../assets/projects.json'
import { Container, ListGroup } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ProjectGallery = () => {

    // const [showImage, setShowImage] = useState(false);

    // const showImageHover = () => {
        
    //     setShowImage( 

    //     <img src="./assets/portrait.png" alt="" />
    // // <ProjectImg key={project.key} deployedURL={project.deployedURL} image={project.image}/>
    //    );
    // } 

   return (<>
    
    <Container className="projects">
        <Row>
            <Col lg={6}>
                <h2>Projects</h2>
                {<ProjectImg deployedURL={projects[4].deployedURL} image={projects[4].image}></ProjectImg>}
            </Col>

            <Col lg={6}> 
                <ListGroup className="ul">
                    {projects.map( project => <Project
                    // onMouseEnter={() => {setShowImage(true)}}
                    // onMouseLeave={() => {setShowImage(false)}}
                    key={project.key}
                    title={project.title}
                    githubLink={project.githubLink}
                    />)}
                </ListGroup>    
            </Col>
        </Row>
            
            
    </Container>

    </>);   

}

export default ProjectGallery;