import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import ShowFeedbacks from './components/ShowFeedbacks';
import GetEventsByType from './components/GetEventsByType';
class App extends Component {
  state = {
    show:false,
    showFeedbacks:false,
    showByType:false
  }
  
  // renderStory() {
  //   return(
  //     <div>
  //   <h1>Events</h1>
  //   <button type="submit" onClick={this.booleanShow}>Show Events</button>
  //   </div>
  //     )
  // }
  booleanShow = event => {
    event.preventDefault();
    this.setState({
      show:true,
      showFeedbacks:false,
      showByType:false

    })
  }
  booleanShowFeedbacks = event => {
    event.preventDefault();
    this.setState({
      show:false,
      showFeedbacks:true,    
      showByType:false
    })
  }

  booleanShowByType = event => {
    event.preventDefault();
    this.setState({
      show:false,
      showFeedbacks:false,    
      showByType:true

    })
  }


  renderEvents() {
    return(
    <div>
    <h1>Events</h1>
    <button type="ShowEvents" onClick={this.booleanShow}>Show Events</button> 
    <button type="ShowEvents" onClick={this.booleanShowFeedbacks}>Show Feedbacks of Event</button> 
    <button type="ShowEvents" onClick={this.booleanShowByType}>Show Events by Type</button> 
    <EventList/>
    </div>
      )
  }

  renderFeedbacks() {
    return(
      <div>
      <h1>Events</h1>
      <button type="ShowEvents" onClick={this.booleanShow}>Show Events</button> 
      <button type="ShowEvents" onClick={this.booleanShowFeedbacks}>Show Feedbacks of Event</button> 
      <button type="ShowEvents" onClick={this.booleanShowByType}>Show Events by Type</button> 
      <ShowFeedbacks/>
      </div>
        )
  
  }
  renderByType() {
    return(
      <div>
      <h1>Events</h1>
      <button type="ShowEvents" onClick={this.booleanShow}>Show Events</button> 
      <button type="ShowEvents" onClick={this.booleanShowFeedbacks}>Show Feedbacks of Event</button> 
      <button type="ShowEvents" onClick={this.booleanShowByType}>Show Events by Type</button> 
      <GetEventsByType/>
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
    return (
      <div>
      <h1>Events</h1>
      <button type="submit" onClick={this.booleanShow}>Show Events</button>
      <button type="ShowEvents" onClick={this.booleanShowFeedbacks}>Show Feedbacks of Event</button> 
      <button type="ShowEvents" onClick={this.booleanShowByType}>Show Events by Type</button> 
        </div>
    )
  }
}


export default App;