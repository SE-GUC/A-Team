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
      <table>
        <tr><td><p>Level Of Commitment:</p></td>
            <td>
        <select onChange={this.handlechange}>
            <option value="Very High"> Very High</option>   
            <option  value="High">High</option>
            <option selected value="Moderate">Moderate</option>
            <option value='Low'>Low</option>
        </select></td>
        </tr>
      </table>
    </div>
    )
  }
}

export default TaskCommitment;