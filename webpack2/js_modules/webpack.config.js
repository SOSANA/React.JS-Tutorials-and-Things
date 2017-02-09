const path = require('path');

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
      }
    ]
  }
}

module.exports = config;
