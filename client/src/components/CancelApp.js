
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class CancelApp extends Component {


        state = {
           id:'',
           applicantid:'',
           error:''
        };


    handleChange = project => {
        this.setState({ id: project.target.value })
    }


    handleChange1 = project => {
        this.setState({ applicantid: project.target.value })
    }


    handleSubmit = project => {
        project.preventDefault(); //prevents page from reloading
        const application = {
            id: this.state.id
        };
        const url = 'http://localhost:4000/api/project/cancelApp/'+application.id
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
                    <input type="text" placeholder="write projectID" name="id" onChange={this.handleChange} />
                    <input type="text" placeholder="write applicantID" name="id" onChange={this.handleChange1} />
                </label>
                <button type="submit">Apply</button>
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
                    Project id:
                    <input type="text" name="id" onChange={this.handleChange} />
                </label>
            <label>
                Applicant id:
                <input type="text" name="id" onChange={this.handleChange1} />
            </label>
                <br/>
                <button type="submit">Apply</button>
            </form>
            </div>
        )
    }
}
ReactDOM.render(
    <CancelApp subreddit="reactjs"/>,
    document.getElementById('root')
)

export default CancelApp;
