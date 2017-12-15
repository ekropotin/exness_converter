import { Actions } from 'actions';
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [Actions.SET_INFO]: (state, action) => ({ info: action.payload, error: null }),
  [Actions.SET_ERROR]: (state, action) => ({ info: null, error: action.payload }),
  [Actions.CLEAR_MESSAGE]: (state, action) => ({ info: null, error: null })
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function (state = false, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
