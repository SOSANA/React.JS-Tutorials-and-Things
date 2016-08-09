// main starting point for app
import Express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import nunjucks from 'nunjucks';
import mongoose from 'mongoose';

// Webpack Requirements
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// React And Redux Setup
import React from 'react';
import ReactDOM from 'react-dom/server';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import User from './routes/user';
import routes from '../client/routes';
import serverConfig from './config/serverConfig';
import configureStore from '../client/store/configureStore';

// initialize the express app
const app = new Express();

const compiler = webpack(webpackConfig);

// DB setup
mongoose.connect(serverConfig.mongoURL, (err) => {
  if (err) {
    console.error('error: Make sure Mongodb is running'); // eslint-disable-line no-console
    throw err;
  }
});

// view engine setup
nunjucks.configure('public', {
  autoescape: true,
  express: app,
});

// webpack development setup
if (app.get('env') === 'development') {
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

// app middleware setup
// app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'html');
app.use(logger('combined'));
app.use(bodyParser.json('*/*'));
app.use(expressValidator());
app.use(Express.static(path.join(__dirname, 'public')));
app.use('/', User);

// React server rendering
app.use((req, res) => {
  const initialState = {};

  const store = configureStore(initialState);

  Router.match({ routes: routes(store), location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      res.status(500).send(err.message);
    }

    if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
    }

    if (renderProps) {
      const html = ReactDOM.renderToString(React.createElement(Provider, { store },
        React.createElement(Router.RouterContext, renderProps)
      ));

      const page = nunjucks.render('index.html', { html, initialState: JSON.stringify(store.getState()) });
      res.status(200).send(page);
    } else {
      res.sendStatus(404);
    }
  });
});

// start app
app.listen(serverConfig.port, (err) => {
  if (!err) {
    console.log(`Server listening on: ${serverConfig.port}!`); // eslint-disable-line
  }
});

export default app;
