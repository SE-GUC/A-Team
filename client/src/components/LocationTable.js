import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import '../css/Table.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 
 
class LocationTable extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='_id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='title'>
            Title
          </TableHeaderColumn>
          <TableHeaderColumn dataField='location'>
            Location
          </TableHeaderColumn>
          <TableHeaderColumn dataField='capacity'>
            Capacity
          </TableHeaderColumn>
          <TableHeaderColumn dataField='booked'>
          Availability
          </TableHeaderColumn>
          
   
        </BootstrapTable>
      </div>
    );
  }
}
 
export default LocationTable;