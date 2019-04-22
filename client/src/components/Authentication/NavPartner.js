import React, { Component } from "react";
import '../../css/homepage.css'
import '../../css/navbar.css'
import M from 'materialize-css'
import Axios from "axios";
export class NavPartner extends Component {
  state={
    id:'',
    name:'',
    username:'',
    type:[],
    email:'',
    date_of_birth:'',
    phone:'',
    events_attended:'',
    interests:[],
    info:'',
    reports:[],
    years_of_experience:'',
    skills:[],
    field_of_work:[],
    notifications:[],
    board_members:[],
    past_projects:[],
    events_created:[]

  }
  displayArray=(array)=>{
    var result=''
    for(var i=0;i<array.length;i++){
      result =result+array[i]+", "
    }
    return result
  }

  getBoard=(jsonaya)=>{
    var result=''
    for(var i=0;i<jsonaya.length;i++){
      result=result+ "("+jsonaya[i].name+','+jsonaya[i].email+','+jsonaya[i].job_title+'), '
    }
    return result
  }
  signOut(){
    localStorage.setItem('token', null)
  }



  componentDidMount(){
    let elems = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
      var elems1 = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems1, {inDuration: 300, outDuration: 225});
  }
  async handleUser(){
    var id1=''
    var url='https://ateamse2.herokuapp.com/api/users/dashboard'
   await Axios({
      method: 'get',
        url: url,
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
    .then(res=>{
      this.setState({id:res.data.data.id})
      id1=res.data.data.id
    })
    .catch(err=>{
      console.log(err)
    })
   // url='https://ateamse2.herokuapp.com/api/users/'
   await Axios.get('https://ateamse2.herokuapp.com/api/users/'+id1)
   .then(res=>{
      this.setState({name:res.data.data.name})
      this.setState({type:res.data.data.type})
      this.setState({email:res.data.data.email})
      this.setState({date_of_birth:res.data.data.date_of_birth})
      this.setState({phone:res.data.data.phone})
      //this.setState({events_attended:res.data.data.events_attended})
      this.setState({interests:res.data.data.interests})
      this.setState({info:res.data.data.info})
      this.setState({reports:res.data.data.reports})
      this.setState({years_of_experience:res.data.data.years_of_experience})
      this.setState({skills:res.data.data.skills})
      //this.setState({field_of_work:res.data.data.field_of_work})
      this.setState({notifications:res.data.data.notifications})
      this.setState({username:res.data.data.username})
      this.setState({board_members:res.data.data.board_members})
      this.setState({past_projects:res.data.data.past_projects})
      this.setState({events_created:res.data.data.events_created})
   })
   .catch(err=>{

   })

   var result=''
     for(var i=0;i<this.state.events_created.length;i++){
      await Axios.get('https://ateamse2.herokuapp.com/api/events/getid/'+this.state.events_created[i])
       .then(res=>{
         result=result+res.data.data.name+", "
         console.log(res)
       })
     }
    this.setState({events_created:result})
    var result1=''
    for(var i=0;i<this.state.past_projects.length;i++){
      await Axios.get('https://ateamse2.herokuapp.com/api/project/get_my_projects/'+this.state.past_projects[i])
      .then(response=>{
        result1=result1+response.data.data.project_name+', '
      })
    }
    this.setState({past_projects:result1})
    
  }
  render() {
    return (
      <div>
        <head>
  <meta charset="utf-8" />
  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="theme-color" content="#000000" />

  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <title>React App</title>
</head>
<ul id="dropdown11" class="dropdown-content">
  <li><a href='/partner/submit_task'>Post a Task</a></li>
  {/* <li><a href='/recommend'>Recommend Tasks</a></li> //member */}
  <li><a href='/partner/get_tasks'>Get Tasks</a></li> 
  <li><a href='/partner/ViewTaskApplicants'>View applicants</a></li> 
  <li><a href='/partner/task_card'>Task Cards</a></li> 
  {/* <li><a class='ili' href='/StoryOnePointEleven'>Tasks i applied on</a></li> //member */}
</ul>
<ul id="dropdown111" class="dropdown-content">
<li><a href='/partner/Create_Events'>Create Events</a></li>
<li><a href='/partner/myevents'>Applicants on my events</a></li>
  <li><a href="/partner/feedback">Write Feedback </a></li>
  <li><a href='/partner/filter'>Show Events</a></li>

  <li><a href="/partner/appcard">Apply for Event </a></li>
  <li><a href='/partner/partnerfeedbacks'>Feedbacks on my Events</a></li>
</ul>
<ul id="dropdown11111" class="dropdown-content">
  <li><a class='ili' href='/partner/viewallproj'>All Projects</a></li>
  <li><a class='ili' href='/partner/post_project'>Post a Project</a></li>
</ul>
<nav class="blue-text text-darken-2">
  <div class="nav-wrapper grey darken-4">
      
     

    <ul class="left hide-on-med-and-down">
        <li><a href="/" ><i class="material-icons">home</i></a></li>
      <li> <a href="https://github.com/SE-GUC/A-Team" title="Git-Hub"><i class="material-icons">storage</i></a> </li>
      <li><a class="dropdown-trigger" href="#" data-target="dropdown11111">Projects<i
            class="material-icons right">arrow_drop_down</i></a></li>
      <li><a class="dropdown-trigger" href="#" data-target="dropdown111">Events<i
            class="material-icons right">arrow_drop_down</i></a></li>
      <li><a class="dropdown-trigger" href="#" data-target="dropdown11">Tasks<i
            class="material-icons right">arrow_drop_down</i></a></li>
            <li> 
</li>

     


    </ul>

    <ul class="right hide-on-med-and-down">
        <li> <a class="waves-effect waves-light btn modal-trigger grey darken-4" onClick={()=>this.handleUser()}href="#modal1">
            <i class="material-icons">account_circle</i>
            </a></li>
            <li><a onClick={this.signOut} href='/homepage'>Sign out</a></li>
            </ul>
  </div>
 
  <div id="modal1" class="modal">
  <div class="modal-content">
    <h6>Welcome, {this.state.name}</h6>
      <p>this is your partner profile</p>
      <pre>
      <p><b>Email:</b>{this.state.email}  </p>
      <p><b>Username:</b>{this.state.username}  </p>
      <p><b>Phone:</b>{this.state.phone}  </p>
      <p><b>Date Of Birth:</b>{this.state.date_of_birth}  </p>
      <p><b>Interests:</b>{ this.displayArray(this.state.interests)}</p>
      <p><b>Board members:</b>{this.getBoard(this.state.board_members)}</p>
      <p><b>Past Projects:</b>{this.state.past_projects}</p>
      <p><b>Events Created:</b>{this.state.events_created}</p>
      </pre>

  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat text-color red">Close</a>
  </div>
  </div>
</nav>

      </div>
    );
  }
}

export default NavPartner;
