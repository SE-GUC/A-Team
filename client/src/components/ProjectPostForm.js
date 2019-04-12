import React, { Component } from "react";
//import Formdetails from './Formdetails'
import TaskBasicField from "./TaskBasicField";
import TaskDatePack from "./TaskDatePack";
import TaskCommitment from "./TaskCommitment";
import Skills from "./Skills";
import axios from "axios";
import "../css/box_css.css";
import "materialize-css/dist/css/materialize.min.css";

export class PostForm extends Component {
  state = {
    name: "",
    partner_responsible: "5cacccc7b62d5618bc0fff21", //Assuming Session
    description: "",
    skills: ["Hi Ammar"],
    all_skills: []
    // skills:['Mongo','Express','React','Node']
  };
  //Will be used Later on
  addSkill = newskill => {
    var update = this.state.skills;
    var found = update.find(function(element) {
      return element === newskill;
    });
    if (found === undefined) {
      update.push(newskill);
      this.setState({ skills: update });
    } else {
      window.alert("You Already Added This Skill!");
    }
  };
  delSkill = skill => {
    var uskills = this.state.skills;
    for (var i = 0; i < uskills.length; i++) {
      if (uskills[i] === skill) {
        uskills.splice(i, 1);
        i--;
      }
    }
    this.setState({ skills: uskills });
  };
  //Setters
  setname = new_name => {
    this.setState({ name: new_name });
  };
  setDescription = nd => {
    this.setState({ description: nd });
  };
  //Result

  handleSubmit = e => {
    e.preventDefault();
    try {
      const data = {
        project_name: this.state.name,
        time_expected: this.state.time_expected,
        partner_responsible:this.state.partner_responsible,
        description: this.state.description,
        skills: this.state.skills
      };
      axios.post("http://localhost:4000/api/project/create", data).then(res => {
        console.log(res);
        window.alert("Posted Task ");
        return res.data;
      });
    } catch (error) {
      console.log("error");
    }
  };
  getSkillFromDB = () => {
    try {
      axios
        .get("http://localhost:4000/api/skills/getSkillCollection")
        .then(res => {
          this.setState({ all_skills: res.data });
          return res.data;
        });
    } catch (error) {
      console.log("error");
    }
  };

  renderLoading() {
    return <div>Loading...</div>;
  }
  renderError() {
    return <div>Ooops, : {this.state.error.message}</div>;
  }
  renderTasks() {
    if (this.state.error) {
      return this.renderError();
    }
    return <h1>The Bluetooth devive is knktec suksuly</h1>;
  }

  render() {
    return (
      <div>
        <div className="layoutTaskForm">
          <div className="layoutTaskFormInner">
            <div className="container">
              <form onSubmit={this.handleSubmit} className="cols12">
                <div className="section">
                  <h4>Project Details:</h4>
                  <div className="row">
                    <div className="input-field col s6">
                      <TaskBasicField
                        className="text"
                        state={this.state}
                        fieldname="Porject Name"
                        type="text"
                        func={this.setname}
                      />
                    </div>
                  </div>

                  <div className="input-field col s12">
                    <TaskBasicField
                      fieldname="Project Description"
                      type="bigtext"
                      func={this.setDescription}
                    />
                  </div>
                </div>

                <h4>Skill Requierements:</h4>
                {this.getSkillFromDB()}
                <Skills
                  addSkill={this.addSkill}
                  delSkill={this.delSkill}
                  skills={this.state.skills}
                  state={this.state}
                  col={this.state.all_skills}
                />

                <div className="row">
                  <div className="input-field col s4" />
                  <div className="input-field col s4">
                    <input
                      type="submit"
                      value="Submit"
                      className="waves-effect waves-light btn-large"
                      state={this.state}
                    />
                  </div>
                  <div className="input-field col s4" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostForm;
