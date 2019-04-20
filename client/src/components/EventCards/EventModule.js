import React, { Component } from 'react';
import EventCard from './EventsCardContainer'
import ApplicationCard from './ApplicationCardContainer'
import EventsPartner from './EventsPartnerContainer'
import EventsPartnerFeedbacks from './EventPartnerFeedbackContainer'
import FilterEvents from './FilterEventsContainer'
import {
    Container, 
    Button
} from "reactstrap";
import FeedbackCardContainer from './FeedbackCardContainer';

class Events extends Component {
    
    state = {
        show:false,
        showFeedbacks:false,
        showByType:false,
        showApplication: false,
        showFeedbacksofPartner:false,
        ShowEventsFiltered:false
      }
        booleanShow = event => {
        event.preventDefault();
        this.setState({
          show:true,
          showFeedbacks:false,
          showByType:false,
          showApplication: false,
          showFeedbacksofPartner:false,
          ShowEventsFiltered:false

    
    
        })
      }
      booleanShowFeedbacks = event => {
        event.preventDefault();
        this.setState({
          show:false,
          showFeedbacks:true,    
          showByType:false,
          showApplication: false,
          showFeedbacksofPartner:false,
          ShowEventsFiltered:false

    
        })
      }
    
      booleanShowByType = event => {
        event.preventDefault();
        this.setState({
          show:false,
          showFeedbacks:false,    
          showByType:true,
          showApplication: false,
          showFeedbacksofPartner:false,
          ShowEventsFiltered:false

    
        })
      }
    
      booleanApply = event => {
        event.preventDefault();
        this.setState({
          show:false,
          showFeedbacks:false,    
          showByType:false,
          showApplication: true,
          showFeedbacksofPartner:false,
          ShowEventsFiltered:false

      })
      }
      
      booleanFeedbacks = event =>{
        event.preventDefault();
        this.setState({
          show:false,
          showFeedbacks:false,    
          showByType:false,
          showApplication: false,
          showFeedbacksofPartner:true,
          ShowEventsFiltered:false

      })
      }
      booleanShowEventsfiltered = event =>{
        event.preventDefault();
        this.setState({
          show:false,
          showFeedbacks:false,    
          showByType:false,
          showApplication: false,
          showFeedbacksofPartner:false,
          ShowEventsFiltered:true

      })
      }
    
    
      renderEvents() {
        return(
        <div>
            <Container>
            <h1>Events</h1>
        
                <Button color="dark" style={{marginBottom:'2rem'}}  onClick={this.booleanShow}>Show Events</Button> 
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowFeedbacks}>Show Feedbacks of Event</Button> 
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowByType}>Accept Applicants</Button> 
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanApply}>Apply</Button> 
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanFeedbacks}>Show feedbacks on my Events</Button> 
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowEventsfiltered}>Show Events filtered</Button> 

                <EventCard/>

            </Container>

        </div>
          )
      }
    
      renderFeedbacks() {
        return(
          <div>
              <Container>
                 <h1>Events</h1>
                    <Button color="dark" style={{marginBottom:'2rem'}}  onClick={this.booleanShow}>Show Events</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowFeedbacks}>Show Feedbacks of Event</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowByType}>Accept Applicants</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanApply}>Apply</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanFeedbacks}>Show feedbacks on my Events</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowEventsfiltered}>Show Events filtered</Button> 

                    <FeedbackCardContainer/>
              </Container>
          </div>
            )
      
      }
      renderByType() {
        return(
          <div>
              <Container>
              <h1>Events</h1>
                <Button color="dark" style={{marginBottom:'2rem'}}  onClick={this.booleanShow}>Show Events</Button> 
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowFeedbacks}>Show Feedbacks of Event</Button> 
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowByType}>Accept Applicants</Button> 
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanApply}>Apply</Button> 
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanFeedbacks}>Show feedbacks on my Events</Button> 
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowEventsfiltered}>Show Events filtered</Button> 

                <EventsPartner/>
              </Container>
          </div>
            )
      
      }
      renderApplicaiton() {
        return(
          <div>
              <Container>
                 <h1>Events</h1>
                    <Button color="dark" style={{marginBottom:'2rem'}}  onClick={this.booleanShow}>Show Events</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowFeedbacks}>Show Feedbacks of Event</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowByType}>Accept Applicants</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanApply}>Apply</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanFeedbacks}>Show feedbacks on my Events</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowEventsfiltered}>Show Events filtered</Button> 

                    <ApplicationCard/>

              </Container>
          </div>
            )
     
      }
      rendershowEventsfiltered(){
        return(
          <div>
              <Container>
                 <h1>Events</h1>
                    <Button color="dark" style={{marginBottom:'2rem'}}  onClick={this.booleanShow}>Show Events</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowFeedbacks}>Show Feedbacks of Event</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowByType}>Accept Applicants</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanApply}>Apply</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanFeedbacks}>Show feedbacks on my Events</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowEventsfiltered}>Show Events filtered</Button> 

                    <FilterEvents/>

              </Container>
          </div>
            )
      }
      renderFeedbacksofPartner() {
        return(
          <div>
              <Container>
                 <h1>Events</h1>
                    <Button color="dark" style={{marginBottom:'2rem'}}  onClick={this.booleanShow}>Show Events</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowFeedbacks}>Show Feedbacks of Event</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowByType}>Accept Applicants</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanApply}>Apply</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanFeedbacks}>Show feedbacks on my Events</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowEventsfiltered}>Show Events filtered</Button> 

                    <EventsPartnerFeedbacks/>

              </Container>
          </div>
            )

      }
      render() {
        if(this.state.show) {
          return this.renderEvents()
        }
        if (this.state.showFeedbacks) {
          return this.renderFeedbacks();
        }
        if (this.state.showByType) {
          return this.renderByType();
        }
        if (this.state.showApplication){
          return this.renderApplicaiton();
        }
        if(this.state.showFeedbacksofPartner)
        return this.renderFeedbacksofPartner();
        if(this.state.ShowEventsFiltered)
        return this.rendershowEventsfiltered();
        return (
          <div>
              <Container>
                 <h1>Events</h1>
                    <Button color="dark" style={{marginBottom:'2rem'}}  onClick={this.booleanShow}>Show Events</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowFeedbacks}>Show Feedbacks of Event</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowByType}>Accept Applicants</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanApply}>Apply</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanFeedbacks}>Show feedbacks on my Events</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowEventsfiltered}>Show Events filtered</Button> 

              </Container>

            </div>
        )
      }
    }

// ReactDOM.render(
//     <Events subreddit="reactjs"/>,
//     document.getElementById('root')
// )

export default Events;