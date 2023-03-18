import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Button } from '@mui/material';

const Wrapper = styled.div`
    display:flex;
    flex-flow: column;
    align-items:center;
    text-align:center;
    margin-top:15px;
    min-width:275px
`
const Image = styled.img`
    border: 5px solid black;
    height: 175px;
    width: 275px;
    border-radius:15px;
`
const Title = styled.p`

    font-size:20px;
    margin:2px;
    font-family: 'Montserrat', sans-serif;

`
const Description = styled.p`
    font-size:15px;
    margin:5px;
    font-family: 'Montserrat', sans-serif;
    max-width:250px;
    min-height:35px;
`
const GoTo = styled.a`
    text-decoration:none;
    color:black;
`
const BulletEntry = styled.li`
    margin:10px;
    max-width:80%;
    min-width:50%;
    @media(min-width:600px) {
        min-width:80%;
    }
    @media(max-width:725px) {
        min-width:80%
    }
`
const BulletList = styled.ul`
    display:flex;
    flex-flow:column;
    align-items:center;
    @media(max-width:725px) {
        padding-inline-start: 5px;
    }

`
const ModalTitle = styled.h2`

@media(max-width:725px) {
    text-align:center;
}
`
const FadeIn = styled.div`
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

function MakeBulletList(props) {  
    //convert to dictionary for mapping
    const bullets = Object.entries(props.data.bullets);
    //yells at me to have unique key
    const listOfBullets = bullets.map(([key,val]) =>  
        <BulletEntry>{val}</BulletEntry>
    );  
    return (  
      <div>  
            <ModalTitle>{props.data.title}</ModalTitle>  
            <BulletList>{listOfBullets}</BulletList>  
      </div>  
    );  
}
function Project(props) {
    return(
        <Wrapper>
            <Title>{props.modalData.title}</Title>
            <Image src={props.img}/>
            <GoTo target = "_blank" href = {props.link}><Title>{props.name}</Title></GoTo>
            <Description>{props.description}</Description>
            <Popup contentStyle={{borderRadius:"15px",width:"60%", minWidth:"300px"}} 
                trigger={
                    <Button
                        style={{
                            borderRadius: 5,
                            backgroundColor: "#1652f0",
                            fontSize: "12px",
                        }} 
                        variant="contained">More Info
                    </Button>
                } 
                position="screen center"
                modal
            /*Whether or not to include a visit link at {{props.modalData.link !== "" ? line 107}:*/
            >
                {close => (
                <FadeIn>
                <div style={{padding:"15px", display:"flex", flexFlow:"column", alignItems:"center"}}>
                    
                    <MakeBulletList data={props.modalData}></MakeBulletList>
                    
                    <div style={{display:"flex", flexFlow:"row", alignItems:"center"}}>
                        {props.modalData.link !== "" ?
                        
                        /*true block*/
                        <><a style={{textDecoration:"none"}} href={props.modalData.link} target={"_blank"} rel={"noreferrer"}>
                                <Button
                                        style={{
                                            borderRadius: 5,
                                            backgroundColor: "#1652f0",
                                            width: "20px",
                                            margin: "2px"
                                        }}
                                        variant="contained"
                                        size="small"
                                >
                                Visit
                                </Button>
                            </a>
                            <div>
                                <Button
                                    style={{
                                        borderRadius: 5,
                                        backgroundColor: "#1652f0",
                                        width: "20px",
                                    }}
                                    variant="contained"
                                    size="small"
                                    onClick={close}>
                                    Close
                                </Button>
                             </div></>
                        /*false block*/
                        :
                        <Button 
                            style={{
                                borderRadius: 5,
                                backgroundColor: "#1652f0",
                                width:"20px",
                                
                            }} 
                            variant="contained" 
                            size="small"
                            onClick={close}>
                            Close
                        </Button>
                        }
                    </div>
                </div>
                </FadeIn>
                )}
            </Popup>
        </Wrapper>
    )
}

export default Project;