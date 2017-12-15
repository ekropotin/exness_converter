// ------------------------------------
// Constants
// ------------------------------------
export const CHANGE_SORT = 'CHANGE_SORT';

// ------------------------------------
// Actions
// ------------------------------------
export function changeSort (sortKey, sortAscending) {
  return {
    type    : CHANGE_SORT,
    payload : { sortKey, sortAscending }
  };
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGE_SORT]: (state, action) => {
    const payload = action.payload;
    return { ...state, ...payload };
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function tableSortReducer (state = null, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
