import React from 'react';
import PropTypes from 'prop-types';
import './SortableTableHeader.scss';

const SortableTableHeader = ({ headerColumns, sortByKey, sortAscending, changeSort }) => {
  function renderArrow (columnSortKey) {
    if (columnSortKey !== sortByKey) {
      return null;
    }
    if (sortAscending) {
      return (<i className='fa fa-arrow-down' aria-hidden='true' />);
    } else {
      return (<i className='fa fa-arrow-up' aria-hidden='true' />);
    }
  }

  function onItemClick (sortKey) {
    let asc = true;
    if (sortKey === sortByKey) {
      asc = !sortAscending;
    }
    changeSort(sortKey, asc);
  }

  return (
    <tr>
      { headerColumns.map((column, index) =>
        <th className='sorting-table__table-header' scope='col' onClick={() => onItemClick(column.sortKey)} key={column.sortKey}>{ column.title }
          {renderArrow(column.sortKey)}
        </th>
      ) }
      <th />
    </tr>
  );
};

// TODO: looks like this doesn't work
SortableTableHeader.propTypes = {
  headerColumns: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      sortKey: PropTypes.string.isRequired
    }
  )).isRequired
};

export default SortableTableHeader;
