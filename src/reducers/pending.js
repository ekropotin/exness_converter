import { Actions } from 'actions';
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [Actions.SET_WAITING]: (state, action) => (action.payload)
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function (state = false, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
