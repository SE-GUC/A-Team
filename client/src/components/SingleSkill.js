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
        <p className="delele">
          {this.props.skill}
          <a
            onClick={this.onSubmit}
            onTouchStart={(document.body.style.cursor = "pointer")}
            onTouchEnd={(document.body.style.cursor = "default")}
          >
            <i class="right material-icons">close</i>
          </a>
        </p>
      </div>
    );
  }
}

export default TaskSkills;
