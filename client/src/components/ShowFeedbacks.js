import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FeedbacksTable from './FeedbacksTable'


class ShowFeedbacks extends Component {
    
    
    state = {
        id:'',
        feedbacks:[],
        done:false
     };
 

 handleChange = event => {
     this.setState({ id: event.target.value })
 }
 
 handleSubmit = event => {
     event.preventDefault(); //prevents page from reloading
     
       const  id= this.state.id
    
     const url = 'http://localhost:4000/api/events/'+id+'/feedback'
     axios.get(url)
         .then(res => {
             this.setState({feedbacks: res.data.data})
             this.setState({ done:true })

         })


 };
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
     return (
         <div>
             Ooops, : {this.state.error.message}
         </div>
     )
 }
 renderDone() {
     return(
          <div>
         <form onSubmit={this.handleSubmit}>
             <label>
                 Event ID:
                 <input type="text" name="id" onChange={this.handleChange} />
             </label>
             <button type="submit">Get Feedbacks</button>
             <ul>
       
         <FeedbacksTable data={this.state.feedbacks}/>             
      
     </ul>
     </form>
         </div>
     
     )
 }
 
 render() {
     if(this.state.loading) {
         return this.renderLoading()
     }
     if(this.state.done) {
        return(
            <div>
           <form onSubmit={this.handleSubmit}>
               <label>
                   Event ID:
                   <input type="text" name="id" onChange={this.handleChange} />
               </label>
               <button type="submit">Get Feedbacks</button>
               <ul>
         
           <FeedbacksTable data={this.state.feedbacks}/>             
        
       </ul>
       </form>
           </div>
       
       )
       }
     return(
         <div>
         <form onSubmit={this.handleSubmit}>
             <label>
                 Event ID:
                 <input type="text" name="id" onChange={this.handleChange} />
             </label>
             
             <br/>
             <button type="submit">Get Feedbacks</button>
         </form>
         </div>
         
         
     )
 }
}
ReactDOM.render(
    <ShowFeedbacks subreddit="reactjs"/>,
    document.getElementById('root')
)

export default ShowFeedbacks;