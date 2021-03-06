const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { distPath, publicPath } = require('./paths');

module.exports = () => ({
    entry: {
        'daviddeluse.net': resolve(__dirname, './../src/index.tsx'),
    },
    output: {
        path: distPath,
        filename: '[name].[hash].min.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: publicPath,
                    to: distPath,
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './../src/templates/index.html'),
        }),
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
});
