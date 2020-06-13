import React, { FunctionComponent } from 'react';
import GlobalStyle from './styles/base';
import { hot } from 'react-hot-loader';
import Router from './Router';
import useSelector from './state/useSelector';

const App: FunctionComponent = () => {
    const isInverted = useSelector(({ global }) => global.isInverted);

    return (
        <div className={`app ${isInverted ? 'is-inverted' : ''}`}>
            <GlobalStyle />
            <Router />
        </div>
    );
};

export default hot(module)(App);
