import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReactDOM from 'react-dom';
import TaskPostForm from '../css/TaskPostForm.css'
import uuid from 'uuid';
import axios from 'axios';

var today = new Date();

class TaskPost extends Component {
    
    
        state = {
            name: '',   
            time_of_post: today.getFullYear()+ '-' + (today.getMonth()+1) + '-' +today.getDate(),
            time_of_review:"",
            monetary_compensation: null,
            price:null,
            is_assigned:"false",
            time_expected:"",
            level_of_comitment:"",
            is_reviewed:"false",
            experience_needed:"",
            description:"",
            skills:[""],
            response_from_admin:""
        };
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }
    handleSubmit = event => {
        event.preventDefault(); //prevents page from reloading
        const tasking = {
            name: this.state.name,
            time_of_post: this.state.time_of_post,
            time_of_review: this.state.time_of_review,
            monetary_compensation: this.state.monetary_compensation,
            price: this.state.price,
            is_assigned: this.state.is_assigned,
            time_expected: this.state.time_expected,
            level_of_comitment:this.state.level_of_comitment,
            is_reviewed:this.state.is_reviewed,
            experience_needed:this.state.experience_needed,
            description:this.state.description,
            skills:this.state.skills,
            response_from_admin:this.state.response_from_admin
        };
        window.alert("Added Task Successfully");
            return axios({
                method:'post',
                url: 'http://localhost:4000/api/tasks/create/',
                headers: {'Content-Type': 'application/json'},
                data: {
                    name: this.state.name,
                    time_of_post: this.state.time_of_post,
                    time_of_review: this.state.time_of_review,
                    monetary_compensation: this.state.monetary_compensation,
                    price: this.state.price,
                    is_assigned: this.state.is_assigned,
                    time_expected: this.state.time_expected,
                    level_of_comitment:this.state.level_of_comitment,
                    is_reviewed:this.state.is_reviewed,
                    experience_needed:this.state.experience_needed,
                    description:this.state.description,
                    skills:this.state.skills,
                    response_from_admin:this.state.response_from_admin
    
                }
    
            });
            
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

    
    render() {
        if(this.state.loading) {
            return this.renderLoading()
        }
        return(
            <form onSubmit={this.handleSubmit}>
                <label for="taskName">
                    Task Name:
                    <input placeholder="Enter task name.." type="text" name="name" onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Task Monetary Compensation:
                    <br/>

                    <input placeholder="Enter Monetary Compensation.." type="number" name="monetary_compensation" onChange={this.handleChange} />
                </label>
                <br/>

                <label>
                    Task Price:
                    <br/>
                    <input placeholder="Enter task price.." type="number" name="price" onChange={this.handleChange} />
                </label>
                <br/>

                <label>
                    Task Time Expected:
                    <input placeholder="YY/MM/DD" type="text" name="time_expected" onChange={this.handleChange} />
                </label>
                <br/>

                <label>
                    Task Level of Commitment:
                    
                    <input  placeholder="1/2/3" type="text" name="level_of_comitment" onChange={this.handleChange} />
                </label>
                <br/>

                <label>
                    Task Experience Needed:
                    <input placeholder="Enter required experience" type="text" name="experience_needed" onChange={this.handleChange} />
                </label>
                <br/>

                <label>
                    Task Description:
                    <input placeholder="Enter task description.." type="text" name="description" onChange={this.handleChange} />
                </label>
                <br/>

                <label>
                    Task Skills:
                    <input placeholder="Enter task skills.." type="text" name="skills" onChange={this.handleChange} />
                </label>
                <br/>

                <button type="submit">Add Task</button>
            </form>
        )



        
















  
    }
}
ReactDOM.render(
    <TaskPost subreddit="reactjs"/>,
    document.getElementById('root')
)

export default TaskPost;