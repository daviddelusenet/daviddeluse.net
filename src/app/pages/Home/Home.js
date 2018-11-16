import React from 'react';

// Child components
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';

// Styled components
import StyledHomePage from './Home.sc';

const HomePage = () => (
  <StyledHomePage>
    <Navigation />
    <Logo />
  </StyledHomePage>
);

export default HomePage;
