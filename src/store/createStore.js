import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore as createReduxStore } from 'redux';

import makeRootReducer from 'reducers';

export const createStore = (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [persistState('currencyBoxes')];
  let composeEnhancers = compose;

  if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );
  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const reducers = require('reducers').default;
      store.replaceReducer(reducers(store.asyncReducers));
    });
  }

  return store;
};
