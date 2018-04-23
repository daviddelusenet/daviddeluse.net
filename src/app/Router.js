import React from 'react';

// Child Components
import HomePage from './pages/Home/Home';

// Utils
import TitleChanger from './utils/TitleChanger';

export default class Router extends React.Component {
  componentDidMount() {
    this.titleChanger = new TitleChanger();
  }

  render() {
    return <HomePage />;
  }
}
