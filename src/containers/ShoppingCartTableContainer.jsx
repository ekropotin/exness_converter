import { connect } from 'react-redux';

import { changeSort, removeCartItem } from 'actions';
import SortableTable from 'components/sortableTable/SortableTable';

const mapDispatchToProps = {
  changeSort, removeCartItem
};

const shoppingCartHeaderColumns = [
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

const mapStateToProps = (state) => ({
  headerColumns: shoppingCartHeaderColumns,
  rowsData: state.shoppingCart.itemsList,
  sortByKey: state.shoppingCart.sortingKey,
  sortAscending: state.shoppingCart.sortAscending
});

export default connect(mapStateToProps, mapDispatchToProps)(SortableTable);
