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
    margin:2px;
    font-family: 'Montserrat', sans-serif;
    max-width:250px;
    min-height:35px;
`
const GoTo = styled.a`
    text-decoration:none;
    color:black;
`
function MakeBulletList(props) {  
    const bullets = Object.entries(props.data.bullets); 
    const bulletList = bullets.map(([key,val]) =>  
      <li>{val}</li>  
    );  
    return (  
      <div>  
            <h2>{props.data.title}</h2>  
                <ul>{bulletList}</ul>  
      </div>  
    );  
  }  
function Project(props) {
    return(
        <Wrapper>
            <a target = "_blank" href = {props.link}><Image src={props.img}/></a>
            <GoTo target = "_blank" href = {props.link}><Title>{props.name}</Title></GoTo>
            <Description>{props.description}</Description>
            <Popup contentStyle={{borderRadius:"15px", minWidth:"300px"}} 
                trigger={
                    <Button
                        style={{
                            borderRadius: 5,
                            backgroundColor: "#1652f0",
                            fontSize: "12px",
                            marginTop:"10px"
                        }} 
                        variant="contained">More Info
                    </Button>
                } 
                position="screen center"
                modal
            >
                {close => (
                <div style={{padding:"15px", display:"flex", flexFlow:"column", alignItems:"center"}}>
                    
                    <MakeBulletList data={props.modalData}></MakeBulletList>
                    <div style={{display:"flex", flexFlow:"row", alignItems:"center"}}>
                        {props.modalData.link !== "" ? 
                        <><a style={{textDecoration:"none"}} href={props.modalData.link} target={"_blank"}><Button
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
                                </a><div>
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
                )}
            </Popup>
        </Wrapper>
    )
}

export default Project;