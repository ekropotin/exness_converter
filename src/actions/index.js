// @flow

import ajax from 'utils/fakeAjax';
import type { Product, State, ShoppingCartItem } from 'store/stateTypes';

export const Actions = {
  CHANGE_SORT: 'CHANGE_SORT',
  RESORT: 'RESORT', // internal
  REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
  SET_WAITING: 'SET_WAITING', // internal
  SET_ERROR: 'SET_ERROR',
  SET_INFO: 'SET_INFO',
  CLEAR_MESSAGE: 'CLEAR_MESSAGE',
  ADD_SHOPPING_ITEMS: 'ADD_SHOPPING_ITEMS'
};

export type ProductOrList = Product | Array<Product>;
/* eslint-disable */
export type Resort          = {+type: 'RESORT' };
export type SetWaiting      = {+type: 'SET_WAITING', +payload: boolean };
export type ChangeSort      = {+type: 'CHANGE_SORT', +payload: { +sortingKey: string, +sortAscending: boolean} };
export type RemoveItem      = {+type: 'REMOVE_CART_ITEM', +payload: string };
export type SetError        = {+type: 'SET_ERROR', +payload: string };
export type SetInfo         = {+type: 'SET_INFO', +payload: string };
export type ClearMessage    = {+type: 'CLEAR_MESSAGE' };
export type AddShoppingItem = {+type: 'ADD_SHOPPING_ITEMS', +payload: ProductOrList };
/* eslint-enable */

export type Action = ChangeSort | Resort | RemoveItem | SetWaiting | SetError |
                     SetInfo | ClearMessage | AddShoppingItem;

export type ActionCreator = (...args: Array<any>) => Action;

/* eslint-disable no-use-before-define */
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
export type GetState = () => State;
/* eslint-enable no-use-before-define */

// Internal actions
const _resort = (): Resort => ({
  type    : Actions.RESORT
});

const _setWaiting = (show: boolean = false): SetWaiting => ({
  type    : Actions.SET_WAITING,
  payload : show
});

const _setError = (msg: string = ''): SetError => ({
  type    : Actions.SET_ERROR,
  payload : msg
});

const _setInfo = (msg: string = ''): SetInfo => ({
  type    : Actions.SET_INFO,
  payload : msg
});

const _addItems = (items: ProductOrList): AddShoppingItem => ({
  type    : Actions.ADD_SHOPPING_ITEMS,
  payload : items
});

const _removeCartItem = (id: string): RemoveItem => ({
  type    : Actions.REMOVE_CART_ITEM,
  payload : id
});

export const changeSort = (sortingKey: string, sortAscending: boolean): ChangeSort => ({
  type    : Actions.CHANGE_SORT,
  payload : { sortingKey, sortAscending }
});

export const clearMessage = (): ClearMessage => ({
  type    : Actions.CLEAR_MESSAGE
});

export function removeCartItem (id: string): ThunkAction {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch(_removeCartItem(id));
    dispatch(_resort());
  };
}

export function addShoppingItems (items: ProductOrList): ThunkAction {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch(_addItems(items));
    dispatch(_resort());
  };
}

export function sendShoppingCart (data: Array<ShoppingCartItem>): ThunkAction {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch(_setWaiting(true));
    ajax(data).then((res) => dispatch(_setInfo(res)))
      .catch(error => dispatch(_setError(error.message)))
      .then(res => dispatch(_setWaiting(false)));
  };
}
