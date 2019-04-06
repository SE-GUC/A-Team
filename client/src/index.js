import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Events from './components/Events'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import PartnerRequests from './components/PartnerRequests'
import TaskControl from './TaskControl';
import Dummy from './components/Dummy'
import TaskList from './components/TaskList'
import TaskPostForm from './components/TaskPostForm'
import Recommend from './components/Recommend';
import Review from './components/StoryOnepointTwo';
import Taskviewapplicants from './components/Taskviewapplicants'

const routing=(
    <Router>
    <div>
    <Route path="/" component={App} />
      <Route path="/Events" component={Events} />
      <Route path="/PartnerRequests" component={PartnerRequests}/>    
    
      <Route path="/task_control_panel" component={TaskControl} />
      <Route path="/get_tasks" component={TaskList}/>
      <Route path="/dummy" component={Dummy} />
      <Route path='/submit_task' component={TaskPostForm}/>
      <Route path="/recommend" component={Recommend} />
      <Route path="/Review" component={Review} />
      <Route path="/view_applicants" component={Taskviewapplicants} />
    
      
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));



