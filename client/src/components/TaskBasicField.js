import React, { Component } from 'react';


export class TaskBasicField extends Component {
  handlechange=(e)=>{
    this.props.func(e.target.value)
  } 

  render() {
    var textarea={
      resize:'none',
      padding: '12px 20px',
      paddingBotton:'5px',
      boxSizing:' border-box',
      border: '2px solid #f4f4f4',
    }
      
     if(this.props.type==='number') {
    return (
        
        
        <input className='validate' required title={this.props.fieldname} type={this.props.type} placeholder={this.props.fieldname}  min='0'  onChange={this.handlechange} />
        
    )
     }
     if(this.props.type==='bigtext'){
       return(
        
        <div class="input-field col s12">
        <textarea  required title={this.props.fieldname} maxLength='150' cols='25' placeholder={this.props.fieldname+' MIN 10 characters'} style={textarea} 
           onChange={this.handlechange}/>
        </div>
      
         
       )
     }
     else{
      return (
        
        <input className='validate' required title={this.props.fieldname} type={this.props.type} name={this.props.fieldname} placeholder={this.props.fieldname} onChange={this.handlechange} />
        
           
    )
     }

    
       
      
    
  }
}

export default TaskBasicField;