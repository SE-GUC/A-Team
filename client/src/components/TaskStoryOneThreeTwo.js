//THIS IS THE TASK'S 1.3 STORY COMPONONENT, BELOW WE CAN UPDATE ANY TASKS'S "RESPONSE FROM ADMIN",
//THIS COMPONENT EDITS A TASK'S RESP FROM ADMIN
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import M from "materialize-css";

class TaskStoryOneThreeTwo extends Component {
  state = {
    id: "",
    response: "",
    done: false
  };

  // onChange = (e) => {
  //     this.setState({id: e.target.id})
  //     this.setState({ response: e.target.response })
  // }
  handleChange = event => {
    this.setState({ id: event.target.value });
  };
  handleAnotherChange = event => {
    this.setState({ response: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault(); //prevents page from reloading
    const tasking = {
      id: this.state.id,
      response: this.state.response
    };
    console.log(tasking.id);
    console.log(tasking.response);
    const url = "http://localhost:4000/api/tasks/update/" + tasking.id;
    axios.put(url, { response_from_admin: tasking.response }).then(res => {
      this.setState({ response: res.data });
      // this.setState({ done:true })
    });
    var msg="Edited Task's Response from Admin Successfully"
    var html="<span style='color:green'>"+msg+"</span>"
        M.toast({html:html })
  };
  renderLoading() {
    return <div>Loading...</div>;
  }
  renderError() {
    return <div>Ooops, : {this.state.error.message}</div>;
  }
  renderDone() {
    return (
      <ul>
        <li>
          <label>Done</label>
          {this.state.response}
        </li>
      </ul>
    );
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    }
    if (this.state.done) {
      return this.renderDone();
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task ID:
          <input type="text" name="id" onChange={this.handleChange} />
        </label>
        <label>
          Task New Response From Admin:
          <input
            type="text"
            name="response"
            onChange={this.handleAnotherChange}
          />
        </label>

        <button type="submit">Update Task's response from admin</button>
      </form>
    );
  }
}
ReactDOM.render(
  <TaskStoryOneThreeTwo subreddit="reactjs" />,
  document.getElementById("root")
);

export default TaskStoryOneThreeTwo;
