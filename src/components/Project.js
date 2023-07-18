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
    margin:auto;
    margin-top:15px;
    width:275px;
    max-width:300px;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.35);
    overflow: hidden;
f`
const Image = styled.img`
    border: 5px solid black;
    height: 30%;
    width: 100%;
    margin: 4px 0px 0px 0px;
`
const Title = styled.span`
    
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
// const GoTo = styled.a`
//     text-decoration:none;
//     color:black;
// `
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
        <BulletEntry key={key}>{val}</BulletEntry>
    );  
    return (  
      <div>  
            <BulletList>{listOfBullets}</BulletList>  
      </div>  
    );  
}
function MakeImageList(props) {
    if(!props.data.tech){
        return
    } 
    const images = props.data.tech;

    const listOfImages = images.map((imageName, index) => {
        const imageSrc = process.env.PUBLIC_URL + imageName;
        return <img style={{height:"25px"}} key={index} src={imageSrc} alt={imageName} />
    });


    return (
            <div style={{height:"25px",display:"flex",gap:"10px"}}>{listOfImages}</div>  
    );  
}
function Project(props) {
    return(
        <Wrapper>
            <div style={{display:"flex",flexFlow:"column",justifyContent:"space-between"}}>
                <div style={{height:"100%"}}>
                    <div style={{display:"flex",flexFlow:"row",height:"auto", justifyContent:"space-between",alignContent:"center",alignItems:"center",padding:"5px"}}>
                    <Title><strong>{props.modalData.title}</strong></Title>
                    <Popup contentStyle={{borderRadius:"15px",width:"60%", minWidth:"300px"}} 
                trigger={
                    <Button
                        style={{
                            borderRadius: 5,
                            backgroundColor: "#1652f0",
                            fontSize: "12px",
                            maxHeight:"33px"
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
                    <div style={{display:"flex",height:"auto",flexFlow:"column",alignItems:"center",justifyContent:"center",alignContent:'center',gap:"2px"}}>
                        <ModalTitle>{props.modalData.title}</ModalTitle> 
                        
                    </div>
                    
                    <MakeBulletList data={props.modalData}></MakeBulletList>
                    <div style={{display:"flex",height:"30px",flexFlow:"row",alignItems:"center",justifyContent:"center",alignContent:'center',gap:"2px"}}>
                            {/* <p>Made with: </p> */}
                            <MakeImageList data={props.modalData}></MakeImageList>
                    </div>
                
                    <div style={{display:"flex", flexFlow:"row", alignItems:"center"}}>
                        {props.modalData.link !== "" ?
                        
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
                    </div>
                    {/* <GoTo target = "_blank" href = {props.link}><Title>{props.name}</Title></GoTo> */}
                    <Description>{props.description}</Description>
                </div>
                <Image src={props.img}/>

            </div>
        </Wrapper>
    )
}

export default Project;