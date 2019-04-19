//THIS IS THE TASK'S 1.2 STORY COMPONONENT, BELOW WE CAN UPDATE ANY TASKS'S IS_REVIEWED TO TRUE, 

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class TaskStoryOnepointTwo extends Component {
    

    state = {
        id:'',
        done:false
     };

     handleChange = event => {
        this.setState({ tid: event.target.value })
        this.setState({ pid: event.target.value })
    }
    handleAnotherChange = event => {
        this.setState({ response: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault(); //prevents page from reloading
        const tasking = {
            tid: this.state.tid,
            pid: this.state.pid
       
        };
        console.log(tasking.tid)
        console.log(tasking.pid)
        const url = 'http://localhost:4000/api/tasks/accept/'+tasking.tid+'/'+tasking.pid
        axios.put(url, {response_from_admin: tasking.response})
        .then(res => {
            this.setState({ response: res.data.data })
            //this.setState({ done:true })
            console.log(res.data.data)
            
            alert('done');
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
                
                {this.state.response}
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
                    Task ID:
                    <input type="text" name="tid" onChange={this.handleChange} />
                </label>
                <label>
                    Partner ID:
                    <input type="text" name="pid" onChange={this.handleChange} />
                </label>
            
                
                <button type="submit" className="waves-effect waves-light btn green darken-2">Review task</button>
            </form>
            
            
        ) 
    }

}
ReactDOM.render(
    <TaskStoryOnepointTwo subreddit="reactjs"/>,
    document.getElementById('root')
)

export default TaskStoryOnepointTwo;
