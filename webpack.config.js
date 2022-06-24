const HtmlWebpackPlugin = require ('html-webpack-plugin');
const path = require('path');
const { setgroups } = require('process');
const { ModuleFilenameHelpers, SourceMapDevToolPlugin } = require('webpack');
require('dotenv').config();

module.exports = {
    mode: process.env.NODE_ENV,
    // entry will 
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }

            }
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            }

        ]
    },

    devServer: {
        // static: {
        //     publicPath: '/build',
        //     directory: path.resolve(__dirname, 'build'),
        // },
        proxy: {
            '/api': 'http://localhost:3000'
        }
    },

    plugins: [new HtmlWebpackPlugin({template: 'index.html'})],

};