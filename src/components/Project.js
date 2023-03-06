import React from "react";
import { ListGroupItem } from "react-bootstrap";


export function Project(props) {
    const { 
        setCurrentProjectIndex, 
        projectIndex,
        githubLink,
        title,
        deployedURL,
        technologies
    } = props;

    return (
        <>
            <div
                onMouseEnter={() => setCurrentProjectIndex(projectIndex)}
                onMouseLeave={() => setCurrentProjectIndex(0)}
            >
                <ListGroupItem className="my-3">
                    <a href={deployedURL}>
                        <h2>{title}</h2>
                    </a>
                    <a href={githubLink}>
                        <h3>{technologies}</h3>
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
        