import React, { Component } from "react";
import '../css/homepage.css'
import '../css/navbar.css'
import M from 'materialize-css'
export class NavPartner extends Component {
  componentDidMount(){
    let elems = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
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
  <li><a href='/submit_task'>Post a Task</a></li>
  <li><a href='/recommend'>Recommend Tasks</a></li>
  <li><a href='/task_control_panel'>Task Control Panel</a></li>
  <li><a href='/get_tasks'>Get Tasks</a></li>
  <li><a href='/Review'>Review task</a></li>
  <li><a href='/ViewTaskApplicants'>View applicants</a></li>
  <li><a href='/task_card'>Task Cards</a></li>
  <li><a class='ili' href='/StoryOnePointEleven'>Tasks i applied on</a></li>
</ul>
<ul id="dropdown111" class="dropdown-content">
  <li><a href='/Create_Events'>Create Events</a></li>
  <li><a href="/feedback">Write Feedback </a></li>
  <li><a href="/appcard">Apply for Event </a></li>
  <li><a href='/partnerfeedbacks'>Feedbacks on my Events</a></li>
</ul>
<ul id="dropdown1111" class="dropdown-content">
  <li><a class='ili' href='/skills'>Skill Panel</a></li>
  <li><a class='ili' href='/register'>Register</a></li>
  <li><a class='ili' href='/Admin'>Admin Panel</a></li>
  <li><a class='ili' href='/Review'>Review</a></li>
</ul>
<ul id="dropdown11111" class="dropdown-content">
  <li><a class='ili' href='/viewallproj'>All Projects</a></li>
  <li><a class='ili' href='/post_project'>Post a Project</a></li>
</ul>
<nav class="blue-text text-darken-2">
  <div class="nav-wrapper grey darken-4">
      
     

    <ul class="left hide-on-med-and-down">
        <li><a href="/" ><i class="material-icons">home</i></a></li>
      <li> <a href="https://github.com/SE-GUC/A-Team" title="Git-Hub"><i class="material-icons">storage</i></a> </li>
      <li><a class="dropdown-trigger" href="#" data-target="dropdown11111">Projects<i
            class="material-icons right">arrow_drop_down</i></a></li>
      <li><a class="dropdown-trigger" href="#" data-target="dropdown1111">Admin<i
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
