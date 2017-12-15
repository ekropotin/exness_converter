import React from 'react';
import { shallow } from 'enzyme';

import SortableTableHeader from 'components/sortableTable/SortableTableHeader';

const columns = [
  {
    title: 'id',
    sortKey: 'id'
  },
  {
    title: 'Product',
    sortKey: 'title'
  },
  {
    title: 'Price, $',
    sortKey: 'price'
  },
  {
    title: 'Qty',
    sortKey: 'qty'
  }
];

describe('<SortableTableHeader />', () => {
  it('should render <th>s', () => {
    const renderedComponent = shallow(
      <SortableTableHeader headerColumns={columns} />
    );
    expect(renderedComponent.find('th')).toHaveLength(columns.length + 1);
  });

  it('should render down arrow', () => {
    const renderedComponent = shallow(
      <SortableTableHeader headerColumns={columns} sortByKey='id' sortAscending />
    );
    expect(renderedComponent.find('th').first().find('.fa').hasClass('fa-arrow-down')).toBe(true);
  });

  it('should render up arrow', () => {
    const renderedComponent = shallow(
      <SortableTableHeader headerColumns={columns} sortByKey='id' />
    );
    expect(renderedComponent.find('th').first().find('.fa').hasClass('fa-arrow-up')).toBe(true);
  });

  it('change sorting order', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = shallow(
      <SortableTableHeader headerColumns={columns} sortByKey='id' sortAscending changeSort={onClickSpy} />
    );

    renderedComponent.find('th').first().simulate('click');
    expect(onClickSpy).toHaveBeenCalledWith('id', false);
  });

  it('change sorting column', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = shallow(
      <SortableTableHeader headerColumns={columns} sortByKey='id' sortAscending changeSort={onClickSpy} />
    );

    renderedComponent.find('th').at(1).simulate('click');
    expect(onClickSpy).toHaveBeenCalledWith('title', true);
  });
});
