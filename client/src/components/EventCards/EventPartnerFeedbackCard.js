import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios'
import Card from './ShowFeedbacksCard'


class EventCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events:[],
            id:'',
            remaining_places:'',
            name:'',
            location:'',
            about:'',
            price:[],
            speakers:[],
            topics:[],
            type:[],
            partner_initiated:'',
            applicants:[],
            elements2:[],
            showbtn:false,
            feedbacks:[]



        }
    }
    componentDidMount() {
        console.log(this.props.data)
        this.setState({id:this.props.data})
            const url = 'https://ateamse2.herokuapp.com/api/events/getid/' + this.props.data
            console.log(url)
            axios.get(url)
                .then(res => {
                    this.setState({name:res.data.data.name})
                    this.setState({remaining_places:res.data.data.remaining_places})
                    this.setState({location:res.data.data.location})
                    this.setState({about:res.data.data.about})
                    this.setState({price:res.data.data.price})
                    this.setState({speakers:res.data.data.speakers})
                    this.setState({topics:res.data.data.topics})
                    this.setState({type:res.data.data.type})
                    this.setState({partner_initiated:res.data.data.partner_initiated})
                    this.setState({applicants:res.data.data.applicants})
                    this.setState({feedbacks:res.data.data.feedbacks})
                        })
                .catch(err => {
                    console.log(err)
                })


    }
    showFeedbacks() {
        var elements1=[];
        const feedbacks=this.state.feedbacks
        console.log(feedbacks)
        var elements3=[]
        for (var i =0 ;i<feedbacks.length;i++) {
            elements3.push({
                eventid:this.state.id,
                index:i
            })
        }
        
        
        for(var i=0;i<this.state.feedbacks.length;i++){
            elements3.push(i)
            elements1.push(<Card data ={elements3[i]}/>);
            console.log(elements3[i])
            elements3.pop()
        }
        this.setState({elements2:elements1,
        showbtn:true})
    }

    render() {
        if(this.state.showbtn) {
            return( 
                <div class="container">
                <div class="row">
                    <div class="row s2">{this.state.elements2}</div>
                </div>
                </div>
        );
    
        }
        else
        return (
        
<div>
    ShowApplicants 
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
            
	<div class="" >
		<div class="col s12 m6">
			<div class="card blue-grey darken-1">
				<div class="card-content white-text">
					<div class="card__meta">
						<a href="card">Event</a>
						<time>{}</time>
					</div>
					<span class="card-title">{this.state.name}</span>
					<p><b>Remaining Places:</b> {this.state.remaining_places}</p>
                    <p><b>Location:</b> {this.state.location}</p>
                    <p><b>About:</b> {this.state.about}</p>
                    <p><b>About:</b> {this.state.events}</p>
                    <p><b>Price:</b> {this.state.price}</p>
                    <p><b>Speakers:</b> {this.state.speakers}</p>
                    <p><b>Topics:</b> {this.state.topics}</p>
                    <p><b>Type:</b> {this.state.type}</p>
                    <a onClick={()=>this.showFeedbacks()} class="waves-effect waves-light btn">Show Feedbacks</a>
                    
				</div>
				<div class="card-action">

				</div>
			</div>
		</div>
	</div>
</div>
        )
        
    }

}



export default EventCard;