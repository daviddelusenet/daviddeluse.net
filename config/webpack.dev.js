const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = () => {
  return(
    merge(baseConfig(), {
      devtool: 'inline-source-map'
    })
  )
};
