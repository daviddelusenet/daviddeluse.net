const webpack = require('webpack');
const { resolve } = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base');

module.exports = () => {
  return(
    merge(baseConfig(), {
      devtool: 'source-map',
      optimization: {
        minimizer: [
          new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
              ecma: 8
            }
          })
        ]
      }
    })
  )
};
