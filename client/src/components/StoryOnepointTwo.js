//THIS IS THE TASK'S 1.2 STORY COMPONONENT, BELOW WE CAN UPDATE ANY TASKS'S IS_REVIEWED TO TRUE, 

import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import axios from 'axios';


class TaskStoryOnepointTwo extends Component {
    

    state = {
        id:'',
        done:false
     };

     handleChange = event => {
        this.setState({ id: event.target.value })
    }
    handleAnotherChange = event => {
        this.setState({ response: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault(); //prevents page from reloading
        const tasking = {
            id: this.state.id,
       
        };
        console.log(tasking.id)
        const url = 'http://localhost:4000/api/tasks/review/'+tasking.id
        axios.put(url, {response_from_admin: tasking.response})
        .then(res => {
            this.setState({ response: res.data.data })
            //this.setState({ done:true })
            console.log(res.data.data)
            alert("reviewed!");
        })

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
                    <input type="text" name="id" onChange={this.handleChange} />
                </label>
            
                
                <button type="submit">Review task</button>
            </form>
            
            
        ) 
    }

}
ReactDOM.render(
    <TaskStoryOnepointTwo subreddit="reactjs"/>,
    document.getElementById('root')
)

export default TaskStoryOnepointTwo;
