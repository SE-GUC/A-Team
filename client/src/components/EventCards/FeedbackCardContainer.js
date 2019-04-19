import Card from './FeedbackCard'
import React from 'react'
import axios from 'axios'
import '../../css/yaracard.css'
const jwt = require('jsonwebtoken')
// const tokenKey = require('../../../../config/keys').secretOrKey





class FeedbackCardContainer extends React.Component {  

    constructor(props) {
        super(props)
        this.state = {
            elements:[],
            events:[],
            remaining_places:'',
            name:'',
            location:'',
            about:'',
            price:[],
            speakers:[],
            topics:[],
            type:[],
            partner_initiated:'',
            loading: true,
            limit: 0
        }
    }
    loadMore=(e)=> {
        this.setState({
            limit:this.state.limit+2
        })
    }
    componentDidMount() {
        axios.get('http://localhost:4000/api/users/getEvents/5cae2d049cd95a5754daa7e4')
        // axios.get('http://localhost:4000/api/events')
        .then(res => {
                // this.setState({events: res.data.data})
                this.setState({elements:res.data.data})
                this.setState({loading:false})
                })
              .catch(err => { 
                  console.log(err) })
    }

    render() {  
        if(!this.state.loading) {
        var elements1=[];
        const events=this.state.elements
        for(var i=0;i<this.state.elements.length;i++){
            console.log(events[i]._id)
            if(i <= this.state.limit) {
            elements1.push(<Card data ={events[i]}/>);
            }
        }
        return( 
            <div class="container">
            <div class="row">
                <div class="row s2">{elements1}</div>
                <button class="waves-effect waves-light btn-small green" type="submit" name="action" onClick={this.loadMore}>Load More</button>

            </div>
            </div>
    );

    } else {
        return(
            <div class="preloader-wrapper big active">
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
        )
    }
}
}
export default FeedbackCardContainer;