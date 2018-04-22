import React from 'react';

// Child Components
import Logo from './../../components/Logo/Logo';
import Navigation from './../../components/Navigation/Navigation';

// Styled Components
import Wrapper from './Home.sc';

export default () => (
  <Wrapper>
    <Navigation />
    <Logo />
  </Wrapper>
);
