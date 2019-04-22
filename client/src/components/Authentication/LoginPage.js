import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Route } from 'react-router-dom'
import NavGeneral from '../NavGeneral'
import '../../css/navbar.css'
import M from 'materialize-css'

class LoginPage  extends Component {
    constructor(props)
    {
        super(props)
        this.state= {
            email:'',
            password:'',
            token:'',
            partner:false,
            member:false,
            ca:false,
            admin:false
        }
    }
    handleEmail=event =>{
        this.setState({email:event.target.value})
    }
    handlePass=event =>{
        this.setState({password:event.target.value})

    }
    async loginbtn(){
      var myuser;
      var token;
        const body={
            email:this.state.email,
            password:this.state.password
        }
        await axios.post('https://ateamse2.herokuapp.com/api/users/login', body).then(res=>{
          console.log(res)
          token = res.data.token
          localStorage.setItem("token", token)
          
        }).catch(err=>{
            console.log(err)
        })
        // console.log(localStorage.getItem('token'))
        await axios('https://ateamse2.herokuapp.com/api/users/dashboard', {
          method: 'GET',
          headers: {
            'authorization': token
          }
        })
        .then(res => {
          console.log(res.data.data)
          myuser=res.data.data
          if( myuser!==undefined&&myuser.type.includes('P') ) {
            this.props.history.replace('/partner');
          } else if(myuser!==undefined&&myuser.type.includes('CA') ) {
            this.props.history.replace('/ca');
  
          } else if( myuser!==undefined&&myuser.type.includes('M')) {
            this.props.history.replace('/member');
  
          } else if (myuser!==undefined&&myuser.type.includes('A')) {
            this.props.history.replace('/admin');
          }
          else{
            alert('Wrong password')
          }  
          })
        .catch(err => { 
            console.log(err) })
    }
    render() {
        // if(this.state.partner){
        //   return(
        //   )
        // }
    
        return(
            <div style={{paddingBottom:'400px',paddingLeft:'220px',backgroundColor:'#212121'}}>
            <div >
              <div class="row">
                <div class="input-field col s5">
              <input onChange={this.handleEmail} id="email" type="email" class="white-text"/>
                  <label class='green-text'for="email">Email</label>
                </div>
                <div class="input-field col s5">
                  <input onChange={this.handlePass} id="password" type="password" class="white-text"/>
                  <label for="password" class='green-text'>Password</label>
                </div>
                <div className='col s2 white-text' style={{marginTop:'20px'}}>
                <a onClick={()=>this.loginbtn()} id='login-btn-nav' className='btn waves-effect waves-light green darken-2'>Login</a>
                </div>
              </div>
          </div>
          </div>
        );
      
    }
}
export default LoginPage;