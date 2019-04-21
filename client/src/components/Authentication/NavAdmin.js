import React, { Component } from "react";
import '../../css/homepage.css'
import '../../css/navbar.css'
import M from 'materialize-css'
export class NavAdmin extends Component {
  componentDidMount(){
    let elems = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
  }
  render() {
    console.log('geh hena?')
    return ( 
        <div>
             <ul id="dropdown11" class="dropdown-content">
                        <li><a href='/admin/submit_task'>Post a Task</a></li>
                        <li><a href='/admin/get_tasks'>Get Tasks</a></li>
                        <li><a href='/admin/Review'>Review task</a></li>
                        <li><a href='/admin/viewrtaskapplicants'>View applicants</a></li>
                        <li><a href='/admin/TaskPanel'>Task Panel</a></li>
                            {/* <li><a href='/admin/task_card'>Task Cards</a></li> */}
                        <li><a class='ili' href='/admin/StoryOnePointEleven'>Tasks i applied on</a></li>
                        </ul>
                        <ul id="dropdown111" class="dropdown-content">
                        <li><a href='/admin/locations'>locations</a></li>
                        <li><a href='/admin/Create_Events'>Create Events</a></li>
                        <li><a href="/admin/feedback">Write Feedback </a></li>
                        <li><a href="/admin/appcard">Apply for Event </a></li>
                        <li><a href='/admin/partnerfeedbacks'>Feedbacks on my Events</a></li>
                        </ul>
                        <ul id="dropdown1111" class="dropdown-content">
                        <li><a class='ili' href='/admin/skills'>Skill Panel</a></li>
                        <li><a class='ili' href='/admin/viewpendingevents'>View Pending Events</a></li>
                        <li><a class='ili' href='/admin/Admin'>Admin Panel</a></li>
                        <li><a class='ili' href='/admin/Review'>Review</a></li>
                        </ul>
                        <ul id="dropdown11111" class="dropdown-content">
                        <li><a class='ili' href='/admin/viewallproj'>All Projects</a></li>
                        <li><a class='ili' href='/admin/post_project'>Post a Project</a></li>
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
export default NavAdmin;