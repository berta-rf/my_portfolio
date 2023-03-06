import React from "react";
import { ListGroupItem } from "react-bootstrap";

// import Card from 'react-bootstrap/Card';

export function Project(props) {
    const { 
        setCurrentProjectIndex, 
        projectIndex,
        githubLink,
        title,
        deployedURL
    } = props;

    return (
        <>
            <div
                onMouseEnter={() => setCurrentProjectIndex(projectIndex)}
                onMouseLeave={() => setCurrentProjectIndex(0)}
            >
                <ListGroupItem className="d-flex my-3">
                    <a href={deployedURL}>
                        <h2>{title}</h2>
                    </a>

                    <a href={githubLink} className="my-3">
                        <i className="gitHubWork mx-4 fa-brands fa-github fa-2xl"></i>
                    </a>
                </ListGroupItem>
            </div>
        </>
    );
 }

export function ProjectImg(props) {
    const { deployedURL, image } = props;

       return (
        <>
            <div className="wrap">
                <a href={deployedURL}>
                    <img id="images" src={image} alt='' width="100%"/>
                </a>
            </div>
            
        </>
    );

}
        