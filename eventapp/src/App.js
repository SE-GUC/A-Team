import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
class App extends Component {
  state = {
    show:false,
  }
  
  renderStory() {
    return(
      <div>
    <h1>Events</h1>
    <button type="submit" onClick={this.booleanShow}>Show Events</button>
    </div>
      )
  }
  booleanShow = event => {
    event.preventDefault();
    this.setState({
      show:true,

    })
  }


  renderEvents() {
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
    return (
      <div>
      <h1>Events</h1>
      <button type="submit" onClick={this.booleanShow}>Show Events</button>
      </div>
    )
  }
}


export default App;