import React from 'react';

// Child components
import Controls from '../../components/Controls/Controls';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import ScrollDownIndicator from '../../components/ScrollDownIndicator/ScrollDownIndicator';

// Styled components
import StyledHomePage from './Home.sc';

const HomePage = () => (
  <StyledHomePage>
    <Controls />
    <Navigation />
    <Logo />
    <ScrollDownIndicator />
  </StyledHomePage>
);

export default HomePage;
