import React, { Component } from 'react';
import AddSkill from './AddSkill'
import TaskSkills from './TaskSkills'
export class Skills extends Component {
  

  render() {
    
    return (
      
      
        <div>
            <table>
              <tr>
                <td><AddSkill addSkill={this.props.addSkill} skills={this.props.skills} state={this.props.state}/></td>
                <td><TaskSkills skills={this.props.skills} delSkill={this.props.delSkill} state={this.props.state}/></td>
                </tr>
            </table>
        </div>
    )
  }
}

export default Skills;