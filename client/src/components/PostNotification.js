import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import M from "materialize-css";
var nodemailer = require("nodemailer")

class PostNotification extends Component {
    
    componentDidMount() {
        axios.get(`http://localhost:4000/api/notifications/send`)
            .then(res => {
                var msg="Sent Users XD "
                var html="<span style='color:#ffdd42'>"+msg+"</span>"
                M.toast({html:html })
      


            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: err
                });
            });

    }
    
        
    renderLoading() {
       return <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-blue-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div><div class="gap-patch">
                <div class="circle"></div>
              </div><div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
          }
        renderError() {
            return <div>Ooops, : {this.state.error.message}</div>;
          }
        
         render() {
           
            return (
              <div className='container'>
              <center><h4> Users have been alerted</h4></center>
                
                <div className='row'>
                </div> 
              
              </div>
             
            );
          }
        }
        //  ReactDOM.render(
        //   <PostNotification subreddit="reactjs" />,
        //    document.getElementById("root")
        //  );

export default PostNotification;
