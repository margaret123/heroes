const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'heroes.js',
        path: './dist'

    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                    /\.test\.js$/
                ],
                loader: 'isparta-instrumenter-loader'
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
        contentBase: './dist',
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        }
    }
};
