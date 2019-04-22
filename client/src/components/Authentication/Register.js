import React, { Component } from "react";
import "../../css/box_css.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import axios from "axios";
import M from "materialize-css";
export class Register extends Component {
  state = {
    takenEmails:[],
    takenUnames:[],
    col: { data: ["adams", "barbra", "cat", "doggo"] },
    currentStep: 1, // Should be 1 intially
    type: ["M"], //feault is M
    name: "",
    email: "",
    username: "",
    password: "",
    password2: "",
    date_of_birth: "",
    phone: "",
    intrests: [],
    is_private: false,
    all_skills: [],
    //CA
    info: "",
    field_of_work: ["EL SAYED 7AMDI"],
    board_members: [], // name job_title email
    reports: [],
    //member
    years_of_experience: 0,
    skills: []
    //partner
    //field_of_work: [],
    //board_members: []
  };
  addURL=(url)=>{
    var array=this.state.reports
    array.push(url)
    this.setState({reports:array})
    console.log(url,"From MAIN")
  }
  componentDidMount() {
    this.getIntrestfromDB();
    this.getSkillFromDB();
    this.getEmailfromDB();
    this.getUsernamefromDB();
  }
  addSkill = newskill => {
    var update = this.state.skills;
    if (update.length === 10) {
      var html="<span style='color:#ffdd42'>You reached the max limit</span>"
        M.toast({html:html })
      return;
    }
    var found = update.find(function(element) {
      return element === newskill;
    });
    if (found === undefined) {
      update.push(newskill);
      this.setState({ skills: update });
    } else {
      var html="<span style='color:#ffdd42'>You already added this skill</span>"
        M.toast({html:html })
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
  getUsernamefromDB=()=>{
    try {
      axios
        .get("http://localhost:4000/api/tasks/alluserNames")
        .then(res => {
          this.setState({ takenUnames: res.data });
          //console.log("Fetched ALl the EMails in The DB",res.data)
          return res;
        });
    } catch (error) {
      console.log("error");
    }
  }
  getEmailfromDB= () =>{
    try {
      axios
        .get("http://localhost:4000/api/tasks/allemails")
        .then(res => {
          this.setState({ takenEmails: res.data });
          //console.log("Fetched ALl the EMails in The DB",res.data)
          return res;
        });
    } catch (error) {
      console.log("error");
    }
  }
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
      const { name, email, username, phone, password, password2,intrests,date_of_birth } = this.state;
      var array=this.state.takenEmails
      var chkr= array.includes(email);
      var array1=this.state.takenUnames
      var chkr1=array1.includes(username)
      console.log(date_of_birth)
      if (
        name !== "" &&
        email !== "" &&
        email.includes("@") &&
        username.length >= 8 &&
        password.length >= 8 &&
        password2.length >= 8 &&
        password === password2 &&
        phone !== "" && 
        intrests.length !==0
        &&(chkr===false)
        &&(chkr1===false)
        && date_of_birth.includes('-')
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
      if (this.state.type[0] === "C") {
        if (this.state.info.length < 20) {
          console.log(this.state.info.length);
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
  postRegister = (data)=>{
    try{
      console.log("Fetching")
     axios.post("http://localhost:4000/api/users/register", data).then(res => {
        console.log(res);
        console.log("Submited..")
        var html="<span style='color:green'>You have Succussfuly Registred</span>"
        M.toast({html:html })
      //  return res.data
      });
    } catch (error) {
      console.log("error");
    }
  }
  submit = () => {
    const dataM = {
      name:this.state.name,
      email:this.state.email,
      username:this.state.username,
      password:this.state.password,
      date_of_birth:this.state.date_of_birth,
      phone:this.state.phone,
      interests:this.state.intrests,
      is_private:this.state.is_private,
      years_of_experience:this.state.years_of_experience,
      skills:this.state.skills,
      type:this.state.type
    }
    const dataP = {
      name:this.state.name,
      email:this.state.email,
      username:this.state.username,
      password:this.state.password,
      date_of_birth:this.state.date_of_birth,
      phone:this.state.phone,
      interests:this.state.intrests,
      is_private:this.state.is_private,
      board_members:this.state.board_members,
      reports:this.state.reports,
      type:["P"],
      field_of_work:this.state.field_of_work
    }
    const dataC ={
      name:this.state.name,
      email:this.state.email,
      username:this.state.username,
      password:this.state.password,
      date_of_birth:this.state.date_of_birth,
      phone:this.state.phone,
      interests:this.state.intrests,
      is_private:this.state.is_private,
      board_members:this.state.board_members,
      reports:this.state.reports,
      type:["CA"],
      info:this.state.info,
      field_of_work:this.state.field_of_work
    }
    console.log("Submitting..")
    if(this.state.type[0]==="M"){
      this.postRegister(dataM)
    }
    if(this.state.type[0]==="P"){
      console.log("ya sherka ya metnaka",dataP.board_members)
      console.log("This is an Array",dataP.type)
      this.postRegister(dataP)
    }
    if(this.state.type[0]==="C"){
      this.postRegister(dataC)
    }
    console.log("DONE..")
  };
  handleChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
      var html="<span style='color:#ffdd42'>You ALready added this Intrest</span>"
        M.toast({html:html })
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
  com
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h3>Registration Form</h3>
          <p>
            Step {this.state.currentStep} (Next Button Will Appear when you
            finish required fields)
          </p>
          <div  className="col s12">
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
              takenEmails={this.state.takenEmails}
              takenUnames={this.state.takenUnames}
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
              addURL={this.addURL}
            />
            <Step3
              handleChange={this.handleChange}
              currentStep={this.state.currentStep}
              state={this.state}
              type={this.state.type}
              submit={this.submit}
            />

            <div className="row">
              <div class="col s2">{this.previousButton}</div>
              <div class="col s2" />
              <div class="col s2" />
              <div class="col s2" />
              <div class="col s2" />
              <div class="col s2 push-s1" style={{ marginRight: "45px" }}>
                {this.nextButton}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
