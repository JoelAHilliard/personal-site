import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`
const Image = styled.img`
    border: 5px solid black;
    height: 175px;
    width: 275px;
    border-radius:25px;
`

function Project(props) {
    return(
        <Wrapper>
            <Image src={props.img}/>
            text
        </Wrapper>
    )
}

export default Project;