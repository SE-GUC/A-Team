import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import M from "materialize-css";


class AssignMember extends Component {


        state = {
            id:'',
            assigned_id:'',
           error:''
        };
      


    handleChange = task => {
        this.setState({ id: task.target.value })
    }


    handleAnotheChange = task => {
        this.setState({ assigned_id: task.target.value })
    }

    // apply=(member_id)=>{
    //     var update=this.state.consultancy_agency_applicants
    //     update.push(consultancy_agency_id)
        
    //     this.setState({consultancy_agency_applicants:update})
    // }
    handleSubmit = project => {
        task.preventDefault(); //prevents page from reloading
        // const t = {
        //     assigned_id: this.state.assigned_id
       
        // };
        const url = 'http://localhost:4000/api/project/tasks/assignMember'+this.state.id
      

        axios.put(url,{assigned_id: this.state.assigned_id })
        .then(res => {
            console.log(res);
            var msg="Assigned Member! "
            var html="<span style='color:#green'>"+msg+"</span>"
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
                    Task id:
                    <input type="text" name="id" onChange={this.handleChange} />
                </label>
            <label>
                Member id:
                <input type="text" name="id" onChange={this.handleAnotheChange} />
            </label>
                <br/>
                <button type="submit" className='waves-effect waves-light btn cyan darken-3'>Assign</button>
            </form>
            </div>
        )
    }
}
ReactDOM.render(
    <AssignMember subreddit="reactjs"/>,
    document.getElementById('root')
)


export default AssignMember; 
