import Controls from '../../components/Controls/Controls';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import React from 'react';
import ScrollDownIndicator from '../../components/ScrollDownIndicator/ScrollDownIndicator';
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
