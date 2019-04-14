import React, { Component } from "react";

export class SkillItem extends Component {
  render() {
    return (
      <div class="chip">
        {this.props.skill}
      </div>
    );
  }
}

export default SkillItem;
