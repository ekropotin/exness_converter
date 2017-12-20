// @flow
import React from 'react';

import type { ActionCreator } from 'actions';
import type { HeaderColumn } from 'components/types';

import './SortableTableHeader.scss';

type Props = {
  +headerColumns: Array<HeaderColumn>,
  +sortByKey: string,
  +sortAscending?: boolean,
  +changeSort: ActionCreator
};

const SortableTableHeader = (props: Props) => {
  function renderArrow (columnSortKey) {
    if (columnSortKey !== props.sortByKey) {
      return null;
    }
    if (props.sortAscending) {
      return (<i className='fa fa-arrow-down' aria-hidden='true' />);
    } else {
      return (<i className='fa fa-arrow-up' aria-hidden='true' />);
    }
  }

  function onItemClick (sortKey) {
    let asc = true;
    if (sortKey === props.sortByKey) {
      asc = !props.sortAscending;
    }
    props.changeSort(sortKey, asc);
  }

  return (
    <tr>
      { props.headerColumns.map((column, index) =>
        <th className='sorting-table__table-header' scope='col' onClick={() => onItemClick(column.sortKey)}
          key={column.sortKey}>{ column.title }
          {renderArrow(column.sortKey)}
        </th>
      ) }
      <th />
    </tr>
  );
};

export default SortableTableHeader;
