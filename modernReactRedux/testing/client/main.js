import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import getRoutes from './routes';
import rootReducer from './reducers';
import '../public/css/style.css';

const logger = createLogger();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

/*
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers');
    store.replaceReducer(nextReducer);
  });
}
*/
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes} />
  </Provider>
  , document.querySelector('.container'));
