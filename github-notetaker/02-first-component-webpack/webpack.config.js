module.exports = {
  // pointing webpack to root component and knows where to start processing all
  // our jsx including our children compoents
  entry: "./app/components/Main.js",
  // tells webpack where to put that new file once its done transpiling our jsx
  // to javascript
  output: {
    filename: "public/bundle.js"
  },
  // here we are telling webpack what to do with the Main.js code and all of
  // its children components
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        // this is the babel-loader we downloaded earlier, now we tell babel what
        // transformations we would like for it to do with our code
        loader: 'babel',
        query: {
          // this is the babel-preset-react and babel-preset-es2015 we downloaded
          // earlier
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
