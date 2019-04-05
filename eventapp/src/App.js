import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import GetEventsByType from './components/GetEventsByType';
class App extends Component {
  state = {
    show:false,
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
    })
  }
  
  booleanShowByType =event => {
    event.preventDefault();
    this.setState({
      show:false,
      showByType:true
    })
  }


  renderEvents() {
    return(
    <div>
    <h1>Events</h1>
    <button type="ShowEvents" onClick={this.booleanShow}>Show Events</button>
    <GetEventsByType/>
    </div>
      )
  }

  renderEventsByType() {
    return(
      <div>
      <h1>Events</h1>
      <button type="ShowEvents" onClick={this.booleanShow}>Show Events</button>
      <EventList/>
      </div>
        )
  
  }

  render() {
    if(this.state.show) {
      return this.renderEvents()
    }
    if(this.state.showByType) {
      return this.renderEventsByType()
    }
    return (
      <div>
      <h1>Events</h1>
      <button type="submit" onClick={this.booleanShow}>Show Events</button>
      <button type="submit" onClick={this.booleanShowByType}>Show Events By Type</button>      
      </div>
    )
  }
}


export default App;