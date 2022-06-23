const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html',
    })
  ],
  devServer: {
    static: {
      publicPath: '/build',
      directory: path.join(__dirname, 'build'),
    },
  },
  module: {
    rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/, 
          use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
    ]
  }
}


// const HtmlWebpackPlugin = require ('html-webpack-plugin');
// const path = require('path');
// const { setgroups } = require('process');
// const { ModuleFilenameHelpers, SourceMapDevToolPlugin } = require('webpack');
// require('dotenv').config();

// module.exports = {
//     mode: process.env.NODE_ENV,
//     // mode: "development",
//     // entry will 
//     entry: "./index.js",
//     output: {
//         path: path.resolve(__dirname, './build'),
//         filename: "bundle.js"
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-react']
//                     }

//             }
//             },

//             {
//                 test: /\.css$/,
//                 exclude: /node_modules/,
//                 use: [
//                     "style-loader",
//                     "css-loader",
//                 ]
//             }

//         ]
//     },

//     devServer: {
//         static: {
//             publicPath: '/build',
//             directory: path.resolve(__dirname, 'build'),
//         },
//         proxy: {
//             '/api': 'http://localhost3000'
//         }
//     },

//     plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})],

// };

// how do I even know if this is working?