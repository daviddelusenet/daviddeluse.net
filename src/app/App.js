import React from 'react';
import { hot } from 'react-hot-loader';
import Router from './Router';

// Styles
import GlobalStyle from './styles/base';

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Router />
  </React.Fragment>
);

export default hot(module)(App);
