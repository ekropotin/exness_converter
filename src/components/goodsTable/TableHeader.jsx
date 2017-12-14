import React from 'react';
import PropTypes from 'prop-types';
import './GoodsTable.scss';

export const TableHeader = ({ headerColumns }) => (
  <tr>
    { headerColumns.map( (column, index) =>
      <th scope='col'>{ column.title }
        <i className="fa fa-arrow-down" aria-hidden="true"></i>
      </th>
    ) }
  </tr>
);

//TODO: looks like this doesn't work
TableHeader.propTypes = {
  headerColumns: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      sortKey: PropTypes.string.isRequired
    }
  )).isRequired
};

export default TableHeader;
