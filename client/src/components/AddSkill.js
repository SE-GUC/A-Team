import React, { Component } from 'react';
import '../css/box_css.css'
export class AddSkill extends Component {
  state={
        newSkill:''
  }

  onChange=(e)=> {
    this.setState({newSkill:e.target.value})
    
}
  onSubmit=(e)=>{
      e.preventDefault()
      this.props.addSkill(this.state.newSkill)
      this.setState({newSkill:''})
  }
  render() {
    
    return (
            <div>
           
            <input type='text' 
              className='skillip'
             name='skill'
             placeholder='Type a Skill to add..' 
             style={{flex:'10',padding:'5px'}}
             onChange={this.onChange}
             />
            <input
             type='submit' 
             className='skillbtn' 
             onClick={this.onSubmit}></input>
            
            </div>
    )
  }
}

export default AddSkill;