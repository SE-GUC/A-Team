import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EventNavbar from './components/EventNavbar'
import PartnerRequests from './components/PartnerRequests';
import Events from './components/Events';

import axios from 'axios';

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
              <EventNavbar/>
              <PartnerRequests/>
          </div>
      )
  }
  if(this.state.isOpen2) {
      return(
      <div>
          <EventNavbar/>
          <Events/>
      </div>            
      )
  } 
  else
    return (
      <div className="App">
        <EventNavbar/>
      </div>
    );
  }
}

export default App;
