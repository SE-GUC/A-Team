import React, { Component } from 'react';


export class TaskCommitment extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  handlechange=(e)=>{
    this.props.func(e.target.value)
    console.log(e.target.value)
  } 
  render() {
    return (
    <div className={{fontsize:'17px',padding:'5px'}}>
        Level of Commitment:
        <select onChange={this.handlechange} >
            <option value="Very High"> Very High</option>   
            <option  value="High">High</option>
            <option selected value="Moderate">Moderate</option>
            <option value='Low'>Low</option>
        </select>
        
    </div>
    )
  }
}

export default TaskCommitment;