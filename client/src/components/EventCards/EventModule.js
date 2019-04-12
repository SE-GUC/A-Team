import React, { Component } from 'react';
import '../App.css';
import EventList from '../EventList';
import ShowFeedbacks from '../ShowFeedbacks';
import GetEventsByType from '../GetEventsByType';
import ApplyForEvent from '../ApplyForEvent';
import {
    Container, 
    Button
} from "reactstrap";

class Events extends Component {
    
    state = {
        show:false,
        showFeedbacks:false,
        showByType:false,
        showApplication: false
      }
        booleanShow = event => {
        event.preventDefault();
        this.setState({
          show:true,
          showFeedbacks:false,
          showByType:false,
          showApplication: false
    
    
        })
      }
      booleanShowFeedbacks = event => {
        event.preventDefault();
        this.setState({
          show:false,
          showFeedbacks:true,    
          showByType:false,
          showApplication: false
    
        })
      }
    
      booleanShowByType = event => {
        event.preventDefault();
        this.setState({
          show:false,
          showFeedbacks:false,    
          showByType:true,
          showApplication: false
    
        })
      }
    
      booleanApply = event => {
        event.preventDefault();
        this.setState({
          show:false,
          showFeedbacks:false,    
          showByType:false,
          showApplication: true
      })
      }
    
    
      renderEvents() {
        return(
        <div>
            <Container>
            <h1>Events</h1>
        
                <Button color="dark" style={{marginBottom:'2rem'}}  onClick={this.booleanShow}>Show Events</Button> 
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowFeedbacks}>Show Feedbacks of Event</Button> 
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowByType}>Show Events by Type</Button> 
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanApply}>Apply</Button> 
                {/* <EventList/> */}

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
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowByType}>Show Events by Type</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanApply}>Apply</Button> 
                    {/* <ShowFeedbacks/> */}
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
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowByType}>Show Events by Type</Button> 
                <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanApply}>Apply</Button> 
                {/* <GetEventsByType/> */}
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
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowByType}>Show Events by Type</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanApply}>Apply</Button> 
                    {/* <ApplyForEvent/> */}

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
        return (
          <div>
              <Container>
                 <h1>Events</h1>
                    <Button color="dark" style={{marginBottom:'2rem'}}  onClick={this.booleanShow}>Show Events</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowFeedbacks}>Show Feedbacks of Event</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanShowByType}>Show Events by Type</Button> 
                    <Button color="dark" style={{marginBottom:'2rem'}} onClick={this.booleanApply}>Apply</Button> 
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