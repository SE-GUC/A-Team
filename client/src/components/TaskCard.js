import React, { Component } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import '../css/TaskCardContainer.css'
import M from "materialize-css";
import Banner from '../media/banner.jpg'
import Profile from '../media/profilepic.png'
import SkillChips from '../components/Admin/SkillChips'
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
            assume_memberID:'5caccda0b62d5618bc0fff24',
            partner_id:'',
            owner:{
                 name:'',
                 email:'',
                 phone:'',
                 username:'',
                 field_of_work:[],
                 interests:[]
            }
        }
    }
  async  componentDidMount() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, true);
        this.setState({
            id: this.props.value
        })
        var uuid=''
        console.log(this.props.value)
        const url = 'https://ateamse2.herokuapp.com/api/tasks/read/' + this.props.value
        console.log(url)
       await axios.get(url)
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
                    partner_id: res.data.data.partner_id
                })
                uuid=res.data.data.partner_id

            })
            .catch(err => {
                console.log(err)
            })
            const partnerURL='https://ateamse2.herokuapp.com/api/users/'+ uuid  
           await axios.get(partnerURL)
            .then(res=>{
                console.log('URL',partnerURL)
                console.log("Response",res)
                console.log('PID IN THEN',this.state.partner_id)
                this.setState({
                    owner:{
                    name:res.data.data.name,
                    email:res.data.data.email,
                    phone:res.data.data.phone,
                    username:res.data.data.username,
                    interests:res.data.data.interests,
                    field_of_work:res.data.data.field_of_work
                }})
                console.log(this.state.owner)
            })  
            .catch(err=>{
                     console.log(err)
            })
            

    }
    applyTask=(e)=>{
        const task_id=this.state._id
        const member_id=this.state.assume_memberID
        const getURL='https://ateamse2.herokuapp.com/api/tasks/apply/'+task_id+'/'+member_id
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
    <ul id="slide-out-partner-event" class="sidenav">
    <li><div class="user-view">
         <div class="background">
        <img src={Banner}/>
      </div>
      <a href="#user"><img class="circle" src={Profile}/></a>
      <a><span class="white-text name">{this.state.owner.name}</span></a>
      <a><span class="white-text email">{this.state.owner.email}</span></a>
    </div>
    </li>
    <li><a><i class="material-icons">phone</i>{this.state.owner.phone}</a></li>
    
    <li><div class="divider"></div></li>
    <li><a class="subheader"><i class="material-icons">person_outline</i>Interests:</a></li>
    <li><a><SkillChips skills={this.state.owner.interests}/></a></li>
  </ul>
    {/* <div class="container" width="120"> */}
    <div class="" id="manga">
            <div class="card blue-grey darken-1" id="cardHopefully">
                <div class="card-content white-text" id="cardContent">
                    <div class="card__meta">
                        <h5>{this.state.name}</h5>
                        <p>---------------------------------------------------------</p>
                        
                        <time>{}</time>
                    </div>
                        <p><b>Posted By:</b> <a data-target="slide-out-partner-event" class="sidenav-trigger"><i style={{padding:'2px',marginTop:'5px',color:'black'}} class="material-icons tiny">account_circle</i>{this.state.owner.name}</a></p>
                        <p><b>Description:</b> {this.state.description}</p>
                        <p><b>Monetary Compensation:</b> {this.state.monetary_compensation}£</p>
                        <p><b>Status:</b> {this.state.status}</p>
                        <p><b>Skills:</b> {this.state.skills}</p>
                        <p><b>Time Posted:</b> {this.state.time_of_post}</p>
                        <p><b>Expected Time:</b> {this.state.time_expected}</p>
                        <p><b>Commitment Level Required:</b> {this.state.level_of_commitment}</p>
                        <p><b>Experience Needed:</b> {this.state.experience_needed}</p>
                           


                </div>
                <div class="card-action" id="">
                <div style={{alignContent:'center',alignSelf:'center'}}>
                        <center>
                            <button class="waves-effect waves-light btn-small green accent-4" type="submit" id="reqBut" name="action" onClick={this.applyTask}>Do I have the Required Skills?
                        </button>
                        
                        <button class="waves-effect waves-light btn-small green darken-2" type="submit" name="action" onClick={this.applyTask}>Apply
                        </button>
                        </center>
                        </div> 
                </div>
            </div>
        </div>
</div>
        )
    }
}

export default TaskCard;