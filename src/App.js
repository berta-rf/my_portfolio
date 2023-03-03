import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import ProjectGallery from './components/ProjectGallery';

import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import './App.scss';


const App = () => {
    
    return(

        <Router>
        <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
        >
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="projects" element={<ProjectGallery />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
        </ThemeProvider>
        </Router>  
    );
        
}
    
export default App;
    
    
    