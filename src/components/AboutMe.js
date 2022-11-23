import React from 'react';
import styled from 'styled-components';
import Joel from '../images/joel.png'
import LinkedIn from '../images/16066.png'
import Github from '../images/download.png'

const Selfie = styled.img`
    width: 200px;
    height: 250px;
    border: 2px solid black;
    margin-top:20px;    
`
const Wrapper = styled.div`
    display: flex;
    flex-flow:column;
    align-items:center;
    justify-content:center;

`
const LinkBox = styled.div`
    display:flex;
    flex-flow:row;
    align-items:center;
    justify-content: space-between;
`
const ImageBox = styled.img`
    height: 50px;
    weidth: 50px;
    border: 3px solid black;
    border-radius:15%;
    margin: 5px;
`
const NameText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    margin:3px 0 0 0;
`
const JoelInfo = styled.p`
    font-family: 'Montserrat', sans-serif;
    margin:3px 0 0 0;
`
function AboutMe(){
    return(
        <Wrapper>
            <Selfie src={Joel}/>
            <NameText>Joel Hilliard</NameText>
            <JoelInfo style={{fontSize:'15px'}}>Computer Science - Univeristy of Missouri - May 2023</JoelInfo>
            <LinkBox>
                <a rel="noreferrer" target="_blank" href="https://github.com/JoelAHilliard"><ImageBox src={Github}/></a>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/joel-hilliard-3b9278192/"><ImageBox src={LinkedIn}/></a>
            </LinkBox>
        </Wrapper>
    )
}
export default AboutMe;