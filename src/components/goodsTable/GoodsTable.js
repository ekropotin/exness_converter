import React from 'react';
import PropTypes from 'prop-types';
import './GoodsTable.scss';

export const GoodsTable = ({ counter, increment, doubleAsync }) => (
  <table className='table'>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Product</th>
        <th scope='col'>Price, $</th>
        <th scope='col'>Qty</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Macbook Air 13"</td>
        <td>1300</td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
);

GoodsTable.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired
};

export default GoodsTable;
