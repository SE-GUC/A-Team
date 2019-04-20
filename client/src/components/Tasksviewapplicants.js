import React, { Component } from "react";
import axios from "axios";
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
        {this.state.tasks.map(task => (
          <li>
            {task.name}
          <ul>
         {task.applicants.map(appin => (
            <li>{appin._id}</li>
          ))}
        </ul></li>
        ))}
      </ul>
    );
  }
}


export default Tasksviewapplicants;
