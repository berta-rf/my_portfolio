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
                <ListGroupItem>
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
            <a href={deployedURL}>
                <svg>
                    <clipPath id="blob" clipPathUnits="objectBoundingBox">
                        <path d="M 0.187 0.094 C 0.33 -0.06 0.6133 0.09 0.606 0.201 S 0.83 0.39 0.508 0.542 S -0.07 0.49 0.029 0.261 Z" />
                    </clipPath>
                </svg>
                <div id="images" >
                    <img src={image} alt='' width="95%"/>
                </div>
            </a>
            
        </>
    );
        
}
        