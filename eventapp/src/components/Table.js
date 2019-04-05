import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import '../css/Table.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 
 
class Table extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey={true} dataField='_id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='remaining_places'>
            Remaining Places
          </TableHeaderColumn>
          <TableHeaderColumn dataField='location'>
            Location
          </TableHeaderColumn>
          <TableHeaderColumn dataField='about'>
            About
          </TableHeaderColumn>
          <TableHeaderColumn dataField='price'>
            Price
          </TableHeaderColumn>
          <TableHeaderColumn dataField='type'>
            Type
          </TableHeaderColumn>
          <TableHeaderColumn dataField='is_reviewed'>
            Review
          </TableHeaderColumn>
          <TableHeaderColumn dataField='partnerInitiated'>
            Partner Initiated
          </TableHeaderColumn>
          <TableHeaderColumn dataField='request'>
            Request
          </TableHeaderColumn>   
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table;