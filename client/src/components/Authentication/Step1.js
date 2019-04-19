import React, { Component } from "react";
import "../../css/box_css.css";
import M from "materialize-css";
import Intrests from "./Intrests";
export class Step1 extends Component {
  state = {
    passwords: false,
    choice: []
  };
  usernameonChange= () =>{
    const email= document.getElementById('username-reg-input').value
    const array=this.props.takenUnames
    var chkr= array.includes(email);
    if(email===''){
      document.getElementById('username-reg-span').innerHTML= "username is required"
      document.getElementById('username-reg-span').style.color='grey'
    }
    else if(email.length<=8){
      document.getElementById('username-reg-span').innerHTML= "minimum 8 characters"
      document.getElementById('username-reg-span').style.color='red'
    }
    else if(chkr){
      document.getElementById('username-reg-span').innerHTML= "username is Taken"
      document.getElementById('username-reg-span').style.color='red'
    }
    else{
      document.getElementById('username-reg-span').innerHTML= "Very Good"
      document.getElementById('username-reg-span').style.color='green'
    }
  }
  emailonChange=()=>{
    const email= document.getElementById('reg-input-email').value
    const array=this.props.takenEmails
    var chkr= array.includes(email);
    if(email===''){
      document.getElementById('email-reg-span').innerHTML= "Email is required"
      document.getElementById('email-reg-span').style.color='grey'
    }
    else if(!email.includes("@")){
      document.getElementById('email-reg-span').innerHTML= "Enter a valid email"
      document.getElementById('email-reg-span').style.color='red'
    }
    else if(chkr){
      document.getElementById('email-reg-span').innerHTML= "Email is Taken"
      document.getElementById('email-reg-span').style.color='red'
    }
    else{
      document.getElementById('email-reg-span').innerHTML= "Very Good"
      document.getElementById('email-reg-span').style.color='green'
    }
  }
  checkUsernameMatch=e=>{
    this.usernameonChange();
    this.props.handleChange(e);
  }
  checkEmailMatch= e =>{
    this.emailonChange();
    this.props.handleChange(e);
  }

  passwordMatch = () => {
    const password = document.getElementById("pwd1_enter").value;
    const confirmation = document.getElementById("pwd1_conf").value;
    const red = "<p style='padding-top:32px;padding-left:10px;color:darkred'>";
    const green =
      "<p style='padding-top:32px;;padding-left:10px;color:darkgreen'>";
    if (password.length === 0) {
      document.getElementById("passworddiv1").innerHTML =
        red + "Please Enter a Password</p>";
    } else if (password.length < 8) {
      document.getElementById("passworddiv1").innerHTML =
        red + "Password Should be more than 8 Characters</p>";
    } else if (password === confirmation) {
      document.getElementById("passworddiv1").innerHTML =
        green + "Passwords Match</p>";
    } else {
      document.getElementById("passworddiv1").innerHTML =
        red + "Passwords Do Not Match</p>";
    }
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.getElementById("dob step1 reg");
      var options = {
        format: "dd/mm/yyyy",
        yearRange: [1960, new Date().getFullYear() - 18]
      };
      var instances = M.Datepicker.init(elems, options);
    });
  }
  passwordOnchange = e => {
    this.passwordMatch();
    this.props.handleChange(e);
  };
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div className="Steps1">
        <div className="row" title="Enter Name and Email">
          <div className="input-field col s6">
            <i class="material-icons prefix">tag_faces</i>
            <input
              className="validate"
              name="name"
              type="text"
              placeholder="Full Name.."
              value={this.props.name}
              onChange={this.props.handleChange}
            />
          </div>
          <div className="input-field col s6">
            <i class="material-icons prefix">email</i>
            <input
              id='reg-input-email'
              class="validate"
              name="email"
              type="email"
              placeholder="Email.."
              value={this.props.email}
              onChange={this.checkEmailMatch}
            />
          <span id='email-reg-span'class="helper-text"></span>
          </div>
        </div>
        <div className="row" title="Enter Phone and UserName">
          <div className="input-field col s6">
            <i class="material-icons prefix">phone</i>
            <input
              className="validate"
              name="phone"
              type="tel"
              placeholder="Phone Number.."
              value={this.props.phone}
              onChange={this.props.handleChange}
            />
          </div>
          <div className="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input
            id='username-reg-input'
              name="username"
              type="text"
              placeholder="UserName.."
              value={this.props.username}
              onChange={this.checkUsernameMatch}
            />
            <span id='username-reg-span'class="helper-text"></span>
          </div>
        </div>
        <div className="row" title="Enter Password">
          <div className="input-field col s5">
            <i class="material-icons prefix">lock</i>
            <input
              id="pwd1_enter"
              name="password"
              type="password"
              placeholder="Password.."
              value={this.props.password}
              onChange={this.passwordOnchange}
            />
          </div>
          <div className="input-field col s5">
            <i class="material-icons prefix">security</i>
            <input
              id="pwd1_conf"
              name="password2"
              type="password"
              placeholder="Renter Password.."
              value={this.props.password2}
              onChange={this.passwordOnchange}
            />
          </div>
          <div className="col s2" id="passworddiv1" />
        </div>
        <div className="row" title="Date Of Birth and Privacy and Type">
          <div className="input-field col s4">
            <i class="material-icons prefix">date_range</i>
            <input
              placeholder="Date of birth.."
              name="date_of_birth"
              type="date"
              value={this.props.date_of_birth}
              onChange={this.props.handleChange}
              className="validate"
              max='2000-01-01'
            />
          </div>
          <div className="input-field col s4" style={{paddingLeft:'30px'}}>
          <p>Select Yout Account Type</p>
            <ul>
              <li>
                
              </li>
              <li>
                <label>
                  <input
                    class="with-gap"
                    name="type"
                    type="radio"
                    value={["C"]}
                    onClick={this.props.handleChange}
                  />
                  <span>Consultancy Agency</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    class="with-gap"
                    name="type"
                    type="radio"
                    value={["M"]}
                    onClick={this.props.handleChange}
                  />
                  <span>Member (Default)</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    class="with-gap"
                    name="type"
                    value={["P"]}
                    type="radio"
                    onClick={this.props.handleChange}
                  />
                  <span>Partner</span>
                </label>
              </li>
            </ul>
          </div>
          <div className="input-field col s4" style={{paddingLeft:'60px'}}>
            <p style={{ paddingTop: "20px" }}>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  name="is_private"
                  pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])/(0[1-9]|1[012])/[0-9]{4})"
                  value={this.props.is_private}
                  onChange={this.props.handleChange}
                />
                <span>Private?</span>
              </label>
            </p>
          </div>
        </div>
        <div className="row" title="Intrests">
          <Intrests
            addSkill={this.props.addSkill}
            delSkill={this.props.delSkill}
            skills={this.props.intrests}
            col={this.props.col}
          />
        </div>
      </div>
    );
  }
}

export default Step1;
