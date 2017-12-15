function stableSort (arr, byField, asc) {
  function compareAsc (a, b) {
    return a[byField] > b[byField] ? 1 : a[byField] < b[byField] ? -1 : 0;
  }
  function compareDesc (a, b) {
    return a[byField] < b[byField] ? 1 : a[byField] > b[byField] ? -1 : 0;
  }

  const compare = asc ? compareAsc : compareDesc;
  const original = arr.slice(0);
  arr = arr.slice(0);

  arr.sort(function (a, b) {
    var result = compare(a, b);
    return result === 0 ? original.indexOf(a) - original.indexOf(b) : result;
  });

  return arr;
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  // TODO: from constants
  CHANGE_SORT: (state, action) => {
    return stableSort(state, action.payload.sortKey, action.payload.sortAscending);
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function sortItemsReducer (state = [], action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
