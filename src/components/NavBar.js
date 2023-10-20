import React from 'react';
import styled from 'styled-components';
import AboutMe from '../components/AboutMe.js';
import Projects from '../components/Projects.js';
import Resume from './Resume.js';
import { Button } from '@mui/material';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

  const Bar = styled.div `
    text-align: left;
    padding: 5px;
    background:#1652f0;
    display: flex;
    flex-flow:row;
    justify-content:center;
    color:white;
    gap:5px;
`

function NavBar() {
    return(
      <div>
          <Router>

            <Bar>
                
                <Link style={{textDecoration:'none',color:"white"}} to="/"><Button style={{color:"white"}} variant="outlined">Home</Button></Link>
                <Link style={{textDecoration:'none',color:"white"}} to="/resume"><Button style={{color:"white"}} variant="outlined">Resume</Button></Link>
                <Link style={{textDecoration:'none',color:"white"}} to="/projects"><Button style={{color:"white"}} variant="outlined">Projects</Button></Link>
                
            </Bar>
            
            <Routes>
              <Route exact path="/" element={<AboutMe></AboutMe>} />
              <Route exact path="/projects" element={<Projects></Projects>} />
              <Route exact path='/resume' element={<Resume></Resume>} />
            </Routes>

          </Router>
      </div>
    )
}
export default NavBar;