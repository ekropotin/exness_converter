// @flow

import type { State, CurrencyBoxIndex } from 'store/stateTypes';

export const Actions = {
  CHANGE_BOX: 'CHANGE_BOX',
  CHANGE_CURRENCY: 'CHANGE_CURRENCY',
  UPDATE_BOX_VALUE: 'UPDATE_BOX_VALUE',
  CALCULATE_PAIR: 'CALCULATE_PAIR'
};

/* eslint-disable */
export type ChangeBox       = { +type: 'CHANGE_BOX', +payload: CurrencyBoxIndex };
export type ChangeCurrency  = { +type: 'CHANGE_CURRENCY', +payload: string };
export type UpdateBoxValue  = { +type: 'UPDATE_BOX_VALUE', +payload: number };
export type CalculatePair   = { +type: 'CALCULATE_PAIR' };
/* eslint-enable */

export type Action = ChangeBox | ChangeCurrency | UpdateBoxValue | CalculatePair;

export type ActionCreator = (...args: Array<any>) => Action;

/* eslint-disable no-use-before-define */
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
export type GetState = () => State;
/* eslint-enable no-use-before-define */

// Internal actions
const _changeCurrency = (code: string): ChangeCurrency => ({ type: Actions.CHANGE_CURRENCY, payload: code });

const _calculatePair = (): CalculatePair => ({ type: Actions.CALCULATE_PAIR });

const _updateBoxValue = (value: number): UpdateBoxValue => ({ type: Actions.UPDATE_BOX_VALUE, payload: value });

// Exported Actions
export function changeCurrency (code: string): ThunkAction {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch(_changeCurrency(code));
    dispatch(_calculatePair());
  };
}

export function updateBoxValue (value: number): ThunkAction {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch(_updateBoxValue(value));
    dispatch(_calculatePair());
  };
}

export const changeSelectedBox = (boxId: CurrencyBoxIndex): ChangeBox => ({ type: Actions.CHANGE_BOX, payload: boxId });
