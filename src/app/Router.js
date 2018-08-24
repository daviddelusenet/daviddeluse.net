import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Child Components
import ErrorPage from './pages/Error/Error';
import HomePage from './pages/Home/Home';

// Utils
import TitleChanger from './utils/TitleChanger';

export default class Router extends React.PureComponent {
  componentDidMount() {
    this.titleChanger = new TitleChanger();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
