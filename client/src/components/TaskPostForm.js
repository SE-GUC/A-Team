import React, { Component } from "react";
//import Formdetails from './Formdetails'
import TaskBasicField from "./TaskBasicField";
import TaskDatePack from "./TaskDatePack";
import TaskCommitment from "./TaskCommitment";
import Skills from "./Skills";
import axios from "axios";
import "../css/box_css.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

export class Form extends Component {
  state = {
    name: "",
    monetary_compensation: "0",
    price: "1",
    is_assigned: "",
    partner_id: "5cae373eaea50e48600c8483", //Assuming Session
    time_expected: "28 Day(s)",
    level_of_comitment: "Moderate",
    experience_needed: "28 Day(s)",
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
      var msg="You Already Added This Skill!"
      var html="<span style='color:#ffdd42'>"+msg+"</span>"
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
        var msg='You Have To Enter At Least one Skill'
        var html="<span style='color:#ffdd42'>"+msg+"</span>"
        M.toast({html:html })
        return
      }
      const data = {
        name: this.state.name,
        monetary_compensation: this.state.monetary_compensation,
        time_expected: this.state.time_expected,
        level_of_comitment: this.state.level_of_comitment,
        experience_needed: this.state.experience_needed,
        description: this.state.description,
        skills: this.state.skills
      };
      axios({
        method: 'POST',
        url: "http://localhost:4000/api/tasks/add",
        headers: {
            authorization: localStorage.getItem('token')
        }, 
        data: data
      }).then(res=>{
        alert('posted successfully')
        console.log(res)
      })
    .catch(function (error){
      console.log(error)
    })
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
    return <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>;
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
      <div >
        <div>
          <div >
            <div className="container">
            <h4>Create a Task:</h4>
            <p>Please Be Advised that the Task won't be posted untik it is apprved by Lirten-Hub</p>
              <form onSubmit={this.handleSubmit} className="taskForm" >
                <div >
                  <div className='row' title='Task Name and Time-Expected'>
                  <div className="input-field col s6">
                      <TaskBasicField
                        className="text"
                        state={this.state}
                        fieldname="Task Name"
                        type="text"
                        func={this.setname}
                      />
                      </div>
                      <div className="col s6"  style={{marginTop:'15px'}}>
                      <TaskDatePack
                      id="1"
                      fieldname="Time Expected"
                      func={this.setTime}
                    />
                      </div>  
                  </div>
                  <div className="row" title="Description">
                    <div className="input-field col s12">
                    <TaskBasicField
                      fieldname="Task Description"
                      type="bigtext"
                      func={this.setDescription}
                    />
                    </div>
                  </div>
                  <center> <h4>Pricing:</h4></center>
                  <div class='row' title="Pricing">
                  <div className='input-field col s6'>
                  <TaskBasicField
                        classname="money"
                        fieldname="Compensation"
                        type="number"
                        func={this.setCompensation}
                      />
                  </div>
                  <div className='col s6' style={{marginTop:'30px'}}>
                  <p>Your Price Offer for the Task in EGP</p>
                  </div>
                  </div>
                  <center><h4>Requierements:</h4></center>
                  <div className="row" title="Experience and level of commitment" style={{marginBottom:'40px'}}>
                    <div className='col s6'>
                    <TaskDatePack
                    id="2"
                    fieldname="Experience required"
                    func={this.setExperience}
                  />
                    </div>
                    <div className='col s6' style={{borderLeft:'1px dashed black'}}>
                    <TaskCommitment func={this.setCommitment} />
                    </div>
                  </div>
                  <div className='row' title="Skills">
                  <div className='col s6'>
                  <Skills
                  addSkill={this.addSkill}
                  delSkill={this.delSkill}
                  skills={this.state.skills}
                  state={this.state}
                  col={this.state.all_skills}
                />
                  </div>
                  <div className= 'col s6' style={{marginTop:'20px'}}>
                  <p>Please Enter The Skills that are required</p>
                  <p>You have to Enter at least one skill</p>
                  <p>Please Review the information you Entered before submitting</p>
                  <input
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

export default Form;
