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
           <script>
             {console.log("have a",this.props.col)}
           </script>
            <input type='text' 
              className='skillip'
             name='skill'
             placeholder='Type a Skill to add..' 
             style={{flex:'10',padding:'5px'}}
             onChange={this.onChange}
             id='myInput'
             />
            <input
             type='submit' 
             className='skillbtn' 
             onClick={this.onSubmit}></input>
            <Autocomplete suggestions={this.props.col.data} />
            
            
       


            </div>
    )
    
  }
}

export default AddSkill;