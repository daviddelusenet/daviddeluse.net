import React, { FunctionComponent } from 'react';
import Controls from '../../components/Controls/Controls';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import ScrollDownIndicator from '../../components/ScrollDownIndicator/ScrollDownIndicator';
import { StyledHomePage } from './Home.sc';

const HomePage: FunctionComponent = () => (
    <StyledHomePage>
        <Controls />
        <Navigation />
        <Logo />
        <ScrollDownIndicator />
    </StyledHomePage>
);

export default HomePage;
