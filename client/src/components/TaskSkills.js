import React, { Component } from 'react';
import SingleSkill from './SingleSkill'
export class TaskSkills extends Component {
  

  render() {
    
    return this.props.skills.map((skill)=>(
        
    <SingleSkill skill={skill} delSkill={this.props.delSkill}/>
    ))
  }
}

export default TaskSkills;