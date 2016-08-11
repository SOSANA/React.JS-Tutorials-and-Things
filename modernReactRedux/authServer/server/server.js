// main starting point for app
import Express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import mongoose from 'mongoose';
import User from './routes/user';
import serverConfig from './config/serverConfig';

// Webpack Requirements
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// initialize the express app
const app = new Express();

// DB setup
mongoose.connect(serverConfig.mongoURL, (err) => {
  if (err) {
    console.error('error: Make sure Mongodb is running'); // eslint-disable-line no-console
    throw err;
  }
});

// app middleware setup
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(Express.static(path.resolve(__dirname, '../public')));
app.use('/', User);

// webpack development setup
const compiler = webpack(webpackConfig);

if (app.get('env') === 'development') {
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// start app
app.listen(serverConfig.port, (err) => {
  if (!err) {
    console.log(`Server listening on: ${serverConfig.port}!`); // eslint-disable-line
  }
});
