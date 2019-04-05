import React from 'react';
import ReactDOM from 'react-dom';
import TaskControl from './TaskControl';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Dummy from './components/Dummy'
import TaskList from './components/TaskList'
import TaskPostForm from './components/TaskPostForm'

const routing=(
    <Router>
    <div>
      <Route path="/task_control_panel" component={TaskControl} />
      <Route path="/get_tasks" component={TaskList}/>
      <Route path="/dummy" component={Dummy} />
      <Route path='/submit_task' component={TaskPostForm}/>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));



