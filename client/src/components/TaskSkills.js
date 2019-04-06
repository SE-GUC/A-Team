import React, { Component } from 'react';
import SingleSkill from './SingleSkill'
export class TaskSkills extends Component {
  constructor(props){
    super(props)
  }

  render() {
    
    var skills_shell=this.props.skills
    return skills_shell.map((ns)=>(  
    <SingleSkill skill={ns} delSkill={this.props.delSkill} state={this.props.state}/>
    ))
  }
}

export default TaskSkills;