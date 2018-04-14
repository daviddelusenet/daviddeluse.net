const webpack = require('webpack');
const path = require('path');

module.exports = () => {
  return({
    entry: {
      app: path.resolve(__dirname, './../src/index.js')
    }
  });
};
