import React from 'react';
import styled from 'styled-components';
import AboutMe from '../components/AboutMe.js';
import Projects from '../components/Projects.js';
import Resume from './Resume.js';
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
    line-height:0.5;
    padding:0;
    width:100%;
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
                <Text>
                  <Link 
                    style={{ textDecoration: 'underline',color:'white' }} 
                    to="/">
                    Home
                  </Link> 
                  &nbsp;-&nbsp;</Text>
                <Text><Link style={{ textDecoration: 'underline',color:'white' }} to="/resume">Resume</Link>&nbsp;-&nbsp;</Text> 
                <Text><Link style={{ textDecoration: 'underline',color:'white' }} to="/projects">Projects</Link></Text> 

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