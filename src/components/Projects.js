import React from 'react';
import styled from 'styled-components';
import Project from './Project.js'
import ETHFeesImg from '../images/ETHFees.jpg'
import ConsensusTaxImg from '../images/consensustax.jpg'
import Stocks from '../images/stocks.jpeg'
import Covid from '../images/covid.jpeg'

const ProjectHolder = styled.div`
    display:flex;
    flex-flow:column;
    width:80%;
    margin:auto;
    flex-wrap:wrap;
    justify-content:space-evenly;
    @media(min-width:600px){
        flex-flow:row;
        flex-wrap: wrap;
    }
`
function Projects() {
    return(
        <ProjectHolder>
            <Project 
                projectName = "ETH Fees" 
                img = {ETHFeesImg}
                description = "Enter a wallet address to find out unique insights." 
                modalData = {{
                    title: "ETH Fees",
                    link : "https://ethfees.xyz",
                    bullets:{
                        1:"A web-app where frequent users of the Ethereum network would come to find out how much they have spent on network fees.",
                        2:"Utilizes a Python server to speed up load time using caching to update users' database entries automatically.",
                        3:"Frontend made with React, server written in Python.",
                    }
                }}
            />
            <Project 
                projectName = "Consensus Tax" 
                img = {ConsensusTaxImg} 
                description = {`Find out your specfic tax needs at one click.`} 
                modalData = {{
                    title:"Consensus Tax" ,
                    link : "",
                    bullets:{
                        1:"Worked in a small, fast paced team to develop an automated tax softare for the Ethereum network.",
                        2:"Used a data base to index previous users' data to speed up load-time by 25%.",
                        3:"Frontend written in React, server written in Python."
                    }
                }}
            />
            <Project 
                projectName = "Portfolio Java App" 
                img = {Stocks} 
                description = {`Keep tabs on your assets.`} 
                modalData = {{
                    title:"Portfolio Java App",
                    link : "",
                    bullets:{
                        1:"I designed an app that let the user input their stock/crypto ticker and holdings.",
                        2:"Periodically fetches the price of each asset and displays data effectively to provide unique insights to the movements of your holdings.",
                        3:"Made using Java and Java FX."
                    }
                }}
            />
            <Project 
                projectName = "" 
                img = {Covid} 
                description = {`Make an account and see your local data.`} 
                modalData = {{
                    title:"Covid-19 Trend Tracker",
                    link : "",
                    bullets:{
                        1:"Retrieved Covid-19 infection data and displayed it on the front end using React",
                        2:"Used a database allowing users to create an account and get local data.",
                        3:"Made using React, MySQL and AWS."
                    }
                }}
            />
        </ProjectHolder>
    )
}
export default Projects;