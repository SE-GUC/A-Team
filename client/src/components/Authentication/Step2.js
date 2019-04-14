import React, { Component } from "react";
import Skills from "../../components/Skills";
import axios from 'axios'
export class Step2 extends Component {
    state={
        all_skills:[],
        skills:[],
        years_of_experience:''
    }
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
  getSkillFromDB = () => {
    try {
      axios
        .get("https://ateamse2.herokuapp.com/api/skills/getSkillCollection")
        .then(res => {
          this.setState({ all_skills: res.data });
          return res.data;
        });
    } catch (error) {
      console.log("error");
    }
  };
  componentDidMount() {}

  render() {
    if (this.props.type[0] === "M") {
      //Member Form
      //return <Skills />;
    }
    if (this.props.type[0] === "P") {
      //Partner Form
      return <div />;
    }
    if (this.props.type[0] === "CA") {
      //Consultancy Agency Form
      return <div />;
    }
    return null;
  }
}

export default Step2;
