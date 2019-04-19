
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import M from "materialize-css";

class CancelApp extends Component {


        state = {
           project_id:'',
           consultancy_agency_id:'',
           consultancy_agency_applicants:[],
           error:''
        };
      


    handleChange = project => {
        this.setState({ project_id: project.target.value })
    }


    handleAnotheChange = project => {
        this.setState({ consultancy_agency_id: project.target.value })
    }

    apply=(consultancy_agency_id)=>{
        var update=this.state.consultancy_agency_applicants
        update.push(consultancy_agency_id)
        
        this.setState({consultancy_agency_applicants:update})
    }
    handleSubmit = project => {
        project.preventDefault(); //prevents page from reloading
    
        const url = 'http://localhost:4000/api/project/cancelApp/'+this.state.project_id
      

        axios.put(url,{consultancy_agency_id: this.state.consultancy_agency_id })
        .then(res => {
            console.log(res);
            var msg="Posted FML "
            var html="<span style='color:#ffdd42'>"+msg+"</span>"
            M.toast({html:html })
            return res.data
          })
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
            <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                    Project id:
                    <input type="text" name="id" onChange={this.handleChange} />
                </label>
            <label>
                Consultancy Agency id:
                <input type="text" name="id" onChange={this.handleAnotheChange} />
            </label>
                <br/>
                <button type="submit">Cancel</button>
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
