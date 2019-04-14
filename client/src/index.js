import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Events from './components/Events'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import PartnerRequests from './components/PartnerRequests'
import TaskControl from './TaskControl';
import Dummy from './components/Dummy'
import TaskList from './components/TaskList'
import TaskPostForm from './components/TaskPostForm'
import Recommend from './components/Recommend';
import Review from './components/StoryOnepointTwo';
import StoryOnePointEleven from './components/StoryOnePointEleven'
import Event from './components/Events'
import Partnerreq from './components/PartnerRequests'
import Locationcomps from './components/Locationcomps'
import CreateEvent from './components/CreateEvent'
import ApplyProject from './components/ApplyForProj'
import CancelApp from './components/CancelApp'
import ViewAllProjectsComponent from './components/Admin/ViewAllProjectsComponent';
import ViewAllEventsContainer from './components/Admin/ViewAllEventsContainer';
//import EventCard from './components/EventsCardContainer'
import ViewPendingEventsComponent from './components/Admin/ViewPendingEventsComponent'
import MainPage from './components/Admin/MainPage'

import CardTest from './components/CardTest';
import 'materialize-css/dist/css/materialize.min.css';
import ViewTApplicants from './components/ViewTaskApplicants';

import ProjectPostForm from './components/ProjectPostForm'
import EventCard from './components/EventCards/EventsCardContainer'
import AdminViewEvents from './components/Admin/ViewAllEventsContainer'
import Home from './components/HomePage'

import Feedback from './components/EventCards/FeedbackCardContainer'
import ApplicationCard from './components/EventCards/ApplicationCardContainer'
// import ApplicantsCard from './components/EventCards/ApplicantCardsContainer'
import EventsPartner from './components/EventCards/EventsPartnerContainer'
import EventsPartnerFeedbacks from './components/EventCards/EventPartnerFeedbackContainer'
import TaskCardContainer from './components/TaskCardContainer'
import EventModule from './components/EventCards/EventModule'


const routing=(
    <Router>
    <div>
    <Route path="/" component={Home} />
    <Route path="/task_card" component={TaskCardContainer} />
      <Route path="/Events" component={Events} />
      {/* <Route path="/PartnerRequests" component={PartnerRequests}/>     */}
      <Route path="/card" component={EventCard}/>    
      <Route path="/post_project" component={ProjectPostForm}/>  
      <Route path="/adminContainer" component={AdminViewEvents}/>    
      <Route path="/feedback" component={Feedback}/>    
      <Route path="/appcard" component={ApplicationCard}/>    
      <Route path='/eventmodule' component={EventModule}/>
      <Route path='/partnerrequests' component={EventsPartner}/>
      <Route path='/partnerfeedbacks' component={EventsPartnerFeedbacks }/>
    
      <Route path="/task_control_panel" component={TaskControl} />
      <Route path="/get_tasks" component={TaskList}/>
      <Route path="/dummy" component={Dummy} />
      <Route path='/submit_task' component={TaskPostForm}/>
      <Route path="/recommend" component={Recommend} />
      <Route path="/Review" component={Review} />
      <Route path="/Admin" component={MainPage} />

      <Route path="/Event" component={Event} />
      <Route path="/Partner_Requests" component={Partnerreq} />
      <Route path="/locations" component={Locationcomps} />
      <Route path="/Create_Events" component={CreateEvent} />
      <Route path="/applyproj" component={ApplyProject} />
      <Route path="/cancelapp" component={CancelApp} />
      <Route path="/viewallproj" component={ViewAllProjectsComponent} />
      <Route path="/viewallevents" component={ViewAllEventsContainer} />
      <Route path="/viewpendingevents" component={ViewPendingEventsComponent} />




      
      <Route path="/StoryOnePointEleven" component={StoryOnePointEleven} />

    
      
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));



