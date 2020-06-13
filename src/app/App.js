import GlobalStyle from './styles/base';
import { hot } from 'react-hot-loader';
import React from 'react';
import Router from './Router';
import { useSelector } from 'react-redux';

const App = () => {
    const isInverted = useSelector(({ buttonInvert }) => buttonInvert.isInverted);

    return (
        <div className={`app ${isInverted ? 'is-inverted' : ''}`}>
            <GlobalStyle />
            <Router />
        </div>
    );
};

export default hot(module)(App);
