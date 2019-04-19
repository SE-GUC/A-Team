//THIS IS THE TASK'S 1.3 STORY COMPONONENT, BELOW WE CAN UPDATE ANY TASKS'S "RESPONSE FROM ADMIN",
//AND VIEW TASKS' DESCRIPTIONS
import React, { Component } from "react";

import ReactDOM from "react-dom";

import axios from "axios";



class TaskStoryOneThreeOne extends Component {
  state = {
    id: "",
    desc: "",
    done: false
  };

  // onChange = (e) => {
  //     this.setState({id: e.target.id})
  // }
  handleChange = event => {
    this.setState({ id: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault(); //prevents page from reloading
    const tasking = {
      id: this.state.id
    };
    const url = "http://localhost:4000/api/tasks/read/" + tasking.id;
    axios.get(url).then(res => {
      this.setState({ desc: res.data.data });
      this.setState({ done: true });
      console.log(res.data.data);
    });
  };
  renderLoading() {
    return <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>;
  }
  renderError() {
    return <div>Ooops, : {this.state.error.message}</div>;
  }
  renderDone() {
    return (
      <ul>
        <li>{this.state.desc}</li>
      </ul>
    );
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit" className="waves-effect waves-light btn cyan darken-3">Get Task's Desc</button>
          <br />
          <div>
            <ul>
              <li>{this.state.desc}</li>
            </ul>
          </div>
        </form>
      </div>
    );
  }
}
ReactDOM.render(
  <TaskStoryOneThreeOne subreddit="reactjs" />,
  document.getElementById("root")
);

export default TaskStoryOneThreeOne;
