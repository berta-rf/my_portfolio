import React from "react";
import Card from 'react-bootstrap/Card';


const Project = (props) => {

    return (<>
        <Card className="m-5" style={{ width: '25rem' }}>
        <Card.Link href={props.deployedURL}><Card.Img variant="top" src={props.image} /></Card.Link>
          <Card.Body>
            <Card.Link href={props.githubLink}><Card.Title>{props.title}</Card.Title></Card.Link>
          </Card.Body>
        </Card>
    </>);


}

export default Project;
