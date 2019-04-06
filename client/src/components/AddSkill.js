import React, { Component } from 'react';

export class AddSkill extends Component {
  state={
        newSkill:''
  }
  onChange=(e)=> this.setState({newSkill:e.target.value});    
  onSubmit=(e)=>{
      e.preventDefault()
      this.props.addSkill(this.state.newSkill)
      this.setState({newSkill:''})
  }
  render() {
    
    return (
            <div>
            <form onSubmit={this.onSubmit}>
            <input type='text' 
            name='skill'
             placeholder='Add a Skil..' 
             style={{flex:'10',padding:'5px'}}
             value={this.state.newSkill}
             onChange={this.onChange}
             />
            <input type='submit' value='submit'className='btn'style={{flex:'1'}}/>
            </form>
            </div>
    )
  }
}

export default AddSkill;