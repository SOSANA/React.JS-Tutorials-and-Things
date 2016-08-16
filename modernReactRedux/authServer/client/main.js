import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import getRoutes from './routes';
import rootReducer from './reducers';
import { AUTH_USER } from './actions/types';
// import '../public/css/style.css'; // importing css so webpack knows that its a dependency

const logger = createLogger();
const token = localStorage.getItem('token');

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// if we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

if (module.hot) {
    // Enable hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers/index'); // eslint-disable-line
    store.replaceReducer(nextReducer);
  });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes} />
  </Provider>
  , document.querySelector('.container'));
