// @flow
import { createSelector } from 'reselect';

import type { State, SelectedBoxId } from 'store/stateTypes';

export const getSelectedBoxId = (state: State): SelectedBoxId => state.currencyConverter.currencyBoxes.selectedBox;
