import { applyMiddleware, compose, createStore } from 'redux'; // eslint-disable-line
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import { AUTH_USER } from '../actions/types';

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, logger)
    )
  );

  const token = localStorage.getItem('token');

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
