import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import '../css/Table.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 
 
class FeedbacksTable extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey={true} dataField='_id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='comment'>
            Comment
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default FeedbacksTable;