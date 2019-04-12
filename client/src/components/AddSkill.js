import React, { Component } from 'react';
import '../css/box_css.css'
import Autocomplete from  './Autocomplete';
export class AddSkill extends Component { 
  state={
        newSkill:'',
        value:''
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
    //Integraet Components is still needed
    return (
            
            <div>
            <Autocomplete suggestions={this.props.col.data} addSkill={this.props.addSkill} />
            </div>
    )
    
  }
}

export default AddSkill;