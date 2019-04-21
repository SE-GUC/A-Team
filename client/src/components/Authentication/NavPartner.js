import React, { Component } from "react";
import '../../css/homepage.css'
import '../../css/navbar.css'
import M from 'materialize-css'
export class NavPartner extends Component {
  componentDidMount(){
    let elems = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
  }
  render() {
    console.log('geh hena?')
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
    </ul>
  </div>
</nav>

      </div>
    );
  }
}

export default NavPartner;
