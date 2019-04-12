import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios'


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
            partner_initiated:''



        }
    }
    componentDidMount() {
        this.setState({id:this.props.value})
        console.log(this.props.value)
        const url='http://localhost:4000/api/events/getID/'+this.props.value
        console.log(url)
        axios.get(url)
        .then(res => {
            console.log(res.data.data)
            // this.setState({events: res.data.data})
            this.setState({name:res.data.data.name})
            this.setState({remaining_places:res.data.data.remaining_places})
            this.setState({location:res.data.data.location})
            this.setState({about:res.data.data.about})
            this.setState({price:res.data.data.price})
            this.setState({speakers:res.data.data.speakers})
            this.setState({topics:res.data.data.topics})
            this.setState({type:res.data.data.type})
            this.setState({partner_initiated:res.data.data.partner_initiated})
            })
        .catch(err => {
            console.log("oislijdlijSfiz")
        })


    }

    render() {
        return (
        
<div>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
            
	<div class="card" >
		<div class="col s12 m6">
			<div class="card blue-grey darken-1">
				<div class="card-content white-text">
					<div class="card__meta">
						<a href="card">Event</a>
						<time>{}</time>
					</div>
					<span class="card-title">{this.state.name}</span>
					<p><b>Remaining:</b> {this.state.remaining_places}</p>
                    <p><b>Location:</b> {this.state.location}</p>
                    <p><b>About:</b> {this.state.about}</p>
                    <p><b>About:</b> {this.state.events}</p>
                    <p><b>Price:</b> {this.state.price}</p>
                    <p><b>Speakers:</b> {this.state.speakers}</p>
                    <p><b>Topics:</b> {this.state.topics}</p>
                    <p><b>Type:</b> {this.state.type}</p>

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