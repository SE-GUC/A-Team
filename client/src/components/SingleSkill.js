import React, { Component } from "react";
import "../css/box_css.css";
export class TaskSkills extends Component {
  constructor(props) {
    super(props);
    console.log("Single Skill" + props);
  }
  onSubmit = () => {
    var skill = this.props.skill;
    this.props.delSkill(skill);
  };

  render() {
    return (
      <div>
        <div class="chip">
          {this.props.skill}
          <i  onClick={this.onSubmit} class="close material-icons">close</i>
        </div>
      </div>
    );
  }
}

export default TaskSkills;
