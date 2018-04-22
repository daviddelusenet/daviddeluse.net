const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const baseConfig = require('./webpack.base');

module.exports = (env = {}) => (
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
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: env.analyze === 'true' ? 'server' : 'disabled'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new CompressionPlugin()
    ]
  })
);
