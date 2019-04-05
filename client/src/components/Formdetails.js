import React, { Component } from 'react';


export class Formdetails extends Component {
  render() {
      console.log(this.props.forms)
      
    return (
    <div>
        <p>{this.props.forms}</p>
    </div>
    )

    
       
      
    
  }
}

export default Formdetails;