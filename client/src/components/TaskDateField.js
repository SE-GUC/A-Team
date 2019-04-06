import React, { Component } from 'react';
export class TaskDateField extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  handlechange=(e)=>{
    this.props.func(e.target.value) // number + days
    console.log(e.target.value)
  } 
  render() {
    return (
        
        <select onChange={this.handlechange}>
         <option value="Hour(s)"> Hour(s)</option>   
        <option selected value="Day(s)">Day(s)</option>
        <option value="Week(s)">Week(s)</option>
        <option  value="Month(s)">Month(s)</option>
        <option value="Year(s)">Year(s)</option>
      </select>
    ) 
  }
}

export default TaskDateField;