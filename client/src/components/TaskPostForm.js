import React, { Component } from "react";
//import Formdetails from './Formdetails'
import TaskBasicField from "./TaskBasicField";
import TaskDatePack from "./TaskDatePack";
import TaskCommitment from "./TaskCommitment";
import Skills from "./Skills";
import axios from "axios";
import "../css/box_css.css";
import "materialize-css/dist/css/materialize.min.css";

export class Form extends Component {
  state = {
    name: "",
    monetary_compensation: "0",
    price: "1",
    is_assigned: "",
    partner_id: "5cacccc7b62d5618bc0fff21", //Assuming Session
    time_expected: "1 Day(s)",
    level_of_comitment: "Moderate",
    experience_needed: "1 Day(s)",
    description: "",
    skills: [],
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
  setCompensation = c => {
    this.setState({ monetary_compensation: c });
  };
  setPrice = p => {
    this.setState({ price: p });
  };
  setCommitment = c => {
    this.setState({ level_of_comitment: c });
  };
  setTime = t => {
    this.setState({ time_expected: t });
  };
  setExperience = e => {
    this.setState({ experience_needed: e });
  };
  //Result

  handleSubmit = e => {
    e.preventDefault();
    try {
      if(this.state.skills.length===0){
        window.alert('You Have To Enter At Least one Skill')
        return
      }
      const data = {
        name: this.state.name,
        monetary_compensation: this.state.monetary_compensation,
        partner_id:this.state.partner_id,
        time_expected: this.state.time_expected,
        level_of_comitment: this.state.level_of_comitment,
        experience_needed: this.state.experience_needed,
        description: this.state.description,
        skills: this.state.skills
      };
      axios.post("http://localhost:4000/api/tasks/add", data).then(res => {
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
  componentDidMount(){
    this.getSkillFromDB();
  }
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
                  <h4>Task Details:</h4>
                  <div className="row">
                    <div className="input-field col s6">
                      <TaskBasicField
                        className="text"
                        state={this.state}
                        fieldname="Task Name"
                        type="text"
                        func={this.setname}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <TaskDatePack
                      id="1"
                      fieldname="Time Expected"
                      func={this.setTime}
                    />
                  </div>

                  <div className="input-field col s12">
                    <TaskBasicField
                      fieldname="Task Description"
                      type="bigtext"
                      func={this.setDescription}
                    />
                  </div>
                </div>

                <h4>Pricing:</h4>
                <div className="section">
                  <tr>
                    <td>
                      <TaskBasicField
                        classname="money"
                        fieldname="Compensation"
                        type="number"
                        func={this.setCompensation}
                      />
                    </td>
                    <td>Your Price Offer for the Task in EGP</td>
                  </tr>
                </div>

                <h4>Requierements:</h4>
                <div className="row">
                  <TaskDatePack
                    id="2"
                    fieldname="Experience required"
                    func={this.setExperience}
                  />
                </div>
                <div className="row">
                  <TaskCommitment func={this.setCommitment} />
                </div>

                <br />
                
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

export default Form;
