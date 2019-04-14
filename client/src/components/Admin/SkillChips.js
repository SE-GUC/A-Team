import React, { Component } from "react";
import SkillItem from './SkillItem'
export class SkillChips extends Component {
  render() {
    return this.props.skills.map((ele)=>
        <SkillItem skill={ele}/>
    );
  }
}

export default SkillChips;
