// @flow
import React from 'react';
import { Button, Table } from 'react-bootstrap';

import SortableTableHeader from './SortableTableHeader';
import type { ActionCreator } from 'actions';
import type { HeaderColumn } from 'components/types';

import './SortableTable.scss';

type Props = {
  +headerColumns: Array<HeaderColumn>,
  +rowsData: Array<any>,
  +sortByKey: string,
  +sortAscending?: boolean,
  +changeSort: ActionCreator,
  +removeCartItem: ActionCreator
};

export const SortableTable = (props: Props) => {
  return (
    <Table striped bordered condensed hover>
      <thead>
        <SortableTableHeader headerColumns={props.headerColumns} sortByKey={props.sortByKey}
          sortAscending={props.sortAscending} changeSort={props.changeSort} />
      </thead>
      <tbody>
        {props.rowsData.map((item, index) =>
          <tr key={item.id}>
            <td>{ item.id }</td>
            <td>{ item.title }</td>
            <td>{ item.price }</td>
            <td>{ item.qty }</td>
            <td>
              <Button bsStyle='danger' onClick={() => props.removeCartItem(item.id)}>X</Button>
            </td>
          </tr>
        ) }
      </tbody>
    </Table>
  );
};

export default SortableTable;
