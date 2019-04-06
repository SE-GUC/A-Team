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
        var uskills=this.props.state.skills
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
const row={
    background:'#f4f4f4'
}
const btnStyle={
    background:'#ff0000',
    color:'#ffffff',
    border:'none',
    padding:'5px 8px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

export default TaskSkills;