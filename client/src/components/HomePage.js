import React, { Component } from "react";
import '../css/homepage.css'
import '../css/navbar.css'
import M from 'materialize-css'
import NavGeneral from './NavGeneral'
export class HomePage extends Component {
  componentDidMount(){
    let elems = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
  }
  render() {

    return (
      <div>
        <NavGeneral/>
      </div>
    );
  }
}

export default HomePage;
