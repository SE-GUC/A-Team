//THIS IS THE TASK'S 1.3 STORY COMPONONENT, BELOW WE CAN UPDATE ANY TASKS'S "RESPONSE FROM ADMIN",
//AND VIEW TASKS' DESCRIPTIONS
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class ApplyForEvent extends Component {


        state = {
           id:'',
           applicantid:'',
           error:''
        };


    handleChange = event => {
        this.setState({ id: event.target.value })
    }


    handleChange1 = event => {
        this.setState({ applicantid: event.target.value })
    }


    handleSubmit = event => {
        event.preventDefault(); //prevents page from reloading
        const application = {
            id: this.state.id
        };
        const url = 'http://localhost:4000/api/events/'+application.id+'/apply/'
        const newApplication1={
            applicant_id: this.state.applicantid,
        }
        axios.post(url, newApplication1)
        this.setState({done:true})
    };
    renderLoading() {
        return <div>Fetching data from database.</div>
    }
    renderError() {
        return (
            <div>
                ERROR, : {this.state.error.message}
            </div>
        )
    }
    renderDone() {
        return(
             <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Task ID:
                    <input type="text" placeholder="write eventId" name="id" onChange={this.handleChange} />
                    <input type="text" placeholder="write applicantID" name="id" onChange={this.handleChange1} />
                </label>
                <button type="submit" className="waves-effect waves-light btn green darken-2">Apply</button>
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
                    Event id:
                    <input type="text" name="id" onChange={this.handleChange} />
                </label>
            <label>
                Applicant id:
                <input type="text" name="id" onChange={this.handleChange1} />
            </label>
                <br/>
                <button type="submit" className='waves-effect waves-light btn green darken-2'>Apply</button>
            </form>
            </div>
        )
    }
}
ReactDOM.render(
    <ApplyForEvent subreddit="reactjs"/>,
    document.getElementById('root')
)

export default ApplyForEvent;
