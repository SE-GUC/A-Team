import React, { Component } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import '../css/TaskCardContainer.css'
import M from "materialize-css";

class TaskAdminCard extends Component {
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
            assume_memberID:'5caccda0b62d5618bc0fff24',
            response_from_admin:[],
            response:'',
        }
    }
    approve=(event)=>{
        event.preventDefault();
        axios('http://localhost:4000/api/tasks/approve'+this.state.id, {
            method: 'PUT',
            headers: {
              'authorization': localStorage.getItem('token')
            }
          })
          .then(res => {
            console.log(res)
            console.log('approved')
           this.setState({status:'Approved'})
           var msg="Task Approved"
            var html="<span style='color:green'>"+msg+"</span>"
            M.toast({html:html })
            return;
            })
          .catch(err => { 
              console.log(err) 
            })    
        
    }
    setResponse=(event)=>{
        event.preventDefault();
        this.setState({response:event.target.value})
        console.log(event.target.value)
    }
    sendFeedback=(event)=>{
        event.preventDefault(); //prevents page from reloading
        const tasking = {
          id: this.state._id,
          response: this.state.response
        };
        if(tasking.response===''){
            var msg="You did not enter any response"
            var html="<span style='color:red'>"+msg+"</span>"
            M.toast({html:html })
            return;
        }
          console.log(tasking.id);
          console.log(tasking.response);
          const url = "http://localhost:4000/api/tasks/update/" + tasking.id;
          axios.put(url, { response_from_admin: tasking.response }).then(res => {
            this.setState({ response: '' });
            this.setState({response_from_admin:res.data.response_from_admin})
            // this.setState({ done:true })
          });
        var msg="Posted Task's Response from Admin Successfully"
        var html="<span style='color:green'>"+msg+"</span>"
            M.toast({html:html })
    }
    getFeedbacks=()=>{
        var message=''
        var array=this.state.response_from_admin
        if(array.length===0){
            var msg="There are No Responses for this Task"
            var html="<span style='color:orange'>"+msg+"</span>"
            M.toast({html:html })
        }    
        else{
            for(var i=0;i<array.length;i++){
                message= message+array[i]+'\n'
                console.log(array[i])
            }
            window.alert(message)
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
                this.setState({
                    response_from_admin: res.data.data.response_from_admin
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
                <div>
                    <table><tr><td><button type='submit' onClick={this.getFeedbacks} class="btn modal-trigger ">View Replies</button></td><td><button type='submit' class="btn green darken-3" onClick={this.approve}>Approve</button></td></tr>
                            <tr><td><textarea  placeholder='Enter FeedBack' value={this.state.response} onChange={this.setResponse}></textarea></td><td><button type='submit' class="btn green darken-3" onClick={this.sendFeedback}>FeedBack</button></td></tr>
                            
                            
                            
                    </table>
                </div>
               
                        
                
                        
                
            </div>
        </div>
</div>
        )
    }
}

export default TaskAdminCard;