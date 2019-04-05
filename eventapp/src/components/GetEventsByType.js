//THIS IS THE TASK'S 1.3 STORY COMPONONENT, BELOW WE CAN UPDATE ANY TASKS'S "RESPONSE FROM ADMIN", 
//AND VIEW TASKS' DESCRIPTIONS
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class GetEventsByType extends Component {
    
    
        state = {
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
                this.setState({type: res.data.data})
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
                    Task ID:
                    <input type="text" name="type" onChange={this.handleChange} />
                </label>
                <button type="submit">Search Events by type</button>
                <ul>
            <li>
                {this.state.type}
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
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Task ID:
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