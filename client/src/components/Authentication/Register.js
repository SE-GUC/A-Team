import React, { Component } from "react";
import "../../css/box_css.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
export class Register extends Component {
  state = {
    currentStep: 1,
    type: [],
    name: "",
    email: "",
    username: "",
    password: "",
    password2: "",
    date_of_birth: "",
    phone: "",
    intrests: [],
    is_private: true,
    ca: {
      info: "",
      field_of_work: [],
      board_members: [], // name job_title email
      reports: []
    },
    member: {
      years_of_experience: "",
      skills: []
    },
    partner: {
      field_of_work: [],
      board_members: []
    }
  };
  next = () => {
    let currentStep = this.state.currentStep;
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };
  prev = () => {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };
  get previousButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className="waves-effect waves-light btn"
          type="button"
          onClick={this.prev}
        >
          <i class="material-icons right">arrow_backward</i>
          Previous
        </button>
      );
    }
    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (false) {
      //edit later currentStep === 1
      //nwraeeh el button ama yekteb hagto
      const {
        name,
        email,
        username,
        phone,
        password,
        date_of_birth,
        password2
      } = this.state;
      if (
        name !== "" &&
        email !== "" &&
        email.includes("@") &&
        username.length > 8 &&
        password.length > 8 &&
        password2.length > 8 &&
        phone !== ""
      ) {
        return (
          <button
            class="waves-effect waves-light btn"
            type="button"
            onClick={this.next}
          >
            <i class="material-icons right">arrow_forward</i>
            Next
          </button>
        );
      } else return null;
    }
    if (currentStep < 3) {
      return (
        <button
          class="waves-effect waves-light btn"
          type="button"
          onClick={this.next}
        >
          <i class="material-icons right">arrow_forward</i>
          Next
        </button>
      );
    }
    // ...else render nothing
    return null;
  }

  handleChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  submit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>Step {this.state.currentStep}</p>
          <form onSubmit={this.submit} className="col s12">
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              name={this.state.name}
              email={this.state.email}
              username={this.state.username}
              password={this.state.password}
              password2={this.state.password2}
              date_of_birth={this.state.date_of_birth}
              phone={this.state.phone}
              intrests={this.state.intrests}
              is_private={this.state.is_private}
              type={this.state.type}
            />
            <Step2 />
            <div className="row">
              <div className="col s6">{this.previousButton}</div>
              <div>{this.nextButton}</div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
