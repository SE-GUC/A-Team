import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskList from './components/TaskList';
import TaskStoryOneThreeOne from './components/TaskStoryOneThreeOne';
import TaskStoryOneThreeTwo from './components/TaskStoryOneThreeTwo';

class TaskControl extends Component {
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

export default TaskControl;
