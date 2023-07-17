import React from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import ReactGA from 'react-ga';

ReactGA.initialize('G-GQ48TZCS0L'); // replace with your Tracking ID

// function to record page views
const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

// track initial page load
trackPage(window.location.pathname + window.location.search);

// track subsequent page views

const Wrapper = styled.div`
  margin:auto;
  display:block;
  min-width:310px;
`

function App() {
  return (
    <Wrapper>
      <NavBar/>
    </Wrapper>
  );
}

export default App;
