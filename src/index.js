// Import React stuff
import React from 'react';
import ReactDOM from 'react-dom';

// Import the application
import App from './app/App';

// Import the  base styles
import initBaseStyles from './app/styles/base';

// Initialize the base styles
initBaseStyles();

// Render the application
const root = document.getElementById('root');
ReactDOM.render(<App />, root);
