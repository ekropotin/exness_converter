import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import './ShoppingCartButtons.scss';

const Buttons = ({ avaliableItemsList, shoppingCartData, sendShoppingCart, addShoppingItems }) => {
  return (
    <div className='shopping-cart-buttons'>
      <ButtonGroup>
        <Button bsStyle='primary' onClick={() => addShoppingItems(avaliableItemsList)}>Add All</Button>
        <DropdownButton bsStyle='primary' title='' id='bg-nested-dropdown'>
          {avaliableItemsList.map((item, index) =>
            <MenuItem key={item.id} onClick={() => addShoppingItems(item)}>{item.title}</MenuItem>
          ) }
        </DropdownButton>
      </ButtonGroup>
      <Button bsStyle='success' onClick={() => sendShoppingCart(shoppingCartData)}>Send to Server</Button>
    </div>
  );
};

export default Buttons;
