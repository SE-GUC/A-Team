//REACT FOR STORY 1.7
//I CAN SEE ALL APPLICANTS ON ALL TASKS SO THAT I CAN DECIDE WHO WILL BE ASSIGNED TO THE TASK


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import onepsevenTable from './onepsevenTable'

class ViewTaskApplicants extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
          tasks: [],
          loading: true,
          error: null
        }
      }
    
      componentDidMount () {
        axios.get(`http://localhost:4000/api/tasks/read/applicants/`)
                .then(res => {
                  console.log(res)
                  this.setState({tasks: res.data.data})
                  this.setState({loading: false})
                })
                .catch(err => {
                  this.setState({
                    loading: false,
                    error: err
                  })
                })
      }
    
      renderLoading () {
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
      renderError () {
        return (
          <div>
                    Ooops, : {this.state.error.message}
          </div>
        )
      }

      renderTasks () {
        if (this.state.error) {
          return this.renderError()
        }
        return (
          <ul>
            {this.state.tasks.map(task =>
              <li key={task._id}>{task.name}></li>
                    )}
          </ul>
        )
      };
        
    render() {
        if(this.state.loading) {
            return this.renderLoading()
        }
        
        return(

            <div className='m'>

            <p className='Table-header' align='center'>Tasks</p>
            < onepsevenTable data={this.state.tasks} /> {
                }
    
          </div>          
        ) 
    }

}
ReactDOM.render(
    <ViewTaskApplicants subreddit="reactjs"/>,
    document.getElementById('root')
)

export default ViewTaskApplicants;
