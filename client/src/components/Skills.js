import React, { Component } from 'react';
import AddSkill from './AddSkill'
import TaskSkills from './TaskSkills'
export class Skills extends Component {
  

  render() {
    
    return (
        <div>
            <AddSkill addSkill={this.props.addSkill} skills={this.props.skills} delSkill={this.props.delSkill}/>
            <TaskSkills skills={this.props.skills} delSkill={this.props.delSkill}/>
        </div>
    )
  }
}

export default Skills;