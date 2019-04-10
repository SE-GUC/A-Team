import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PartnerRequests from './components/PartnerRequests';
import Events from './components/Events';



class App extends Component {

  state={
    isOpen: false,
    isOpen2:false
}

toggle=() =>
{
    this.setState({
        isOpen:true,
        isOpen2:false
    })
}
toggle2=() =>
{
    this.setState({
        isOpen:false,
        isOpen2:true
    })
}

  render() {
    if (this.state.isOpen) {
      return (
          <div>
              
              <PartnerRequests/>
          </div>
      )
  }
  if(this.state.isOpen2) {
      return(
      <div>
          <Events/>
      </div>            
      )
  } 
  else
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
