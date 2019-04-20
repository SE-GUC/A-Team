import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Route } from 'react-router-dom'
import NavGeneral from '../NavGeneral'

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
        console.log('ay 7aga')
        const body={
            email:this.state.email,
            password:this.state.password
        }
        await axios.post('http://localhost:4000/api/users/login', body).then(res=>{
          console.log(res)
          var token = res.data.token
          localStorage.setItem("token", token)
          
        }).catch(err=>{
            console.log(err)
        })
        // console.log(localStorage.getItem('token'))
        await axios('http://localhost:4000/api/users/dashboard', {
          method: 'GET',
          headers: {
            'authorization': localStorage.getItem('token')
          }
        })
        .then(res => {
          console.log(res.data.data)
          myuser=res.data.data
          })
        .catch(err => { 
            console.log(err) })
        if(myuser.type.includes('P')) {
          this.props.history.replace('/partner');
        } else if(myuser.type.includes('CA')) {
        } else if(myuser.type.includes('M')) {
          this.setState({member:true})
        } else if (myuser.type.includes('A')) {
          this.props.history.replace('/admin');
        }
    }
    render() {
        // if(this.state.partner){
        //   return(
        //   )
        // }
    
        return(
            <div >
            <NavGeneral/>

            <div class="row">
              <div class="row">
                <div class="input-field col s12">
                  <input onChange={this.handleEmail} id="email" type="email" class="validate"/>
                  <label for="email">Email</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input onChange={this.handlePass} id="password" type="password" class="validate"/>
                  <label for="password">Password</label>
                </div>
              </div>
              <a onClick={()=>this.loginbtn()} class="waves-effect waves-light btn">Login</a>
          </div>
          </div>
        );
      
    }
}
export default LoginPage;