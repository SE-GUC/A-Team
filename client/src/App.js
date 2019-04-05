import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import LocationList from "./components/LocationList";
import LocationPost from "./components/LocationPost";
import TaskPost from './components/TaskPost';
import TaskList from './components/TaskList';
import TaskStoryOneThreeOne from './components/TaskStoryOneThreeOne';
import TaskStoryOneThreeTwo from './components/TaskStoryOneThreeTwo';


class App extends Component {
  state = {
    clickedShowTasks:false,
    clickedShowStory:false,
    clickedPostTask:false
    
  }
  
  handleStuff = event => {
    event.preventDefault();
    this.setState({
      clickedShowTasks:true,
      clickedShowStory:false,
      clickedPostTask:false
      

      
    })
  }
  handleMoreStuff = event => {
    event.preventDefault();
    this.setState({
      clickedShowTasks:false,
      clickedShowStory:true,
      clickedPostTask:false
      
        })
  }
  handleEvenMoreStuff = event => {
    event.preventDefault();
    this.setState({
      clickedShowTasks:false,
      clickedShowStory:false,
      clickedPostTask:true
        })
  }
  renderStory() {
    return(
      <div>
    <h1>Tasks Control Panel</h1>
    <p>Right now, you can enter a task's ID and recieve its desc, or change a task's repsonse from admin as dictated by Story 1.3, to get the list of tasks, simply click on the "Task List" on the navar</p>
    <button type="submit" onClick={this.handleStuff}>Show Tasks</button>
    <button type="submit" onClick={this.handleMoreStuff}>Back to Story Componenets</button>
    <button type="submit" onClick={this.handleEvenMoreStuff}>Task Post</button>
    
    
    <AppNavbar/>
    <TaskStoryOneThreeOne/>
    <TaskStoryOneThreeTwo/>
    </div>
      )
  }
  renderTasks() {
    
    return(
    <div>
    <h1>Tasks Control Panel</h1>
    <p>Right now, you can enter a task's ID and recieve its desc, or change a task's repsonse from admin as dictated by Story 1.3, to get the list of tasks, simply click on the "Task List" on the navar</p>
    <button type="submit" onClick={this.handleStuff}>Show Tasks</button>
    <button type="submit" onClick={this.handleMoreStuff}>Back to Story Componenets</button>
    <button type="submit" onClick={this.handleEvenMoreStuff}>Task Post</button>
    
    <AppNavbar/>
    <TaskList/>
    </div>
      )
  }
  renderPostTask() {
    return(
      <div>
      <h1>Tasks Control Panel</h1>
      <p>Right now, you can enter a task's ID and recieve its desc, or change a task's repsonse from admin as dictated by Story 1.3, to get the list of tasks, simply click on the "Task List" on the navar</p>
      <button type="submit" onClick={this.handleStuff}>Show Tasks</button>
      <button type="submit" onClick={this.handleMoreStuff}>Back to Story Componenets</button>
      <button type="submit" onClick={this.handleEvenMoreStuff}>Task Post</button>
      
      <AppNavbar/>
      <TaskPost/>
      </div>
        )

  }
  
  render() {
    if(this.state.clickedShowTasks) {
      return this.renderTasks()
    }
    if(this.state.clickedShowStory) {
      
     return this.renderStory()
    }
    if(this.state.clickedPostTask) {
      
      return this.renderPostTask()
    }
    return (
      <div>
      <h1>Tasks Control Panel</h1>
      <p>Right now, you can enter a task's ID and recieve its desc, or change a task's repsonse from admin as dictated by Story 1.3, to get the list of tasks, simply click on the "Task List" on the navar</p>
      <button type="submit" onClick={this.handleStuff}>Show Tasks</button>
      <button type="submit" onClick={this.handleMoreStuff}>I dont know what this does</button>
      <button type="submit" onClick={this.handleEvenMoreStuff}>Post Tasks</button>
    
      <AppNavbar/>
      </div>
    )
    
    
    

  }
}


export default App;
