import React, { Component } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import '../css/TaskCardContainer.css'
import M from "materialize-css";

class TaskCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            name: '',
            description: '',
            monetary_compensation: '',
            status: '',
            skills: [],
            _id: '',
            time_of_post: '',
            time_expected: '',
            level_of_commitment: '',
            experience_needed: '',
            assume_memberID:'5caccda0b62d5618bc0fff24'
        }
    }
    componentDidMount() {
        this.setState({
            id: this.props.value
        })
        console.log(this.props.value)
        const url = 'http://localhost:4000/api/tasks/read/' + this.props.value
        console.log(url)
        axios.get(url)
            .then(res => {
                this.setState({
                    name: res.data.data.name
                })
                this.setState({
                    _id: res.data.data._id
                })
                this.setState({
                    description: res.data.data.description
                })
                this.setState({
                    monetary_compensation: res.data.data.monetary_compensation
                })
                this.setState({
                    status: res.data.data.status
                })
                this.setState({
                    skills: res.data.data.skills + ', ' + ' '
                })
                this.setState({
                    time_of_post: res.data.data.time_of_post
                })
                this.setState({
                    time_expected: res.data.data.time_expected
                })
                this.setState({
                    level_of_commitment: res.data.data.level_of_comitment
                })
                this.setState({
                    experience_needed: res.data.data.experience_needed
                })
            })
            .catch(err => {
                console.log(err)
            })

    }
    applyTask=(e)=>{
        const task_id=this.state._id
        const member_id=this.state.assume_memberID
        const getURL='http://localhost:4000/api/tasks/apply/'+task_id+'/'+member_id
        axios.get(getURL)
        .then(result=>{
        var message=result.data.msg
        message=message.substring(0,message.length-33)
        var html="<span style='color:#ffdd42'>"+message+"</span>"
        M.toast({html:html })
        })
        

    }

    render() {
        return (
            <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <div class="container" width="120"> */}
    <div class="" id="manga">
            <div class="card blue-grey darken-1" id="cardHopefully">
                <div class="card-content white-text" id="cardContent">
                    <div class="card__meta">
                        <h5>{this.state.name}</h5>
                        <p>---------------------------------------------------------</p>
                        
                        <time>{}</time>
                    </div>
                        <p><b>Description:</b> {this.state.description}</p>
                        <p><b>Monetary Compensation:</b> {this.state.monetary_compensation}£</p>
                        <p><b>Status:</b> {this.state.status}</p>
                        <p><b>Skills:</b> {this.state.skills}</p>
                        <p><b>Time Posted:</b> {this.state.time_of_post}</p>
                        <p><b>Expected Time:</b> {this.state.time_expected}</p>
                        <p><b>Commitment Level Required:</b> {this.state.level_of_commitment}</p>
                        <p><b>Experience Needed:</b> {this.state.experience_needed}</p>
                           


                </div>
                <div class="card-action" id="cardAction">
                <div style={{paddingTop:'10px'}}>
                        <button class="waves-effect waves-light btn-small yellow accent-2" type="submit" id="reqBut" name="action" onClick={this.applyTask}>Do I have the Required Skills?
                        </button>
                        <button class="waves-effect waves-light btn-small green darken-2" type="submit" name="action" onClick={this.applyTask}>Apply
                        </button>
                        </div> 
                </div>
            </div>
        </div>
</div>
        )
    }
}

export default TaskCard;