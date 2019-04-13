import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import '../css/Table.css';
//import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'


class onepsevenTable extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='applicants'>
            Applicants
          </TableHeaderColumn>


        </BootstrapTable>
      </div>
    );
  }
}

export default onepsevenTable; 