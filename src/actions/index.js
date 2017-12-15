import ajax from 'utils/fakeAjax';

// Internal actions
const resort = () => ({
  type    : Actions.RESORT
});

const setWaiting = (show = false) => ({
  type    : Actions.SET_WAITING,
  payload : show
});

const setError = (msg = '') => ({
  type    : Actions.SET_ERROR,
  payload : msg
});

const setInfo = (msg = '') => ({
  type    : Actions.SET_INFO,
  payload : msg
});

export const Actions = {
  CHANGE_SORT: 'CHANGE_SORT',
  RESORT: 'RESORT',
  REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
  SET_WAITING: 'SET_WAITING',
  SET_ERROR: 'SET_ERROR',
  SET_INFO: 'SET_INFO',
  CLEAR_MESSAGE: 'CLEAR_MESSAGE',
  ADD_SHOPPING_ITEMS: 'ADD_SHOPPING_ITEMS'
};

export const changeSort = (sortingKey, sortAscending) => ({
  type    : Actions.CHANGE_SORT,
  payload : { sortingKey, sortAscending }
});

export const removeCartItem = id => ({
  type    : Actions.REMOVE_CART_ITEM,
  payload : id
});

export const clearMessage = () => ({
  type    : Actions.CLEAR_MESSAGE
});

export const addShoppingItems = items => dispatch => {
  dispatch({
    type    : Actions.ADD_SHOPPING_ITEMS,
    payload : items
  });
  dispatch(resort());
};

export const sendShoppingCart = data => dispatch => {
  dispatch(setWaiting(true));
  return ajax(data).then((res) => dispatch(setInfo(res)))
    .catch(error => dispatch(setError(error.message)))
    .then(res => dispatch(setWaiting(false)));
};
