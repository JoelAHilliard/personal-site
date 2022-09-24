import React from 'react';
import styled from 'styled-components';
import Project from './Project.js'
import ETHFeesImg from '../images/ETHFees.jpg'
const ProjectHolder = styled.div`

`
function Projects() {
    return(
        <ProjectHolder>
            <Project name = "ETH Fees" img = {ETHFeesImg}/>
        </ProjectHolder>
    )
}
export default Projects;