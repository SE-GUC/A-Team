import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Route, BrowserRouter as Router,Redirect  } from 'react-router-dom'
import Footer from './Footer'
import Body from './Body'
import Home from './components/HomePage'

class App extends Component {
  componentDidMount(){
    return(<Redirect to='/homepage'></Redirect> )
  }  

  render() {
  return(
    <div>
      <Router>
     
      <Body></Body>
      <Footer></Footer>
    </Router>
    </div>
  )

    

  }
}

export default App;
