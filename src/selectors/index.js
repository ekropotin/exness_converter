// @flow
import { createSelector } from 'reselect';

import type { State, CurrencyBoxIndex } from 'store/stateTypes';

export const getCurrencyBoxesState = (state: State) => state.currencyBoxes;
