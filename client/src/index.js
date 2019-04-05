import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Dummy from './components/Dummy'
import TaskPostForm from './components/TaskPostForm'

const routing=(
    <Router>
    <div>
      <Route path="/App" component={App} />
      <Route path="/dummy" component={Dummy} />
      <Route path='/submit_task' component={TaskPostForm}/>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));



