import React from 'react';
import PropTypes from 'prop-types';
import SortableTableHeader from './SortableTableHeader';
import './SortableTable.scss';

export const SortableTable = ({ headerColumns, rowsData, sortByKey, sortAscending, changeSort }) => (
  <table className='table'>
    <thead>
      <SortableTableHeader headerColumns={headerColumns} sortByKey={sortByKey} sortAscending={sortAscending} changeSort={changeSort}/>
    </thead>
    <tbody>
      {rowsData.map( (item, index) => 
        <tr key={item.id}>
          <td>{ item.id }</td>
          <td>{ item.title }</td>
          <td>{ item.price }</td>
          <td>{ item.qty }</td>
        </tr>
      ) }
    </tbody>
  </table>
);

SortableTable.propTypes = {
  
};

export default SortableTable;
