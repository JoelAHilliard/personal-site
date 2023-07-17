import React from 'react';
import styled from 'styled-components';
import AboutMe from '../components/AboutMe.js';
import Projects from '../components/Projects.js';
import Resume from './Resume.js';
import { Button } from '@mui/material';


import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
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
const Text = styled.p`
    font-family: 'Metropolitano', sans-serif;
    font-size:25px;

`
function NavBar() {
    return(
      <div>
          <BrowserRouter>

            <Bar>
                
                <Button style={{color:"white"}} variant="outlined"><Link style={{textDecoration:'none',color:"white"}} to="/">Home</Link></Button>
                <Button style={{color:"white"}} variant="outlined"><Link style={{textDecoration:'none',color:"white"}} to="/resume">Resume</Link></Button>
                <Button style={{color:"white"}} variant="outlined"><Link style={{textDecoration:'none',color:"white"}} to="/projects">Projects</Link></Button>
                
            </Bar>
            
            <Routes>
              <Route exact path="/" element={<AboutMe/>} />
              <Route exact path="/projects" element={<Projects/>} />
              <Route exact path='/resume' element={<Resume/>} />
            </Routes>

          </BrowserRouter>
        </div>
    )
}
export default NavBar;