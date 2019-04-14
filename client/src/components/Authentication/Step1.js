import React, { Component } from "react";
import "../../css/box_css.css";
import M from "materialize-css";
export class Step1 extends Component {
  state = {
    passwords: false,
    choice: []
  };

  passwordMatch = () => {
    if (this.props.password === "") {
      this.setState({ passwords: false });
      document.getElementById("passworddiv1").innerHTML = "<p />";
      
    }
    if (this.props.password.length < 8) {
      this.setState({ passwords: false });
      document.getElementById("passworddiv1").innerHTML =
        "  <p style='color:red;padding-top:20px' >" +
        "Password Must be at least 8 characters" +
        " </p>";

      
    }
    if (this.props.password == this.props.password2) {
      this.setState({ passwords: true });
      document.getElementById("passworddiv1").innerHTML =
        "  <p style='color:green;padding-top:20px' >" +
        "Passwords Match" +
        " </p>";
      
    } if (this.props.password !== this.props.password2) {
      this.setState({ passwords: false });
      document.getElementById("passworddiv1").innerHTML =
        "  <p style='color:red;padding-top:20px' >" +
        "Passwords do not match" +
        " </p>";
      
    }
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".datepicker");
      var options = {
        format: "dd/mm/yyyy",
        yearRange: [1960, new Date().getFullYear() - 18],
      };
      var instances = M.Datepicker.init(elems, options);
    });
  }
  render() {
      if(this.props.currentStep!==1){
          return null
      }
    return (
      <div>
        <div className="row" title="Enter Name and Email">
          <div className="input-field col s6">
            <i class="material-icons prefix">tag_faces</i>
            <input
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
              name="email"
              type="email"
              placeholder="Email.."
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="row" title="Enter Phone and UserName">
          <div className="input-field col s6">
            <i class="material-icons prefix">phone</i>
            <input
              name="phone"
              type="text"
              placeholder="Phone Number.."
              value={this.props.phone}
              onChange={this.props.handleChange}
            />
          </div>
          <div className="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input
              name="username"
              type="text"
              placeholder="UserName.."
              value={this.props.username}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="row" title="Enter Password">
          <div className="input-field col s5">
            <i class="material-icons prefix">lock</i>
            <input
              name="password"
              type="password"
              placeholder="Password.."
              value={this.props.password}
              onChange={this.props.handleChange}
              onInput={this.passwordMatch}
            />
          </div>
          <div className="input-field col s5">
            <i class="material-icons prefix">security</i>
            <input
              name="password2"
              type="password"
              placeholder="Renter Password.."
              value={this.props.password2}
              onChange={this.props.handleChange}
              onInput={this.passwordMatch}
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
              type="text"
              value={this.props.date_of_birth}
              onChange={this.props.handleChange}
              className="datepicker"
            />
          </div>
          <div className="input-field col s6">
            <ul>
              <li>
                <p>Select Yout Account Type</p>
              </li>
              <li>
                <label>
                  <input
                    class="with-gap"
                    name="type"
                    type="radio"
                    value={["CA"]}
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
          <div className="input-field col s2">
            <p style={{ paddingTop: "20px" }}>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  name="is_private"
                  value={this.props.is_private}
                  onChange={this.props.handleChange}
                />
                <span>Private?</span>
              </label>
            </p>
          </div>
        </div>
        <div className="row" title="Intrests">
          <div className="input-field col s6">
            <i class="material-icons prefix">add_circle_outline</i>
            <input placeholder="Intrests.." />
          </div>
        </div>
      </div>
    );
  }
}

export default Step1;
