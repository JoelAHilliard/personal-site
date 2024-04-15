import React from 'react';
import styled from 'styled-components';
import Project from './Project.js'
import ETHFeesImg from '../images/ETHFees.png'
import ConsensusTaxImg from '../images/conensustax.png'
import Stocks from '../images/stocks.png'
import Covid from '../images/covid.png'
import Covlab from '../images/covlab.png'
import Nssy from '../images/nssy.png'
import Filedrop from '../images/filedrop.png'


const ProjectHolder = styled.div`
    display:flex;
    flex-flow:column;
    margin:auto;
    flex-wrap:wrap;
    justify-content:space-evenly;
    gap:2px;
    max-width:1000px;
    @media(min-width:600px){
        flex-flow:row;
        flex-wrap: wrap;
        width:65%;
    }
    @media(max-width:600px){
        flex-flow:row;
        flex-wrap: wrap;
        width:60%;
    }
   
`
function Projects() {
    return(
        <ProjectHolder>
            <Project 
                projectName = "Filedrop" 
                img = {Filedrop}
                description = "Quickly and privately transfer files from one device to another." 
                modalData = {{
                    title: "Filedrop",
                    link : "https://filedrop.xyz",
                    bullets:{
                        "bullet1":"Filedrop is a solution for swift and uncomplicated file sharing between computers. Designed for speed and simplicity, this application allows users to pass files quickly without the need for an account or any complicated setup.",
                        "bullet2":"Utilizes a Cloudflare R2 to store objects, a Node API to retrieve/send, and AES256 encryption.",
                    },
                    // tech:["angular-icon-logo.png","mongodb-logo-black-and-white.png","nodejs-logo-vector.svg","spring-2.svg"]
                }}
            />
            <Project 
                projectName = "Nssy Portfolio Tracker" 
                img = {Nssy}
                description = "Portfolio tracking for crypto assets." 
                modalData = {{
                    title: "Nssy",
                    link : "https://nssy.xyz",
                    bullets:{
                        "bullet1":"A web-app where users can enter their crypto holdings and can see different visualizations pertaining to their portfolio.",
                        "bullet2":"Utilizes a MongoDB to store crypto asset prices, a Node API to retrieve prices, and a worker app that constantly pulls updated prices into the database every minutes.",
                        "bullet3":"Frontend made with Angular, API made with SpringBoot and worker written in Node.",
                    },
                    tech:["angular-icon-logo.png","mongodb-logo-black-and-white.png","nodejs-logo-vector.svg","spring-2.svg"]
                }}
            />
            <Project 
                projectName = "ETH Fees" 
                img = {ETHFeesImg}
                description = "Enter a wallet address to find out unique insights." 
                modalData = {{
                    title: "ETH Fees",
                    link : "https://ethfees.xyz/",
                    bullets:{
                        "bullet1":"A web-app where frequent users of the Ethereum network would come to find out how much they have spent on network fees.",
                        "bullet2":"Utilizes a Python server to speed up load time using caching to update users' database entries automatically.",
                        "bullet3":"Frontend made with React, server written in Python.",
                    },
                    tech:["react-logo-vector.svg","python-logo-only.png"]
                }}
            />
            <Project 
                projectName = "Mizzou Research Development Lead" 
                img = {Covlab}
                description = "Visualize Covid-19 trends using Twitter Data" 
                modalData = {{
                    title: "Covlab",
                    link : "https://covlab.tech",
                    bullets:{
                        "bullet1":"I lead the development of a web-app that displays trends in Covid-19 data.",
                        "bullet2":"Leveraged a MongoDB database to retrieve and display data in several different visual formats, including charts, graphs, and tables.",
                        "bullet3":"Frontend made with Angular, backend written in Python using Flask.",
                    },
                    tech:["angular-icon-logo.png","mongodb-logo-black-and-white.png","python-logo-only.png"]
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
                        3:"Frontend written in React, backend written in Python."
                    },
                    tech:["react-logo-vector.svg","python-logo-only.png"]
                }}
            />
            <Project 
                projectName = "Portfolio App" 
                img = {Stocks} 
                description = {`Keep tabs on your assets.`} 
                modalData = {{
                    title:"Portfolio App",
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
                    title:"Covid-19 Trends",
                    link : "",
                    bullets:{
                        1:"Retrieved Covid-19 infection data and displayed it on the front end using React",
                        2:"Used a database allowing users to create an account and get local data.",
                        3:"Made using React, MySQL and AWS."
                    },
                    tech:["react-logo-vector.svg"]
                }}
            />
        </ProjectHolder>
    )
}
export default Projects;
