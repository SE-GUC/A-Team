import React, { Component } from "react";
import axios from "axios";
import Collapsible from 'react-collapsible';
class Tasksviewapplicants extends Component {
  state = {
    tasks:[]
  };
  
  
  componentDidMount () {
    axios.get(`http://localhost:4000/api/tasks/view_applicants`)
            .then(res => {
              console.log(res)
              this.setState({tasks: res.data.data})
              
            })

            
  }
  render() {
    return (
    
    <ul>
<div class="divider"></div>
  <div class="section">
    <h5>View applicants</h5>
    
      {this.state.tasks.map(task=>(

      <ul class="collapsible popout" data-collapsible="expandable">
  <li class="active">
    <div class="collapsible-header">
  
      <i class="material-icons">arrow_drop_down</i>
      
      <Collapsible trigger={task.name}>
      {task.applicants.map(appin => (
            <li>{appin._id}</li>
          ))}
    </Collapsible>
      <span class="new badge">{task.applicants.length}</span></div>
    
  </li>
</ul>
    ))}</div>
    <div class="divider"></div>
  <div class="section">
    <h5>Assigning applicant</h5>
    <div class="row">
    <form class="col s12">
    <div class="row">
    <div class="input-field col s6">
    <div class="input-field col s6">
    <i class="material-icons prefix">account_circle</i>
    <input id="icon_prefix" type="text" class="validate"></input>
    <label for="icon_prefix">Task Name</label>
    </div>
    <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_telephone" type="tel" class="validate"></input>
          <label for="applicant_name">Applicant name</label>
        </div>
    <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" class="validate"></input>
          <label for="icon_telephone">Telephone</label>
        </div>
    </div>
    </div>
    </form>
    </div>
  </div>
    
    </ul>
    
    )
  }
}


export default Tasksviewapplicants;
