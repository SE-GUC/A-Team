//THIS IS THE TASK'S 2.2 STORY COMPONONENT, BELOW WE CAN BOOK ANY AVAILABLE LOCATION , 

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import M from "materialize-css";


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
            var msg="Booked Location "
            var html="<span style='color:#ffdd42'>"+msg+"</span>"
            M.toast({html:html })

   
    };
    renderLoading() {
        return <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
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


            <div className='container'>            
            <center><h4>Book  a Location</h4></center> 
            <form onSubmit={this.handleSubmit}>
            <div className='row'>
            <div className='input-field col s6'>
            <i class="material-icons prefix">perm_identity</i>
            <input type="text" name="id" onChange={this.handleChange} placeholder='Location ID'/>
            </div>
            <div className='input-field col s6'>
            <i class="material-icons prefix">edit_location</i>
            <input type="text" name="booked" onChange={this.handleAnotherChange} placeholder='Location Booking' />
            </div>
        
        

            
            
            
            </div>
                
                
                
                <button type="submit" className='waves-effect waves-light btn green darken-3'>Book Location</button>
            </form>
            
            </div>
            
            
            
        )



        
















  
    }
}
ReactDOM.render(
    <LocationStoryTwoTwo subreddit="reactjs"/>,
    document.getElementById('root')
)

export default LocationStoryTwoTwo;
