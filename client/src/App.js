import React, { Component } from 'react';
import './App.css';
import AppNavbar from './Decide.js/AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskList from './Decide.js/TaskList';
import Recommend from './Decide.js/Recommend';



class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Recommend/>
        
      </div>
    );
  }
}

export default App;
