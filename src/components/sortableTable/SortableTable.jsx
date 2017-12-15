import React from 'react';
import PropTypes from 'prop-types';
import SortableTableHeader from './SortableTableHeader';
import { Button, Table } from 'react-bootstrap';

import './SortableTable.scss';

export const SortableTable = ({ headerColumns, rowsData, sortByKey, sortAscending, changeSort, removeCartItem }) => {
  return (
    <Table striped bordered condensed hover>
      <thead>
        <SortableTableHeader headerColumns={headerColumns} sortByKey={sortByKey} sortAscending={sortAscending} changeSort={changeSort} />
      </thead>
      <tbody>
        {rowsData.map((item, index) =>
          <tr key={item.id}>
            <td>{ item.id }</td>
            <td>{ item.title }</td>
            <td>{ item.price }</td>
            <td>{ item.qty }</td>
            <td>
              <Button bsStyle='danger' onClick={() => removeCartItem(item.id)}>X</Button>
            </td>
          </tr>
        ) }
      </tbody>
    </Table>
  );
};

SortableTable.propTypes = {

};

export default SortableTable;
