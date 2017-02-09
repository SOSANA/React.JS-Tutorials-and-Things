const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // plugin for css bundles

const config = {
  // entry property kick starts the entry point of the app
  entry: './src/index',
  // output our bundled js file
  output: {
    path: path.resolve(__dirname, 'build'), // the path to put the actual file, must be absolute path
    filename: 'bundle.js' // what the actual file name is called that is created
  },
  module: { // loaders apart of module system
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/ // reg ex looks for .js files when importing in each file
      },
      {
        // order important, loaded right to left, loads script for you in header but bundles it all into
        // one file with bundle.js rather than seperate file
        // use: ['style-loader', 'css-loader'],
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/ // reg ex looks for .css files when importing in each file
      }
    ]
  },
  plugins: [
    // tells ExtractTextPlugin to find any files with .css, if we have multiple .css files it will be
    // stuffed into this one file
    new ExtractTextPlugin('style.css')
  ]
}

module.exports = config;
