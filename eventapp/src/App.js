import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import ShowFeedbacks from './components/ShowFeedbacks';
class App extends Component {
  state = {
    show:false,
    showFeedbacks:false
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
      showFeedbacks:false

    })
  }
  booleanShowFeedbacks = event => {
    event.preventDefault();
    this.setState({
      show:false,
      showFeedbacks:true

    })
  }


  renderEvents() {
    return(
    <div>
    <h1>Events</h1>
    <button type="ShowEvents" onClick={this.booleanShow}>Show Events</button> 
    <button type="ShowEvents" onClick={this.booleanShowFeedbacks}>Show Feedbacks of Event</button> 
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
      <ShowFeedbacks/>
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
    return (
      <div>
      <h1>Events</h1>
      <button type="submit" onClick={this.booleanShow}>Show Events</button>
      <button type="ShowEvents" onClick={this.booleanShowFeedbacks}>Show Feedbacks of Event</button> 
        </div>
    )
  }
}


export default App;