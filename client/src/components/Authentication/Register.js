import React, { Component } from "react";
import "../../css/box_css.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import axios from "axios";

export class Register extends Component {
  state = {
    col: { data: ["adams", "barbra", "cat", "doggo"] },
    currentStep: 2, // Should be 1 intially
    type: ["M"], //feault is M
    name: "",
    email: "",
    username: "",
    password: "",
    password2: "",
    date_of_birth: "",
    phone: "",
    intrests: [],
    is_private: true,
    all_skills: [],
    //CA
    info: "",
    field_of_work: [],
    board_members: [], // name job_title email
    reports: [],
    //member
    years_of_experience: 0,
    skills: []
    //partner
    //field_of_work: [],
    //board_members: []
  };
  componentDidMount() {
    this.getIntrestfromDB();
    this.getSkillFromDB();
  }
  addSkill = newskill => {
    var update = this.state.skills;
    if (update.length === 10) {
      window.alert("You can Only Enter a maximium of 10 Skills");
      return;
    }
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
          class="waves-effect waves-light btn"
          type="button"
          onClick={this.prev}
        >
          <p>
            <i class="material-icons right">keyboard_arrow_left</i>
            Back
          </p>
        </button>
      );
    }
    // ...else return nothing
    return null;
  }
  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep === 1) {
      //edit later currentStep === 1
      //nwraeeh el button ama yekteb hagto
      const { name, email, username, phone, password, password2 } = this.state;
      if (
        name !== "" &&
        email !== "" &&
        email.includes("@") &&
        username.length > 8 &&
        password.length > 8 &&
        password2.length > 8 &&
        password === password2 &&
        phone !== ""
      ) {
        return (
          <button
            class="waves-effect waves-light btn pulse"
            type="button"
            onClick={this.next}
          >
            <i class="material-icons right">arrow_forward</i>
            Next
          </button>
        );
      } else
        return (
          <button
            disabled
            class="waves-effect waves-light btn"
            type="button"
            onClick={this.next}
          >
            <i class="material-icons right">arrow_forward</i>
            Next
          </button>
        );
    }
    if (currentStep === 2) {
      const text = this.state.years_of_experience;
      if (this.state.type[0] === "M") {
        var flag = false;
        for (var n = 0; n < 46; n++) {
          var chkr = "" + n;
          flag = text === chkr;
          if (flag) {
            n = 100;
          }
        }
        if (this.state.skills.length === 0 || !flag) {
          console.log(this.state.skills);
          return (
            <button
              disabled
              class="waves-effect waves-light btn"
              type="button"
              onClick={this.next}
            >
              <i class="material-icons right">arrow_forward</i>
              Next
            </button>
          );
        } else {
          return (
            <button
              class="waves-effect waves-light btn pulse"
              type="button"
              onClick={this.next}
            >
              <i class="material-icons right">arrow_forward</i>
              Next
            </button>
          );
        }
      }
      if (this.state.type[0] === "CA") {
        if (this.state.info.length < 20) {
          return (
            <button
              disabled
              class="waves-effect waves-light btn"
              type="button"
              onClick={this.next}
            >
              <i class="material-icons right">arrow_forward</i>
              Next
            </button>
          );
        } else
          return (
            <button
              disabled
              class="waves-effect waves-light btn"
              type="button"
              onClick={this.next}
            >
              <i class="material-icons right">arrow_forward</i>
              Next
            </button>
          );
      }
    }
    if (currentStep < 3) {
      return (
        <button
          class="waves-effect waves-light btn pulse"
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
  delBoard = () => {
    var board = this.state.board_members;
    board.pop();
    this.setState({ board_members: board });
    console.log(board);
  };
  addBoard = value => {
    var board = this.state.board_members;
    board.push(value);
    this.setState({ board_members: board });
  };
  setReport = value => {
    this.setState({ reports: value });
  };
  getIntrestfromDB() {
    try {
      axios.get("http://localhost:4000/api/events/getTypes").then(res => {
        this.setState({ col: res.data });
        return res.data;
      });
    } catch (error) {
      console.log("error");
    }
  }
  addIntrest = newskill => {
    var update = this.state.intrests;
    var found = update.find(function(element) {
      return element === newskill;
    });
    if (found === undefined) {
      update.push(newskill);
      this.setState({ intrests: update });
    } else {
      window.alert("You Already Added This Intrest!");
    }
  };
  delIntrest = skill => {
    var uskills = this.state.intrests;
    for (var i = 0; i < uskills.length; i++) {
      if (uskills[i] === skill) {
        uskills.splice(i, 1);
        i--;
      }
    }
    this.setState({ intrests: uskills });
  };
  setExperience = e => {
    this.setState({ years_of_experience: e });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h3>Registration Form</h3>
          <p>
            Step {this.state.currentStep} (Next Button Will Appear when you
            finsih required fields)
          </p>
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
              is_private={this.state.is_private}
              type={this.state.type}
              intrests={this.state.intrests}
              addSkill={this.addIntrest}
              delSkill={this.delIntrest}
              col={this.state.col}
            />
            <Step2
              handleChange={this.handleChange}
              exprSet={this.setExperience}
              type={this.state.type}
              currentStep={this.state.currentStep}
              info={this.state.info}
              field_of_work={this.state.field_of_work}
              board_members={this.state.board_members}
              reports={this.state.reports}
              years_of_experience={this.state.years_of_experience}
              skills={this.state.skills}
              addSkill={this.addSkill}
              delSkill={this.delSkill}
              col={this.state.all_skills}
              addBoard={this.addBoard}
              delBoard={this.delBoard}
              setReport={this.setReport}
            />
            <Step3
              handleChange={this.handleChange}
              currentStep={this.state.currentStep}
              state={this.state}
              type={this.state.type}
            />
            <div className="row">
              <div class="col s2">{this.previousButton}</div>
              <div class="col s2" />
              <div class="col s2" />
              <div class="col s2" />
              <div class="col s2" />
              <div class="col s2 push-s1" style={{marginRight:'45px'}}>{this.nextButton}</div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
