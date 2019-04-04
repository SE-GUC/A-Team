import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import axios from 'axios';


class TaskList extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            tasks:[],
            loading:true,
            error:null
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:4000/api/tasks/read/`)
            .then(res => {
                console.log(res)
                this.setState({tasks: res.data.data});
                this.setState({loading: false})


            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: err
                });
            });

    }
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
    renderTasks() {
        if(this.state.error) {
            return this.renderError();
        }
        return(
        <ul>
            {this.state.tasks.map(task =>
                <li key={task._id}>{task.name}</li>
                )}
        </ul>
        )
    };

    
    render() {
        if(this.state.loading) {
            return this.renderLoading()
        }
        return(
            
            <ul>{this.state.tasks.map(task =>
                 <li key = {task.id}>
                 <b>Task Name: </b> {task.name}
                 
                 </li>)}</ul>
        )



        
















  
    }
}
ReactDOM.render(
    <TaskList subreddit="reactjs"/>,
    document.getElementById('root')
)

export default TaskList;