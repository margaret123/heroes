const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'heroes.js',
        path: './dist'

    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            },
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 8888
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            title: 'Heroes',
            inject: 'body'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8888'
        })
    ]
};
