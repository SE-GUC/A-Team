import React, { Component } from "react";
//import Formdetails from './Formdetails'
import TaskBasicField from "./TaskBasicField";
import Skills from "./Skills";
import axios from "axios";
import "../css/box_css.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

export class PostForm extends Component {
  state = {
    name: "",
    partner_responsible: "5cae373eaea50e48600c8483", //Assuming Session
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
      var msg = "You Already Added This Skill!";
      var html = "<span style='color:#ffdd42'>" + msg + "</span>";
      M.toast({ html: html });
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
      if (this.state.skills.length === 0) {
        var msg = "You Have To Enter At Least one Skill";
        var html = "<span style='color:#ffdd42'>" + msg + "</span>";
        M.toast({ html: html });
        return;
      }
      const data = {
        project_name: this.state.name,
        time_expected: this.state.time_expected,
        partner_responsible: this.state.partner_responsible,
        description: this.state.description,
        skills: this.state.skills
      };
      axios.post("http://localhost:4000/api/project/create", data).then(res => {
        console.log(res);
        var msg = "Posted Project ";
        var html = "<span style='color:green'>" + msg + "</span>";
        M.toast({ html: html });
        return res.data;
      });
    } catch (error) {
      console.log("error");
    }
  };
  getSkillFromDB = async () => {
    try {
      await axios
        .get("http://localhost:4000/api/skills/getSkillCollection")
        .then(res => {
          this.setState({ all_skills: res.data });
          return res.data;
        });
    } catch (error) {
      console.log("error");
    }
  };
  componentDidMount() {
    this.getSkillFromDB();
  }

  renderLoading() {
    return (
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle" />
          </div>
          <div class="gap-patch">
            <div class="circle" />
          </div>
          <div class="circle-clipper right">
            <div class="circle" />
          </div>
        </div>
      </div>
    );
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
        <div>
          <div>
            <div className="container">
              <h4>Project Details:</h4>
              <p>
                Please be Advised that the project will not be posted Until it
                is approved by Lirten-Hub
              </p>
              <form onSubmit={this.handleSubmit} className='projectForm'>
                <div>
                  <div className="row" title="Project Name">
                    <div className="input-field col s12">
                      <TaskBasicField
                        className="text"
                        state={this.state}
                        fieldname="Porject Name"
                        type="text"
                        func={this.setname}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <TaskBasicField
                        fieldname="Project Description"
                        type="bigtext"
                        func={this.setDescription}
                      />
                    </div>
                  </div>
                  <center>
                    <h4>Skill Requierements:</h4>
                  </center>
                  <br />
                  <div className="row">
                    <div className="col s6">
                      <Skills
                        addSkill={this.addSkill}
                        delSkill={this.delSkill}
                        skills={this.state.skills}
                        state={this.state}
                        col={this.state.all_skills}
                      />
                    </div>
                    <div className="col s6">
                      <p>
                        Please Enter a Collection of Skills that will be needed
                        for this project
                      </p>
                      <p>
                        In Order to finish you submission, you must add at
                        leaast one skill
                      </p>
                      <br />
                      <input
                        style={{ marginLeft: "150px" }}
                        type="submit"
                        value="Submit"
                        className="waves-effect waves-light btn-large green darken-2"
                        state={this.state}
                      />
                    </div>
                  </div>
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
