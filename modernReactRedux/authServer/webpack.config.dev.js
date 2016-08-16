import path from 'path';
import webpack from 'webpack';

const PATHS = {
  app: path.join(__dirname, 'client/main.js'),
  build: path.join(__dirname, 'public', 'js'),
  style: path.join(__dirname, 'public', 'css'),
};

const webpackConfig = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    PATHS.app,
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.style,
      }
    ]
  }
};

export default webpackConfig;
