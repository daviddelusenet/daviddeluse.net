import React from 'react';

// Child components
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import ScrollDownIndicator from '../../components/ScrollDownIndicator/ScrollDownIndicator';

// Styled components
import StyledHomePage from './Home.sc';

const HomePage = () => (
  <StyledHomePage>
    <AudioPlayer />
    <Navigation />
    <Logo />
    <ScrollDownIndicator />
  </StyledHomePage>
);

export default HomePage;
