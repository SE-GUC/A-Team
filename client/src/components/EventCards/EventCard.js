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
        console.log(this.props.data)
        this.setState({id:this.props.data})
            this.setState({name:this.props.data.name})
            this.setState({remaining_places:this.props.data.remaining_places})
            this.setState({location:this.props.data.location})
            this.setState({about:this.props.data.about})
            this.setState({price:this.props.data.price})
            this.setState({speakers:this.props.data.speakers})
            this.setState({topics:this.props.data.topics})
            this.setState({type:this.props.data.type})
            this.setState({partner_initiated:this.props.data.partner_initiated})


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