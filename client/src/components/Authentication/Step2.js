import React, { Component } from "react";
import Skills from "../../components/Skills";
import axios from "axios";
import Intrests from "./Intrests";
import TaskDatePack from "../TaskDatePack";

export class Step2 extends Component {
  state = {
    all_skills: [],
    skills: [],
    years_of_experience: ""
  };

  componentDidMount() {}

  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    if (this.props.type[0] === "M") {
      //Member Form
      return (
        <div className="Steps">
          <h4>You Chose to Become a Member</h4>
          <h5>
            You will be able to apply for tasks and fulfil the freelance dream
          </h5>
          <p>Please Enter The Following Details:</p>
          <br />
          <div className="row">
            <div className="input-field col s3">
              <i class="material-icons prefix">face</i>
              <input
                style={{ paddingBottom: "20px" }}
                className="validate"
                name="years_of_experience"
                type="number"
                placeholder="Years of Experience.."
                value={this.props.years_of_experience}
                onChange={this.props.handleChange}
                min="0"
                max="45"
              />
            </div>
            <div
              className="input-field col s9"
              style={{ border: "1px dashed salmon" }}
            >
              <Intrests
                addSkill={this.props.addSkill}
                delSkill={this.props.delSkill}
                skills={this.props.skills}
                col={this.props.col}
              />
            </div>
          </div>
        </div>
      );
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
