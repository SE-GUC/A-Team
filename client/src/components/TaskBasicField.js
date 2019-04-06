import React, { Component } from 'react';


export class TaskBasicField extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  handlechange=(e)=>{
    this.props.func(e.target.value)
    console.log(e.target.value)
  } 

  render() {
    var textarea={
      resize:'none'
    }
      
     if(this.props.type==='number') {
    return (
        <div>
        <span>$</span>
        <input type={this.props.type} placeholder={this.props.fieldname}  min='0'  onChange={this.handlechange} />
        </div>
    )
     }
     if(this.props.type==='bigtext'){
       return(
         <div>
           <textarea maxLength='150' cols='25' placeholder={this.props.fieldname} style={textarea} 
           onChange={this.handlechange}/>
         </div>
       )
     }
     else{
      return (
        <input type={this.props.type} name={this.props.fieldname} placeholder={this.props.fieldname} onChange={this.handlechange} />   
    )
     }

    
       
      
    
  }
}

export default TaskBasicField;