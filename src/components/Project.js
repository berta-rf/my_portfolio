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
                <ListGroupItem className="d-flex my-4">
                    <a href={deployedURL}>
                        <h2>{title}</h2>
                    </a>

                    <a href={githubLink}>
                        <i className="fa-brands fa-github"></i>
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
                    <img id="images" src={image} alt='' width="95%"/>
                </a>
            </div>
            
        </>
    );

}
        