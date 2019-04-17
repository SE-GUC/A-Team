import React, { Component } from 'react'
import AddSkill from '../AddSkill'
import TaskSkills from '../TaskSkills'
class Intrests extends Component {
    //addSkill => The Method That will add The Item In the Array
    //delSkill => The Method That will remove The Item
    //skills => The Array That Holds The Items ie: current state
    //col => The Criteria Provided
  render () {
    return <div>
         <table>
              <tr >
                <td><AddSkill addSkill={this.props.addSkill}  col={this.props.col}/></td>
                <td><TaskSkills skills={this.props.skills} delSkill={this.props.delSkill} /></td>
                </tr>
            </table>
    </div>
  }
}

export default Intrests