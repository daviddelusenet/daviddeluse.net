import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import initBaseStyles from './app/styles/base';

// Initialize the base styles and render the application
initBaseStyles();
ReactDOM.render(<App />, document.getElementById('root'));
