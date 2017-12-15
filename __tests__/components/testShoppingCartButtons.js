import React from 'react';
import { shallow } from 'enzyme';

import ShoppingCartButtons from 'components/shoppingCartButtons/ShoppingCartButtons';
import { MenuItem, Button } from 'react-bootstrap';

const avaliableItems = [
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

describe('<ShoppingCartButtons />', () => {
  it('should render child components', () => {
    const renderedComponent = shallow(
      <ShoppingCartButtons avaliableItemsList={avaliableItems} />
    );

    expect(renderedComponent.find(MenuItem)).toHaveLength(avaliableItems.length);
  });

  it('should call addShoppingItems', () => {
    const onClickSpy = jest.fn();

    const renderedComponent = shallow(
      <ShoppingCartButtons avaliableItemsList={avaliableItems} addShoppingItems={onClickSpy} />
    );

    renderedComponent.find(Button).first().simulate('click');
    expect(onClickSpy).toHaveBeenCalledWith(avaliableItems);
  });
});
