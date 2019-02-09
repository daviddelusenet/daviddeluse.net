import classNames from 'classnames';
import { connect } from 'react-redux';
import GlobalStyle from './styles/base';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import React from 'react';
import Router from './Router';

const App = ({ isInverted }) => {
  const appClasses = classNames('app', {
    'is-inverted': isInverted,
  });

  return (
    <div className={appClasses}>
      <GlobalStyle />
      <Router />
    </div>
  );
};

App.propTypes = {
  isInverted: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ buttonInvert: { isInverted } }) => ({
  isInverted,
});

export default connect(mapStateToProps, null)(hot(module)(App));
