import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskPost from './components/TaskPost';
import TaskList from './components/TaskList';
import TaskStoryOneThreeOne from './components/TaskStoryOneThreeOne';
import TaskStoryOneThreeTwo from './components/TaskStoryOneThreeTwo';

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <TaskStoryOneThreeOne/>
        <TaskStoryOneThreeTwo/>
      </div>
    );
  }
}

export default App;
