import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/box_css.css'

import Feedback from './components/EventCards/FeedbackCardContainer'
import ApplicationCard from './components/EventCards/ApplicationCardContainer'
// import ApplicantsCard from './components/EventCards/ApplicantCardsContainer'
import EventsPartner from './components/EventCards/EventsPartnerContainer'
import EventsPartnerFeedbacks from './components/EventCards/EventPartnerFeedbackContainer'
import TaskCardContainer from './components/TaskCardContainer'
import Register from './components/Authentication/Register'
import EventModule from './components/EventCards/EventModule'
import NavPartner from './components/Authentication/NavPartner'

import LoginPage from './components/Authentication/LoginPage'
import taskviewapplicants from './components/Tasksviewapplicants'

import './css/navbar.css'

const routing=(
    <Router>
    <div>
    <Route path="/homepage" component={Home} />
    <Route path="/task_card" component={TaskCardContainer} />
    <Route path="/view_applicants" component={taskviewapplicants} />
    <Route path="/Events" component={EventCard} />
      <Route path="/partnernav" component={NavPartner}/>    
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
)
ReactDOM.render(routing, document.getElementById('root'));



