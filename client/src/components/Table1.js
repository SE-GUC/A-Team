import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import '../css/Table.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 
 
class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='_id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='skills'>
            Skills
          </TableHeaderColumn>
          <TableHeaderColumn dataField='time_of_post'>
            Time of Post
          </TableHeaderColumn>
          <TableHeaderColumn dataField='time_of_review'>
            Review Time
          </TableHeaderColumn>
          <TableHeaderColumn dataField='monetary_compensation'>
            Monetary Compensation
          </TableHeaderColumn>
          <TableHeaderColumn dataField='price'>
            Price
          </TableHeaderColumn>
          <TableHeaderColumn dataField='is_assigned'>
            Assigned State
          </TableHeaderColumn>
          <TableHeaderColumn dataField='time_expected'>
            Expected Time
          </TableHeaderColumn>
          <TableHeaderColumn dataField='level_of_commitment'>
            Commitment Level
          </TableHeaderColumn>
          <TableHeaderColumn dataField='is_reviewed'>
            Review State
          </TableHeaderColumn>
          <TableHeaderColumn dataField='experience_needed'>
            Required Experience
          </TableHeaderColumn>
          <TableHeaderColumn dataField='response_from_admin'>
            Admin Response
          </TableHeaderColumn>
   
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table1;