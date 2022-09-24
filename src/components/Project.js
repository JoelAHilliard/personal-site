import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    flex-flow: column;
    align-items:center;
    text-align:center;
    margin-top:15px;
`
const Image = styled.img`
    border: 5px solid black;
    height: 175px;
    width: 275px;
    border-radius:25px;
`
const Title = styled.p`

font-size:20px;
margin:2px;
font-family: 'Montserrat', sans-serif;

`
const Description = styled.p`
    font-size:10px;
    margin:2px;
    font-family: 'Montserrat', sans-serif;

`
const GoTo = styled.a`
text-decoration:none;
color:black;
`
function Project(props) {
    return(
        <Wrapper>
            <Image src={props.img}/>
            <GoTo href = {props.link}><Title>{props.name}</Title></GoTo>
            <Description>{props.description}</Description>      
        </Wrapper>
    )
}

export default Project;