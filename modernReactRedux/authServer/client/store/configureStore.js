import { applyMiddleware, compose, createStore } from 'redux'; // eslint-disable-line
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
