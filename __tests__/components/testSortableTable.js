import React from 'react';
import { shallow } from 'enzyme';

import SortableTable from 'components/sortableTable/SortableTable';
import SortableTableHeader from 'components/sortableTable/SortableTableHeader';

const cartItems = [
  {
    'id': 1,
    'title': 'Macbook Air 13',
    'price': '1800',
    'qty': 1
  },
  {
    'id': 2,
    'title': 'Macbook Pro 15',
    'price': '1500',
    'qty': 1
  }
];

describe('<SortableTable />', () => {
  it('should render header', () => {
    const renderedComponent = shallow(
      <SortableTable rowsData={cartItems} />
    );

    expect(renderedComponent.contains(<SortableTableHeader />)).toBe(true);
  });
});
