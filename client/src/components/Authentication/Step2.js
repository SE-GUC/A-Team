import React, { Component } from "react";
import Skills from "../../components/Skills";
import axios from "axios";
import Intrests from "./Intrests";
import TaskDatePack from "../TaskDatePack";
import M from "materialize-css";
import Chip from '@material-ui/core/Chip';

export class Step2 extends Component {
  state = {
    all_skills: [],
    skills: [],
    reports: [],
    years_of_experience: "",
    bname: "",
    btitle: "",
    bemaail: "",
    currentRow: 1
  };
  handleChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  addMemberP = () => {
    const details = {
      name: this.state.bname,
      job_title: this.state.btitle,
      email: this.state.bemaail
    };
    const condtion =
      details.name === "" || details.job_title === "" || details.email === "";
    if (condtion) {
      var html="<span style='color:#ffdd42'>You Must Enter The Details</span>"
        M.toast({html:html })
    } else {
      const row = this.state.currentRow;
      if (row === 7) {
        var html="<span style='color:#ffdd42'>You can only enter 7 members</span>"
        M.toast({html:html })
        return;
      }
      var table = document.getElementById("Step2-P-Board");
      table.rows[row].cells[0].innerHTML = details.name;
      table.rows[row].cells[1].innerHTML = details.email;
      table.rows[row].cells[2].innerHTML = details.job_title;
      //Add Delete Button

      //update register component
      this.props.addBoard(details);
      this.setState({ currentRow: row + 1 });
      this.setState({ bname: "" });
      this.setState({ btitle: "" });
      this.setState({ bemaail: "" });
    }
  };
  addMember = () => {
    const details = {
      name: this.state.bname,
      job_title: this.state.btitle,
      email: this.state.bemaail
    };
    const condtion =
      details.name === "" || details.job_title === "" || details.email === "";
    if (condtion) {
      var html="<span style='color:#ffdd42'>You Must Enter The Details</span>"
        M.toast({html:html })
    } else {
      const row = this.state.currentRow;
      if (row === 7) {
        var html="<span style='color:#ffdd42'>You can only Enter 7 Members</span>"
        M.toast({html:html })
        return
      }
      var table = document.getElementById("Step2-CA-Board");
      table.rows[row].cells[0].innerHTML = details.name;
      table.rows[row].cells[1].innerHTML = details.email;
      table.rows[row].cells[2].innerHTML = details.job_title;
      //Add Delete Button

      //update register component
      this.props.addBoard(details);
      this.setState({ currentRow: row + 1 });
      this.setState({ bname: "" });
      this.setState({ btitle: "" });
      this.setState({ bemaail: "" });
    }
  };
  delMember = () => {
    const row = this.state.currentRow - 1;
    if (row === 0) {
      var html="<span style='color:#ffdd42'>You did'nt enter any values</span>"
        M.toast({html:html })
    } else {
      var table = document.getElementById("Step2-CA-Board");
      table.rows[row].cells[0].innerHTML = "";
      table.rows[row].cells[1].innerHTML = "";
      table.rows[row].cells[2].innerHTML = "";
      this.setState({ currentRow: row });
      this.props.delBoard();
    }
  };
  delMemberP = () => {
    const row = this.state.currentRow - 1;
    if (row === 0) {
      var html="<span style='color:#ffdd42'>You did'nt enter any values</span>"
        M.toast({html:html })
    } else {
      var table = document.getElementById("Step2-P-Board");
      table.rows[row].cells[0].innerHTML = "";
      table.rows[row].cells[1].innerHTML = "";
      table.rows[row].cells[2].innerHTML = "";
      this.setState({ currentRow: row });
      this.props.delBoard();
    }
  };
  onChipAdd = () => {
    var result = [];
    var elem = document.getElementById("CA chips Reg");
    var instance = M.Chips.getInstance(elem);
    for (var i = 0; i < instance.chipsData.length; i++) {
      result.push(instance.chipsData[i].tag);
    }
    this.setState({ reports: result });
    this.props.setReport(result);
  };
  onChipAddP = () => {
    var result = [];
    var elem = document.getElementById("P chips Reg");
    var instance = M.Chips.getInstance(elem);
    for (var i = 0; i < instance.chipsData.length; i++) {
      result.push(instance.chipsData[i].tag);
    }
    this.setState({ reports: result });
    this.props.setReport(result);
  };
  
  componentDidMount() {
    console.log("WAZA")
    document.addEventListener("DOMContentLoaded", function() {
      var textNeedCount = document.querySelectorAll("#CA_Info_TA");
      M.CharacterCounter.init(textNeedCount);
      console.log(textNeedCount)
    });
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.getElementById("CA chips Reg");
      var instances = M.Chips.init(elems, {
        placeholder: "Add Report URLs",
        secondaryPlaceholder: "Add URL",
        limit: 5,
        onChipAdd: () => {
          var x = [];
          for (var i = 0; i < instances.chipsData.length; i++) {
            x.push(instances.chipsData[i].tag);
          }
          return x;
          // console.log("Data",dataOfCa,"Instances",instances)
        }
      });
    });
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.getElementById("P chips Reg");
      var instances = M.Chips.init(elems, {
        placeholder: "Add Report URLs",
        secondaryPlaceholder: "Add URL",
        limit: 5,
        onChipAdd: () => {
          var x = [];
          for (var i = 0; i < instances.chipsData.length; i++) {
            x.push(instances.chipsData[i].tag);
          }
          return x;
          // console.log("Data",dataOfCa,"Instances",instances)
        }
      });
    });
  }
 
  setURL = () => {
    console.log("lalal");
    var elems = document.getElementById("CA chips Reg");
    var instance = M.Chips.getInstance(elems);
    var reports = instance.onChipAdd();
    console.log(reports);
  };
  setURLP = () => {
    console.log("lalal");
    var elems = document.getElementById("P chips Reg");
    var instance = M.Chips.getInstance(elems);
    var reports = instance.onChipAdd();
    console.log(reports);
  };
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    if (this.props.type[0] === "M") {
      //Member Form
      return (
        <div className="StepsM" >
          <h4>You Chose to Become a Member</h4>
          <h5>
            You will be able to apply for tasks and fulfil the freelance dream
          </h5>
          <p>Please Enter The Following Details:</p>
          <p>You need to enter at least one skill</p>
          <br />
          <div className="row">
            <div className="input-field col s3">
              <i class="material-icons prefix">face</i>
              <input
                style={{ paddingBottom: "20px" }}
                className="validate"
                name="years_of_experience"
                type="number"
                placeholder="Years of Experience*"
                value={this.props.years_of_experience}
                onChange={this.props.handleChange}
                min="0"
                max="45"
              />
            </div>
            <div className="input-field col s9">
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
    if (this.props.type[0] === "C") {
      //Partner Form

      return (
        <div className="Steps">
          <h4>You Chose to Become a Consultancy Agency</h4>
          <h5>You will be to Sponsor Projects and Host Events</h5>
          <p>Please Enter The Following Details:</p>
          <br />
          <div className="row" title="info">
            <div className="input-field col s12">
              <i class="material-icons prefix">info</i>
              <textarea
                id="CA_Info_TA"
                class="materialize-textarea"
                name="info"
                placeholder="Plaase Enter A Brief Description On The Organization You are Representing MIN 20 Characters"
                value={this.props.info}
                onChange={this.props.handleChange}
                data-length="90"
              />
            </div>
          </div>

          <div title="Add Info About The Board" className="row">
            <div className="Info to Add" className="col s6">
              <h6>Enter Details of the Board Members (Optional)</h6>
              <div className="row">
                <div className="input-field col s3" title="Board Member Name">
                  <i class="material-icons prefix">person</i>
                  <input
                    type="text"
                    placeholder="Board Member Name"
                    name="bname"
                    value={this.state.bname}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row" title="Board Member Email">
                <div className="input-field col s3">
                  <i class="material-icons prefix">email</i>
                  <input
                    type="text"
                    placeholder="Board Member Email"
                    name="bemaail"
                    value={this.state.bemaail}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row" title="Board Member Title">
                <div className="input-field col s3">
                  <i class="material-icons prefix">business_center</i>
                  <input
                    type="text"
                    placeholder="Board Member Title"
                    name="btitle"
                    value={this.state.btitle}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div
                className="row"
                title="Click Here to Submit"
                style={{ paddingTop: "30px" }}
              >
                <div className="col s6">
                  <button
                    type="submit"
                    class="waves-effect waves-light btn green lighten-3"
                    onClick={this.addMember}
                    style={{ marginLeft: "50px" }}
                  >
                    Add Member
                    <i class="material-icons right">send</i>
                  </button>
                </div>
                <div className="col s6">
                  <button
                    type="submit"
                    class="waves-effect waves-light btn red ligthen-3"
                    onClick={this.delMember}
                  >
                    Undo
                    <i class="material-icons right">undo</i>
                  </button>
                </div>
              </div>
            </div>
            <div className="Table that Shows Board Members" className="col s6">
              <table id="Step2-CA-Board" className="highlight">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Postion</th>
                  </tr>
                </thead>

                <tr style={{ height: "53px" }}>
                  <td /> <td /> <td />
                </tr>
                <tr style={{ height: "53px" }}>
                  <td /> <td /> <td />
                </tr>
                <tr style={{ height: "53px" }}>
                  <td /> <td /> <td />
                </tr>
                <tr style={{ height: "53px" }}>
                  <td /> <td /> <td />
                </tr>
                <tr style={{ height: "53px" }}>
                  <td /> <td /> <td />
                </tr>
                <tr style={{ height: "53px" }}>
                  <td /> <td /> <td />
                </tr>
              </table>
            </div>
          </div>
          <div className="row" title="Reports">
            <div className="col s12">
              <h6>
                Please Enter The Links of Your Agency's Reports (Optional)
              </h6>
              <div
                id="CA chips Reg"
                class="chips"
                onChange={this.onChipAdd}
                onKeyDown={this.onChipAdd}
              />
            </div>
          </div>
        </div>
      );
    } else if (this.props.type[0] === "P") {
      //Partner  Form
      return (
        <div className="Steps1">
          <h4>You Chose to Become a Partner</h4>
          <h5>You will be to Sponsor Projects and Host Events</h5>
          <p>Please Enter The Following Details:</p>
          <br />

          <div title="Add Info About The Board" className="row">
            <div className="Info to Add" className="col s6">
              <h6>Enter Details of the Board Members (Optional)</h6>
              <div className="row">
                <div className="input-field col s3" title="Board Member Name">
                  <i class="material-icons prefix">person</i>
                  <input
                    type="text"
                    placeholder="Board Member Name"
                    name="bname"
                    value={this.state.bname}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row" title="Board Member Email">
                <div className="input-field col s3">
                  <i class="material-icons prefix">email</i>
                  <input
                    type="text"
                    placeholder="Board Member Email"
                    name="bemaail"
                    value={this.state.bemaail}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row" title="Board Member Title">
                <div className="input-field col s3">
                  <i class="material-icons prefix">business_center</i>
                  <input
                    type="text"
                    placeholder="Board Member Title"
                    name="btitle"
                    value={this.state.btitle}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div
                className="row"
                title="Click Here to Submit"
                style={{ paddingTop: "30px" }}
              >
                <div className="col s6">
                  <button
                    type="submit"
                    class="waves-effect waves-light btn green ligthen-3"
                    onClick={this.addMemberP}
                    style={{ marginLeft: "50px" }}
                  >
                    Add Member
                    <i class="material-icons right">send</i>
                  </button>
                </div>
                <div className="col s6">
                  <button
                    type="submit"
                    class="waves-effect waves-light btn red ligthen-3"
                    onClick={this.delMemberP}
                  >
                    Undo
                    <i class="material-icons right">undo</i>
                  </button>
                </div>
              </div>
            </div>
            <div className="Table that Shows Board Members" className="col s6">
              <table id="Step2-P-Board" className="highlight">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Postion</th>
                  </tr>
                </thead>

                <tr style={{ height: "53px" }}>
                  <td /> <td /> <td />
                </tr>
                <tr style={{ height: "53px" }}>
                  <td /> <td /> <td />
                </tr>
                <tr style={{ height: "53px" }}>
                  <td /> <td /> <td />
                </tr>
                <tr style={{ height: "53px" }}>
                  <td /> <td /> <td />
                </tr>
                <tr style={{ height: "53px" }}>
                  <td /> <td /> <td />
                </tr>
                <tr style={{ height: "53px" }}>
                  <td /> <td /> <td />
                </tr>
              </table>
            </div>
          </div>
          <div className="row" title="Reports">
            <div className="col s12">
              <h6>
                Please Enter The Links of Your Agency's Reports (Optional)
              </h6>
              <div
                id="PchipsReg"
                class="chips"
                onChange={this.onChipAddP}
                onKeyDown={this.onChipAddP}
              />
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Step2;
