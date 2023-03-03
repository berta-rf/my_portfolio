import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contact from './src/components/Contact';
import Header from './src/components/Header';
import Home from './src/components/Home';
import ProjectGallery from './src/components/ProjectGallery';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


const App = () => {
    
    return(

        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="projects" element={<ProjectGallery />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>  
    );
        
}
    
export default App;
    
    
    