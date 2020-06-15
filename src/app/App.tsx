import React, { FunctionComponent } from 'react';
import GlobalStyle from './styles/base';
import { hot } from 'react-hot-loader';
import Router from './Router';
import { themeDark } from './styles/themes/dark';
import { themeLight } from './styles/themes/light';
import { ThemeProvider } from 'styled-components';
import useSelector from './state/useSelector';

const App: FunctionComponent = () => {
    const isInverted = useSelector(({ global }) => global.isInverted);

    return (
        <ThemeProvider theme={isInverted ? themeLight : themeDark}>
            <div className={`app ${isInverted ? 'is-inverted' : ''}`}>
                <GlobalStyle />
                <Router />
            </div>
        </ThemeProvider>
    );
};

export default hot(module)(App);
