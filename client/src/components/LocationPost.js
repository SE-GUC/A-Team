import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class LocationPost extends Component {
  state = {
    title: "",
    location: "",
    capacity: null,
    booked: ""
  };
  handleChangeOne = e => {
    // this.setState({ [e.target.title]: e.target.value});
    this.setState({
      title: e.target.value
    });
  };
  handleChangeTwo = e => {
    this.setState({
      location: e.target.value
    });
  };
  handleChangeThree = e => {
    this.setState({
      capacity: e.target.value
    });
  };
  handleChangeFour = e => {
    this.setState({
      booked: e.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault(); //prevents page from reloading

    const m = axios({
      method: "post",
      url: "http://localhost:4000/api/locations/",
      headers: { "Content-Type": "application/json" },
      data: {
        title: this.state.title,
        location: this.state.location,
        capacity: this.state.capacity,
        booked: this.state.booked
      }
    }).then(window.alert("Posted Task "));
    console.log(m);
  };
  renderLoading() {
    return <div>Loading...</div>;
  }
  renderError() {
    return <div>Ooops, : {this.state.error.message}</div>;
  }

  render() {
    // if(this.state.loading) {
    //     return this.renderLoading()
    // }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Location Title:
          <input type="text" name="title" onChange={this.handleChangeOne} />
        </label>
        <label>
          Location :
          <input type="text" name="location" onChange={this.handleChangeTwo} />
        </label>
        <label>
          Location Capacity:
          <input
            type="number"
            name="capacity"
            onChange={this.handleChangeThree}
          />
        </label>

        <label>
          Location availability:
          <input type="text" name="booked" onChange={this.handleChangeFour} />
        </label>

        <button type="submit">Add Location</button>
      </form>
    );
  }
}
ReactDOM.render(
  <LocationPost subreddit="reactjs" />,
  document.getElementById("root")
);

export default LocationPost;
