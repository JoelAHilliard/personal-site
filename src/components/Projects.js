import React from 'react';
import styled from 'styled-components';
import Project from './Project.js'
import ETHFeesImg from '../images/ETHFees.jpg'
import ConsensusTaxImg from '../images/consensustax.jpg'

const ProjectHolder = styled.div`

`
function Projects() {
    return(
        <ProjectHolder>
            <Project name = "ETH Fees" img = {ETHFeesImg} description = "Enter a wallet address to find out unique insights" link = "https://ethfees.xyz"/>
            <Project name = "Consensus Tax" img = {ConsensusTaxImg} description = {`Find out your specfic tax needs at one click.\n Link soon.`} link = "https://ethfees.xyz"/>
        </ProjectHolder>
    )
}
export default Projects;