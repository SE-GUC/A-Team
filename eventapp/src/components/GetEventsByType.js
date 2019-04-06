//THIS IS THE TASK'S 1.3 STORY COMPONONENT, BELOW WE CAN UPDATE ANY TASKS'S "RESPONSE FROM ADMIN", 
//AND VIEW TASKS' DESCRIPTIONS
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Table from './Table'


class GetEventsByType extends Component {
    
    
        state = {
            events:[],
           type:'',
           done:false,
           error:''
        };
    
 
    handleChange = event => { 
        this.setState({ type: event.target.value })
    }
    
    handleSubmit = event => {
        event.preventDefault(); //prevents page from reloading
        const types = {
            type:this.state.type
        };
        const url = 'http://localhost:4000/api/events/'+types.type
        axios.get(url)
            .then(res => {
                this.setState({events: res.data.data})
                this.setState({done: true})
                console.log(res.data.data)

            })

   
    };
    renderLoading() {
        return <div>Fetching data from database...</div>
    }
    renderError() {
        return (
            <div>
                Ew3a, : {this.state.error.message}
            </div>
        )
    }
    renderDone() {
        return(
             <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Type:
                    <input type="text" name="type" onChange={this.handleChange} />
                </label>
                <button type="submit">Search Events by type</button>
                <ul>
            <li>
            <Table data={this.state.events}/>             
            </li>
        </ul>
        </form>
            </div>
        
        )
    }
    
    render() {
        if(this.state.loading) {
            return this.renderLoading()
        }
        if(this.state.done) {
            return this.renderDone()
        }
        else
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Type
                    <input type="text" name="type" onChange={this.handleChange} />
                </label>
                
                <br/>
                <button type="submit">Search Events by type</button>
            </form>
            </div>
            
            
        )
    }
}
ReactDOM.render(
    <GetEventsByType subreddit="reactjs"/>,
    document.getElementById('root')
)

export default GetEventsByType;