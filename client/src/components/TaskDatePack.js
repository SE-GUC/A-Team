import React, { Component } from 'react';
import NumberSlider from './NumberSlider';

export class TaskDatePack extends Component {
  render() {
    return (
    <div>
        <NumberSlider cid={this.props.id} fieldname={this.props.fieldname} func={this.props.funcs}></NumberSlider>
        
    </div>
    )
  }
}

export default TaskDatePack;