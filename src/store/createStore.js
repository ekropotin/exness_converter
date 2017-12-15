import { applyMiddleware, compose, createStore as createReduxStore } from 'redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';

const defaultState = {
  shoppingCartHeaderColumns: [
    {
      // TODO: User sortKeys from Constants?
      title: 'id',
      sortKey: 'id'
    },
    {
      title: 'Product',
      sortKey: 'title'
    },
    {
      title: 'Price, $',
      sortKey: 'price'
    },
    {
      title: 'Qty',
      sortKey: 'qty'
    }
  ],
  shoppingCartList: [
    {
      id: 1,
      title: 'Macbook Air 13',
      price: '1800',
      qty: 1
    },
    {
      id: 2,
      title: 'Macbook Pro',
      price: '1500',
      qty: 1
    }
  ],
  shoppingCartSorting: { sortKey: 'id', sortAscending: true }
};

export const createStore = (initialState = defaultState) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
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

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  // TODO: React router 4
  // store.unsubscribeHistory = browserHistory.listen(updateLocation(store));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;
      store.replaceReducer(reducers(store.asyncReducers));
    });
  }

  return store;
};
