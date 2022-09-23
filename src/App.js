import React, { useForm,useEffect, useRef, useState, useHistory } from 'react';
import styled from 'styled-components';
import AboutMe from './components/AboutMe';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Projects from './components/Projects';

const Bar = styled.div `
    text-align: left;
    padding: 5px;
    background:black;
    height: 40px;
    width: 100%;
    display: flex;
    flex-flow:row;
    justify-content:center;
    color:white;
    line-height:0.5;
`
const Text = styled.p`
font-family: 'Montserrat', sans-serif;
;
`
function NavBar() {

    return(
      <div>
          <BrowserRouter>

          <Bar>
              <Text><Link style={{ textDecoration: 'none',color:'white' }} to="/">Joel Hilliard</Link> -&nbsp;</Text>
              <Text><Link style={{ textDecoration: 'none',color:'white' }} to="/projects">Projects</Link></Text> 
          </Bar>
            <Routes>
              <Route exact path="/" element={<AboutMe/>} />
              <Route exact path="/projects" element={<Projects/>} />
            </Routes>
          </BrowserRouter>
        </div>
    )
}
function App() {

  return (
    <div>
      {NavBar()}
    </div>
  );
}

export default App;
