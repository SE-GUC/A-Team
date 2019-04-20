import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import M from "materialize-css";

class LocationPost extends Component {
  state = {
    title: "",
    subtitle:"",
    location: "",
    capacity: null,
    booked: ""
   
  };
  handleChangeOne = e => {
  
    this.setState({
      title: e.target.value
    });
    console.log(this.state.title)

  };
  handleChangeTwo = e => {
    this.setState({
      subtitle: e.target.value
    });
  };
  handleChangeThree = e => {
    this.setState({
      location: e.target.value
    });
  };
  handleChangeFour = e => {
    this.setState({
      capacity: e.target.value
    });
  };
  handleChangeFive = e => {
    this.setState({
      booked: e.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault(); //prevents page from reloading

    const m = axios({
      method: "post",
      url: "http://localhost:4000/api/locations/",
      headers: { "Content-Type": "application/json" },
      data: {
        title: this.state.title,
        subtitle: this.state.subtitle,
        location: this.state.location,
        capacity: this.state.capacity,
        booked: this.state.booked
      }
    }).then(
      res=>{
        var msg="Posted Location "
        var html="<span style='color:#ffdd42'>"+msg+"</span>"
        M.toast({html:html })
      }
    
    );
    console.log(m.data);
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
    return <div>Ooops, : {this.state.error.message}</div>;
  }

  render() {
    
    return (
      <div className='container'>
      <center><h4>Post  a Location</h4></center>
        <form onSubmit={this.handleSubmit}>
        <div className='row'>

        <div className='input-field col s6'>
        <i class="material-icons prefix">location_city</i>
        <input type="text" name="title" onChange={this.handleChangeOne} placeholder='Location Title'/>
        </div>
         <div className='input-field col s6'>
         <i class="material-icons prefix">location_city</i>
         <input type="text" name="subtitle" onChange={this.handleChangeTwo} placeholder='Location SUBTitle' />
        </div>
        
        
        </div>
        <div className='row'>

        <div className='input-field col s6'>
        <i class="material-icons prefix">location_on</i>
        <input type="text" name="location" onChange={this.handleChangeThree} placeholder='Location '/>
        </div>
         <div className='input-field col s6'>
         <i class="material-icons prefix">format_list_numbered</i>
         <input type="number" name="capacity" onChange={this.handleChangeFour} placeholder='Location Capacity' />
        </div>
        
        
        </div>
      
        <div className='row'>

        <div className='input-field col s6'>
        <i class="material-icons prefix">edit_location</i>
        <input type="text" name="booked" onChange={this.handleChangeFive} placeholder='Location Booking'/>
        </div>
        <button type="submit" className="waves-effect waves-light btn green darken-3" onClick={this.handleSubmit}>Add Location</button>
        </div>
        

        

        
      </form>
      </div>
    );
  }
}
ReactDOM.render(
  <LocationPost subreddit="reactjs" />,
  document.getElementById("root")
);

export default LocationPost;
