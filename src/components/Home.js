import React from "react";
import Container from "react-bootstrap/Container";
import Badge from 'react-bootstrap/Badge';
import portrait from '../assets/images/portrait.png';


const Home = () => {

    const skills = ['Git / GitHub', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'APIs', 'React', 'JSON', 'JQuery', 'Node.js', 'Python', 'Agile Methodologies']

    return(<>
        
        <Container>
            <div className="statement d-flex my-5">
                <img src={ portrait } width="300" alt="" />
                <p>Hi there, my name is Berta and I'm a Frontend Developer</p>
            </div>

            <div className="badges m-5">
                {skills.map(skill => <Badge className="badge m-2">{skill}</Badge>)}
            </div>
        </Container>

    </>);

}

export default Home;