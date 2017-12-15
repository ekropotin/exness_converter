import { connect } from 'react-redux';

import { sendShoppingCart, addShoppingItems } from 'actions';
import Buttons from 'components/shoppingCartButtons/ShoppingCartButtons';

const mapDispatchToProps = {
  sendShoppingCart,
  addShoppingItems
};

const mapStateToProps = (state) => ({
  shoppingCartData: state.shoppingCart.itemsList,
  avaliableItemsList: state.avaliableItemsList
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
