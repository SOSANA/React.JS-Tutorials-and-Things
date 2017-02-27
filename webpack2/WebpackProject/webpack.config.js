const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// grabbing all project dependencies
const VENDOR_LIBS = [
  'react', 'lodash', 'redux', 'react-redux', 'react-dom',
  'faker', 'react-input-range', 'redux-form', 'redux-thunk'
];

module.exports = {
  // passing object for multiple entry points
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js' // grabs entry.bundle name key ex: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    // this helps with NODE_ENV and webpack.DefinePlugin uses window.scope to define env variables
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      // setting for production
      // 'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // this helps solve double including VENDOR_LIBS
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'] // manifest helps tell browser when vendor changes
    }),
    // this helps manage script tags for html in dist folder and manually adds a script tag
    new HtmlWebpackPlugin({
      template: 'src/index.html' // location of html
    })
  ]
};
