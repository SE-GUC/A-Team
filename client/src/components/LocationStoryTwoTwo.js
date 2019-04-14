//THIS IS THE TASK'S 2.2 STORY COMPONONENT, BELOW WE CAN BOOK ANY AVAILABLE LOCATION , 

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



class LocationStoryTwoTwo extends Component {
    
    
        state = {
           id:'',
           booked:'',
           done:false
        };
    
    handleChange = event => {
        this.setState({ id: event.target.value })
    }
    handleAnotherChange = event => {
        this.setState({ booked: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault(); //prevents page from reloading
        const locationing = {
            id: this.state.id,
            booked: this.state.booked
        };
        console.log(locationing.id)
        console.log(locationing.booked)
        const url = 'https://ateamse2.herokuapp.com/api/locations/'+locationing.id
        axios.put(url, {booked: locationing.booked})
            .then(res => {
                this.setState({ booked: res.data })
                // this.setState({ done:true })

            })
            window.alert("Booked Location ");

   
    };
    renderLoading() {
        return <div>Loading...</div>
    }
    renderError() {
        return (
            <div>
                Ooops, : {this.state.error.message}
            </div>
        )
    }
    renderDone() {
        return(
        <ul>
            <li>
                <label>Done</label>
                {this.state.booked}
            </li>
        </ul>
        )
    }

    
    render() {
        if(this.state.loading) {
            return this.renderLoading()
        }
        if(this.state.done) {
            return this.renderDone()
        }
        return(

            <form onSubmit={this.handleSubmit}>
                <label>
                    Location ID:
                    <input type="text" name="id" onChange={this.handleChange} />
                </label>
                <label>
                    Location booking Update:
                    <input type="text" name="booked" onChange={this.handleAnotherChange} />
                </label>
                
                
                <button type="submit">Book Location</button>
            </form>
            
            
        )



        
















  
    }
}
ReactDOM.render(
    <LocationStoryTwoTwo subreddit="reactjs"/>,
    document.getElementById('root')
)

export default LocationStoryTwoTwo;
