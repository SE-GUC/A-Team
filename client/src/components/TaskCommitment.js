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
      
    <div>
      <div className='input-field col s6'>
      <p>Level of Commitment:</p> 
    </div>
    <div className='input-field col s6'>
     <select onChange={this.handlechange} className='browser-default' >
            <option value="Very High"> Very High</option>   
            <option  value="High">High</option>
            <option selected value="Moderate">Moderate</option>
            <option value='Low'>Low</option>
        </select>
    </div>
    </div>
    
    )
  }
}

export default TaskCommitment;