import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import ProjectGallery from './components/ProjectGallery';

import './App.scss';


function App() {
    
    return(

        <Router>
            <div>
                <h1>Berta's PORTFOLIO</h1>
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
    
    
    