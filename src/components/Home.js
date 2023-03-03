import React from "react";
import Badge from 'react-bootstrap/Badge';
import portrait from '../assets/images/portrait.png'


const Home = () => {

    return(<>

        <div className="statement d-flex p-5">
            <img src={ portrait } width="150" alt="" />
            <p>Hi there, my name is Berta and I'm a Frontend Developer</p>
        
        </div>

        <div className="badges d-flex flex-wrap justify-content-center">
            <Badge className="badge">Git / GitHub</Badge>
            <Badge className="badge">HTML</Badge>
            <Badge className="badge">CSS</Badge>
            <Badge className="badge">JavaScript</Badge>
            <Badge className="badge">Bootstrap</Badge>
            <Badge className="badge">APIs</Badge>
            <Badge className="badge">React</Badge>
            <Badge className="badge">JSON</Badge>
            <Badge className="badge">JQuery</Badge>
            <Badge className="badge">Node.js</Badge>
            <Badge className="badge">Python</Badge>
            <Badge className="badge">UX</Badge>
            <Badge className="badge">Agile Methodologies</Badge>
        </div>
    </>);

}

export default Home;