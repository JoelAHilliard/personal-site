import React from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';

const Wrapper = styled.div`
  margin:auto;
  display:block;
`
function App() {
  return (
    <Wrapper>
      <NavBar/>
    </Wrapper>
  );
}

export default App;
