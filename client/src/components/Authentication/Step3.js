import React, { Component } from "react";

export class Step3 extends Component {
  getType = () => {
    const type = this.props.type;
    if (type[0] === "M") return "Member";
    if (type[0] === "P") return "Partner";
    if (type[0] === "CA") return "Constamcy Agency";
  };
  GetMemberDetails = () => {
    return (
    <div>
        <p><strong>Name:</strong>{this.props.state.name}</p>
        <p><strong>Email:</strong>{this.props.state.email}</p>
        <p><strong>Username:</strong>{this.props.state.username}</p>
        <p><strong>Date of Birth:</strong>{this.props.state.date_of_birth}</p>
        <p><strong>Phone Number:</strong>{this.props.state.phone}</p>
        <p><strong>Intrests:</strong>{this.props.state.intrests}</p>
        <p><strong>Privacy:</strong>{this.props.state.is_private ? "Yes":"No"}</p>
        <p><strong>Skills:</strong>{this.props.state.skills}</p>
        <p><strong>Years of Experience:</strong>{this.props.state.years_of_experiece} Years</p>
        
    </div>
    );
  };

  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    if (this.props.type[0] === "M") {
        return this.GetMemberDetails()
    }

    return (
      <div>
        <h4>Registration Overview</h4>
        <p> You Choose to Become a {this.getType}</p>
      </div>
    );
  }
}
export default Step3;
