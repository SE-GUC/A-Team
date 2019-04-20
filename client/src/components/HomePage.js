import React, { Component } from "react";
import '../css/homepage.css'
import '../css/navbar.css'
import M from 'materialize-css'
import NavGeneral from './NavGeneral'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import TaskControl from '../TaskControl';
import Dummy from '../components/Dummy'
import TaskList from '../components/TaskList'
import TaskPostForm from '../components/TaskPostForm'
import Recommend from '../components/Recommend';
import Review from '../components/StoryOnepointTwo';
import StoryOnePointEleven from '../components/StoryOnePointEleven'
import Event from '../components/Events'
import Partnerreq from '../components/PartnerRequests'
import Locationcomps from '../components/Locationcomps'
import CreateEvent from '../components/CreateEvent'
import ApplyProject from '../components/ApplyForProj'
import CancelApp from '../components/CancelApp'
import ViewAllProjectsComponent from './Admin/ViewAllProjectsComponent';
import ViewAllEventsContainer from './Admin/ViewAllEventsContainer';
//import EventCard from './components/EventsCardContainer'
import ViewPendingEventsComponent from './Admin/ViewPendingEventsComponent'
import MainPage from './Admin/MainPage'
import Skills from './Admin/SkillController'
import 'materialize-css/dist/css/materialize.min.css';
import ViewTApplicants from '../components/ViewTaskApplicants';
import ProjectPostForm from '../components/ProjectPostForm'
import EventCard from '../components/EventCards/EventsCardContainer'
import AdminViewEvents from './Admin/ViewAllEventsContainer'
import Feedback from '../components/EventCards/FeedbackCardContainer'
import ApplicationCard from '../components/EventCards/ApplicationCardContainer'
// import ApplicantsCard from './components/EventCards/ApplicantCardsContainer'
import EventsPartnerFeedbacks from '../components/EventCards/EventPartnerFeedbackContainer'
import TaskCardContainer from '../components/TaskCardContainer'
import Register from '../components/Authentication/Register'
import EventModule from '../components/EventCards/EventModule'
import NavPartner from '../components/Authentication/NavPartner'

import LoginPage from '../components/Authentication/LoginPage'

import '../css/navbar.css'
export class HomePage extends Component {
  componentDidMount(){
    let elems = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
  }
  render() {

    return (
      <div>
        <NavGeneral/>
        <Router>
    <div>
    <Route path="/task_card" component={TaskCardContainer} />
    <Route path="/Events" component={EventCard} />
      <Route path="/partner" component={NavPartner}/>    
      <Route path="/partner/Events" component={EventCard} />
      <Route path="/partner/Create_Events" component={CreateEvent} />
      <Route path="/partner/feedback" component={Feedback}/>    
      <Route path="/partner/appcard" component={ApplicationCard}/>    
      <Route path='/partner/partnerfeedbacks' component={EventsPartnerFeedbacks }/>
      <Route path='/partner/submit_task' component={TaskPostForm}/>
      <Route path="/partner/get_tasks" component={TaskList}/>
      <Route path="/partner/viewrtaskapplicants" component={ViewTApplicants}/>
      <Route path="/partner/task_card" component={TaskCardContainer} />
      <Route path="/partner/viewallproj" component={ViewAllProjectsComponent} />
      <Route path="/partner/post_project" component={ProjectPostForm}/>  
      {/* <Route path="/card" component={EventCard}/>     */}
      <Route path="/post_project" component={ProjectPostForm}/>  
      <Route path="/adminContainer" component={AdminViewEvents}/>    
      <Route path="/feedback" component={Feedback}/>    
      <Route path="/appcard" component={ApplicationCard}/>    
      {/* <Route path='/eventmodule' component={EventModule}/> */}
      {/* <Route path='/partnerrequests' component={EventsPartner}/> */}
      <Route path='/partnerfeedbacks' component={EventsPartnerFeedbacks }/>
      <Route path='/skills' component={Skills }/>
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
      <Route path='/register' component={Register}/>
      {/* <Route path='/event_module' component={Event_Module}/> */}
      <Route path='/login' component={LoginPage}/>
    
      
    </div>
  </Router>
      </div>
    );
  }
}

export default HomePage;
