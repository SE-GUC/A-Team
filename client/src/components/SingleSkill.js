import React, { Component } from 'react';
import '../css/box_css.css'
export class TaskSkills extends Component {
    constructor(props){
        super(props)
        console.log('Single Skill'+props)
      }
    onSubmit=()=>{
        console.log('I want to Delete Task:'+this.props.skill+ 'The State is '+this.props.state.skills)
        var skill=this.props.skill
        this.props.delSkill(skill)
        
    }
    
  render() {
      const name=this.props.skill
      console.log(name)
    return(
        
        <div>
            <p className='delele'>
            {this.props.skill}
            <button className='delete' onClick={this.onSubmit}></button>
            </p>
            
        </div>
    )
  }
}


export default TaskSkills;