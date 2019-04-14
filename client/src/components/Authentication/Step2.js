import React, { Component } from "react";
export class Step2 extends Component {
  render() {
    if (this.props.type[0] === "M") {
      //Member Form
      return <div />;
    }
    if (this.props.type[0] === "P") {
      //Partner Form
      return <div />;
    }
    if (this.props.type[0] === "CA") {
      //Consultancy Agency Form
      return <div />;
    }
    return null;
  }
}

export default Step2;
