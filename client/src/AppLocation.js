import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar'
import AppLocNavbar from './components/AppLocNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import LocationList from "./components/LocationList";
import LocationPost from "./components/LocationPost";
import TaskPost from './components/TaskPost';
import TaskList from './components/TaskList';
import TaskStoryOneThreeOne from './components/TaskStoryOneThreeOne';
import TaskStoryOneThreeTwo from './components/TaskStoryOneThreeTwo';
import LocationStoryTwoTwo from './components/LocationStoryTwoTwo';

class AppLocation extends Component {
    state = {

        clickedShowLocations: false,
        clickedPostLocation: false,
        clickedBookLocation: false,

    }

    handleStuff = event => {
        event.preventDefault();
        this.setState({
            clickedShowLocations: true,
            clickedPostLocation: false,
            clickedBookLocation: false,


        })
    }
    handleMoreStuff = event => {
        event.preventDefault();
        this.setState({
            clickedShowLocations: false,
            clickedPostLocation: true,
            clickedBookLocation: false,
        })
    }
    handleEvenMoreStuff = event => {
        event.preventDefault();
        this.setState({
            clickedShowLocations: false,
            clickedPostLocation: false,
            clickedBookLocation: true,
        })
    }
    renderBookedLocation() {
        return (
            <div>
                <h1>Locations Control Panel</h1>
                <p>Right now, you can enter a Location's ID and recieve its desc, or change a task's repsonse from admin as dictated by Story 1.3, to get the list of tasks, simply click on the "Task List" on the navar</p>
                <button type="submit" onClick={this.handleStuff}>Show Location</button>
                <button type="submit" onClick={this.handleMoreStuff}>Post Location</button>
                <button type="submit" onClick={this.handleEvenMoreStuff}>Book Location</button>
                <AppLocNavbar />

                <LocationStoryTwoTwo />
            </div>
        )
    }
    renderLocation() {

        return (
            <div>
                <p>Right now, you can enter a Location's ID and recieve its desc, or change a task's repsonse from admin as dictated by Story 1.3, to get the list of tasks, simply click on the "Task List" on the navar</p>
                <button type="submit" onClick={this.handleStuff}>Show Location</button>
                <button type="submit" onClick={this.handleMoreStuff}>Post Location</button>
                <button type="submit" onClick={this.handleEvenMoreStuff}>Book Location</button>

                <AppLocNavbar />
                <LocationList />
            </div>
        )
    }
    renderPostLocation() {
        return (
            <div>
                <h1>Locations Control Panel</h1>
                <p>Right now, you can enter a locations's ID and recieve its description, and reserve available Locations </p>
                <button type="submit" onClick={this.handleStuff}>Show Location</button>
                <button type="submit" onClick={this.handleMoreStuff}>Post Location</button>
                <button type="submit" onClick={this.handleEvenMoreStuff}>Book Location</button>

                <AppLocNavbar />
                <LocationPost />
            </div>
        )

    }
    render() {
        if (this.state.clickedShowLocations) {

            return this.renderLocation()
        }


        if (this.state.clickedPostLocation) {

            return this.renderPostLocation()
        }

        if (this.state.clickedBookLocation) {

            return this.renderBookedLocation()
        }

        return (

            <div>
                <h1>Locations Control Panel</h1>
                <p>Right now, you can enter a locations's ID and recieve its description, and reserve available Locations </p>
                <button type="submit" onClick={this.handleStuff}>Show Locations</button>
                <button type="submit" onClick={this.handleMoreStuff}>Post Location</button>
                <button type="submit" onClick={this.handleEvenMoreStuff}>Book Location</button>

                <AppLocNavbar />

            </div>
        )




    }
}


export default AppLocation;
