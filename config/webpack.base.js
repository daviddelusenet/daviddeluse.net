const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { distPath } = require('./paths');

module.exports = () => ({
  entry: {
    'daviddeluse.net': ['babel-polyfill', resolve(__dirname, './../src/index.js')],
  },
  output: {
    path: distPath,
    filename: '[name].[hash].min.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([distPath], {
      allowExternal: true,
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './../src/templates/index.html'),
    }),
  ],
});
