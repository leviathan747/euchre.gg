const webpack = require('webpack');
const resolve = require('path').resolve;

const config = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: ['@babel/polyfill',  __dirname + '/js/index.jsx'],
  output:{
    path: resolve('./docs/'),
    filename: 'euchre.js',
    publicPath: resolve('./docs/')
  },
  resolve: {
    extensions: ['.js','.jsx','.css']
  },
  module: {
    rules: [
    {
      test: /\.jsx?/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '/fonts/',
            publicPath: '/docs/fonts'
          }
        }
      ]
    }]
  }
};
module.exports = config;
