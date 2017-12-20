import { stableSort, mergeWithSum } from 'utils/arrayTools';

const inputArray = [
  {
    id: 8,
    title: 'Test1',
    qty: 1
  },
  {
    id: 3,
    title: 'Test3',
    qty: 1
  },
  {
    id: 1,
    title: 'Test3',
    qty: 1
  },
  {
    id: 4,
    title: 'Test2',
    qty: 1
  }

];

describe('Test for arrayTools', () => {
  it('test sort ascending', () => {
    const res = stableSort(inputArray, 'id', true);
    expect(res[0].id === 1);
    expect(res[0].id === 3);
    expect(res[0].id === 4);
    expect(res[0].id === 8);
  });

  it('test sort descending', () => {
    const res = stableSort(inputArray, 'id', false);
    expect(res[0].id === 8);
    expect(res[0].id === 4);
    expect(res[0].id === 3);
    expect(res[0].id === 1);
  });

  it('test sort is stable', () => {
    const res = stableSort(inputArray, 'title', true);
    expect(res[2].id === 3);
    expect(res[3].id === 1);
  });

  it('test mergeWithSum', () => {
    const addItems = [
      {
        id: 3,
        title: 'Test3',
        qty: 3
      }
    ];

    const res = mergeWithSum(inputArray, addItems, 'id', 'qty');
    expect(res.length === 4);
    const item = res.find(item => (item.id === 3));
    expect(item.qty === 4);
  });
});
