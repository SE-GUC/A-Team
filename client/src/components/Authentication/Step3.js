import React, { Component } from "react";

export class Step3 extends Component {
  getType = () => {
    const type = this.props.type;
    if (type[0] === "M") return "Member";
    if (type[0] === "P") return "Partner";
    if (type[0] === "CA") return "Consultancy Agency";
  };
  displayArray=(array)=>{
    var result=''
    for(var i=0;i<array.length;i++){
      result =result+array[i]+", "
    }
    return result
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
        <a class="waves-effect waves-light btn-large"><i class="material-icons left">check</i>Complete Register</a>
        </div>
        </div>
        
    </div>
    );
  };

  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    if (this.props.type[0] === "M") {
        return this.GetMemberDetails()
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
