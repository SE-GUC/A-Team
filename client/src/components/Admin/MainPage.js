import React, {Component} from 'react';
import axios from 'axios'
import Projects from './ViewAllProjectsComponent';
import Events from './ViewAllEventsContainer';


class MainPage extends Component {
    state={
        isOpen: false,
        isOpen2:false
    }
    
    toggle=() =>
    {
        this.setState({
            isOpen:true,
            isOpen2:false
        })
    }
    toggle2=() =>
    {
        this.setState({
            isOpen:false,
            isOpen2:true
        })
    }
    
      render() {
        if (this.state.isOpen) {
          return (
              <div>
                  
                  <Events/>
              </div>
          )
      }
      if(this.state.isOpen2) {
          return(
          <div >
              <Projects/>
          </div>            
          )
      } 
      else
        return (
          <div className="MainPage">
          	<div class="card-action">
                <p>
                       
                </p>
                <a onClick={()=>this.toggle()} href="viewpendingevents" class="waves-effect waves-light btn">Events</a>
				</div>
                <div class="card-action">
                <p>
                       
                </p>
                <a onClick={()=>this.toggle2()} href="viewallproj"  class="waves-effect waves-light btn">Projects</a>
				</div>
          </div>
        );
      }
    }



export default MainPage;