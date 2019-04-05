import React, { Component } from 'react';
export class TaskSkills extends Component {
  

  render() {
      const name=this.props.skill
      console.log(name)
    return(
        
        <div>
            <p style={row}>
            {this.props.skill}
            <button style={btnStyle} onClick={this.props.delSkill.bind(this,name)}>X</button>
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