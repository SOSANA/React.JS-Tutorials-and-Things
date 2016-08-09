import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import { AUTH_USER } from '../actions/types';

export default function configureStore(initialState) {
  const logger = createLogger();
  const token = localStorage.getItem('token');
  const store = createStore(
    rootReducer,
    initialState,
      applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  // if we have a token, consider the user to be signed in
  if (token) {
    // we need to update application state
    store.dispatch({ type: AUTH_USER });
  }


  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
