import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Child components
import ErrorPage from './pages/Error/Error';
import HomePage from './pages/Home/Home';
import TitleChanger from './components/TitleChanger/TitleChanger';

const Router = () => (
  <React.Fragment>
    <TitleChanger />
    <BrowserRouter>
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);

export default Router;
