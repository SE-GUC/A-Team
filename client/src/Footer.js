import React, { Component } from 'react'

class ComponentName extends Component {
  render () {
    return (
        <footer class="page-footer grey darken-4"  >
    <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Lirten-Hub</h5>
            <p class="grey-text text-lighten-4">Our vision is to give a chance to those who wish to contribute but are not
                given a chance, to empower and teach those who want to better their futures.</p>
          </div>
          <div class="col s4 offset-l2 s6">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="/homepage">Homepage</a></li>
              <li><a class="grey-text text-lighten-3" href="/register">Register</a></li>
              <li><a class="grey-text text-lighten-3" href="/task_card">Tasks</a></li>
              <li><a class="grey-text text-lighten-3" href="/Event">Events</a></li>
              <li><a class="grey-text text-lighten-3" >More About us</a></li>
            </ul>
          </div>
          <div class="col s4 offset-l2 s">
              <h5 class="white-text">Social Media</h5>
                <a href="https://www.facebook.com" class="fa fa-facebook"></a>
                <a href="https://www.twitter.com" class="fa fa-twitter"></a>
                <a href="https://www.google.com" class="fa fa-google"></a>
          <br></br>
                <a href="#" class="fa fa-linkedin"></a>
                <a href="#" class="fa fa-youtube"></a>
                <a href="#" class="fa fa-rss"></a>
              
            </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        © 2019 Copyright Text
        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
</footer>
    )
  }
}

export default ComponentName