import React, { Component } from "react";
import axios from "axios";
class Tasksviewapplicants extends Component {
  state = {
    tasks: []
  };
  componentDidMount() {
    axios.get(`https://ateamse.herokuapp.com/api/tasks/read/`).then(res => {
      console.log(res);
      const tasks = res.data.data;
      this.setState({ tasks });
    });
  }
  render() {
    return (
      <ul>
        {this.state.tasks.map(task => (
          <li key={task._id}>{task.applicants}</li>
        ))}
      </ul>
    );
  }
}

export default Tasksviewapplicants;
