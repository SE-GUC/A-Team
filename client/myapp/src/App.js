import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar'
import PartnerRequests from './components/PartnerRequests'
import axios from 'axios';
import test1 from  './components/test1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
         <PartnerRequests/>
         <test1/>     
      </div>
    );
  }
}

export default App;
