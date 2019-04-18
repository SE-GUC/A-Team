import React, { Component } from 'react';
import axios from 'axios'
class LoginPage  extends Component {
    constructor(props)
    {
        super(props)
        this.state= {
            email:'',
            password:'',
            token:''
        }
    }
    handleEmail=event =>{
        this.setState({email:event.target.value})
    }
    handlePass=event =>{
        this.setState({password:event.target.value})

    }
    loginbtn(){
        console.log('ay 7aga')
        const body={
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost:4000/api/users/login', body).then( res=>{
          console.log(res)
          var token = res.data.token.split(' ')[1]
          localStorage.setItem("token", token)
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {

    
        return(

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
        );
      
    }
}
export default LoginPage;