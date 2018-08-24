const webpack = require('webpack');
const { resolve } = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = () => (
  merge(baseConfig(), {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: resolve(__dirname, './../dist'),
      historyApiFallback: true,
      hot: true,
      open: true,
      publicPath: '/',
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
    ],
  })
);
