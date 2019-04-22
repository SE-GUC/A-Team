//THIS IS THE TASK'S 1.11 STORY COMPONONENT,MEMBERS CAN VIEW TASKS THEY APPLIED ON



import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class StoryOnePointEleven extends Component {
    

    state = {
        id:'',
        Tasks:[],
        done:false
     };

     handleChange = event => {
        this.setState({ id: event.target.value })
        
    }
    handleAnotherChange = event => {
        this.setState({ response: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault(); 
        const tasking = {
            id: this.state.id,
       
        };
        console.log(tasking.tid)
        
        const url = 'https://ateamse2.herokuapp.com/api/tasks/viewapplied/'+tasking.id
        axios.get(url, {response_from_admin: tasking.response})
        .then(res => {
            this.setState({ Tasks: res.data.data })
            this.setState({ done:true })
            console.log(res.data.data)
            
        })

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
                {this.state.Tasks}
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
                    Member ID:
                    <input type="text" name="id" onChange={this.handleChange} />
                </label>
              
                
                <button type="submit" className="waves-effect waves-light btn cyan darken-3">View tasks i applied on</button>
            </form>
            
            
        ) 
    }

}
ReactDOM.render(
    <StoryOnePointEleven subreddit="reactjs"/>,
    document.getElementById('root')
)

export default StoryOnePointEleven;
