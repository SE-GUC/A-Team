import React, { Component } from "react";
import axios from 'axios'
export class Step3 extends Component {
  getType = () => {
    const type = this.props.type;
    if (type[0] === "M") return "Member";
    if (type[0] === "P") return "Partner";
    if (type[0] === "CA") return "Consultancy Agency";
  };
  submit = () => {
    const data = {
      name:this.state.name,
      email:this.state.email,
      username:this.state.username,
      password:this.state.password,
      date_of_birth:this.state.date_of_birth,
      phone:this.state.phone,
      intrests:this.state.intrests,
      is_private:this.state.is_private,
      info:this.state.info,
      field_of_work:this.state.field_of_work,
      board_members:this.state.board_members,
      reports:this.state.reports,
      years_of_experience:this.state.years_of_experience +"Year (s)",
      skills:this.state.skills,
      type:this.state.type,
      applicants:[]
    }
    console.log("Submitting..")
    if(this.data.type[0]===["C"])
    {
      this.data.type=["CA"]
    }
    try{
    axios.post("http://localhost:4000/api/users/register", data).then(res => {
        console.log("Registered",res);
        console.log("Submited..")
        window.alert("Registred");
      });
    } catch (error) {
      console.log("error");
    }
    console.log("DONE..")
  };
  displayArray=(array)=>{
    var result=''
    for(var i=0;i<array.length;i++){
      result =result+array[i]+", "
    }
    return result
  }
  getBoardMemberNames=()=>{
    var members=[]
    var board=this.props.state.board_members
    for(var i=0;i<board.length;i++){
      members.push(board[i].name)
    }
    return this.displayArray(members)
  }
  GetMemberDetails = () => {
    console.log(this.props.state)
    return (
    <div className="StepsF">
        <h4>Registration Overview</h4>
        <p> You Choose to Become a {this.getType()}</p>
        <div title='Summary' className="row">
        <div title='details' className='col s6'>
        <p><strong>Name: </strong>{this.props.state.name}</p>
        <p><strong>Email :</strong>{this.props.state.email}</p>
        <p><strong>Username: </strong>{this.props.state.username}</p>
        <p><strong>Date of Birth: </strong>{this.props.state.date_of_birth}</p>
        <p><strong>Phone Number: </strong>{this.props.state.phone}</p>
        <p><strong>Intrests:</strong>{this.displayArray(this.props.state.intrests)}</p>
        <p><strong>Privacy: </strong>{this.props.state.is_private ? "Private Account":"Not a Private Account"}</p>
        <p><strong>Skills: </strong>{this.displayArray(this.props.state.skills)}</p>
        <p><strong>Years of Experience: </strong>{this.props.state.years_of_experience} Years</p>
        </div>
        <div className='col s6'>
        <p>If you are sure about the information you entered, then complete your Register</p>
        <p>Submitting this form means that you agree with Lirten-Hub's <a href='#'>Terms and Condtions</a></p>
        <button type='submit' class="waves-effect waves-light btn-large" onClick={this.props.submit}><i class="material-icons left">check</i>Complete Register</button>
        </div>
        </div>
        
    </div>
    );
  };
  GetPartnerDetails= ()=>{
    return (
      <div className="StepsF">
      <h4>Registration Overview</h4>
      <p> You Choose to Become a {this.getType()}</p>
      <div title='Summary' className="row">
      <div title='details' className='col s6'>
      <p><strong>Name: </strong>{this.props.state.name}</p>
      <p><strong>Email :</strong>{this.props.state.email}</p>
      <p><strong>Username: </strong>{this.props.state.username}</p>
      <p><strong>Date of Birth: </strong>{this.props.state.date_of_birth}</p>
      <p><strong>Phone Number: </strong>{this.props.state.phone}</p>
      <p><strong>Intrests:</strong>{this.displayArray(this.props.state.intrests)}</p>
      <p><strong>Privacy: </strong>{this.props.state.is_private ? "Private Account":"Not a Private Account"}</p>
      
      <p><strong>Reports: </strong>{this.displayArray(this.props.state)}</p>
      <p><strong>Board Members: </strong>{this.getBoardMemberNames()}</p>
      </div>
      <div className='col s6'>
      <p>If you are sure about the information you entered, then complete your Register</p>
      <p>Submitting this form means that you agree with Lirten-Hub's <a href='#'>Terms and Condtions</a></p>
      <a class="waves-effect waves-light btn-large" onClick={this.props.submit}><i class="material-icons left">check</i>Complete Register</a>
      </div>
      </div>
      
  </div>
    )
  }
  GetAgencyDetails= ()=>{
    return (
      <div className="StepsF">
      <h4>Registration Overview</h4>
      <p> You Choose to Become a {this.getType()}</p>
      <div title='Summary' className="row">
      <div title='details' className='col s6'>
      <p><strong>Name: </strong>{this.props.state.name}</p>
      <p><strong>Email :</strong>{this.props.state.email}</p>
      <p><strong>Username: </strong>{this.props.state.username}</p>
      <p><strong>Date of Birth: </strong>{this.props.state.date_of_birth}</p>
      <p><strong>Phone Number: </strong>{this.props.state.phone}</p>
      <p><strong>Intrests:</strong>{this.displayArray(this.props.state.intrests)}</p>
      <p><strong>Privacy: </strong>{this.props.state.is_private ? "Private Account":"Not a Private Account"}</p>
      
      <p class="flow-text"><strong>Information: </strong>{this.props.state.info}</p>
      <p><strong>Reports: </strong>{this.displayArray(this.props.state.reports)}</p>
      <p><strong>Board Members: </strong>{this.getBoardMemberNames()}</p>
      </div>
      <div className='col s6'>
      <p>If you are sure about the information you entered, then complete your Register</p>
      <p>Submitting this form means that you agree with Lirten-Hub's <a href='#'>Terms and Condtions</a></p>
      <a class="waves-effect waves-light btn-large" onClick={this.props.submit}><i class="material-icons left">check</i>Complete Register</a>
      </div>
      </div>
      
  </div>
    )
  }

  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    if (this.props.type[0] === "M") {
        return this.GetMemberDetails()
    }
    if (this.props.type[0] === "P") {
      return this.GetPartnerDetails()
  }
    if (this.props.type[0]=="C"){
      return this.GetAgencyDetails()
    }

    return (
      <div>
        <h4>Registration Overview</h4>
        <p> You Choose to Become a {this.getType}</p>
      </div>
    );
  }
}
export default Step3;
