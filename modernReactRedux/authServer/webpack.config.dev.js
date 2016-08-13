import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const webpackConfig = {
  devtool: 'eval-cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client',
  './client/main'
  ],
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js',
    publicPath: '/js/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({ multistep: true }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]", {
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/, loader: ExtractTextPlugin.extract(
				"style-loader",
				"css-loader?sourceMap",
				{
					publicPath: "/css/"
				}
      )},
      {
        test: /\.js$/, // test for '.js' file, if it passes use the loader
        exclude: /node_modules/, // don't include node modules
        loader: 'babel', // short for 'babel-loader'
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  );
}

export default webpackConfig;
