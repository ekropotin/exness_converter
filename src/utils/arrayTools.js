import _ from 'lodash';

export function stableSort (arr, byField, asc) {
  function compareAsc (a, b) {
    return a[byField] > b[byField] ? 1 : a[byField] < b[byField] ? -1 : 0;
  }

  const original = arr.slice(0);
  arr.sort(function (a, b) {
    var result = asc ? compareAsc(a, b) : -compareAsc(a, b);
    return result === 0 ? original.indexOf(a) - original.indexOf(b) : result;
  });

  return arr;
}

export function mergeWithSum (array1, array2, byField, sumField) {
  return _.map(_.groupBy(array1.concat(array2), 'id'), (objects) => {
    const obj = Object.assign({}, objects[0]);
    obj[sumField] = _.sumBy(objects, sumField);
    return obj;
  });
}
