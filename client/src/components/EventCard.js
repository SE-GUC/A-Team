import React, {Component} from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';


const dumb = {
    id:1,   
    name:"manga"
}

class EventCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events:[],
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
        axios.get('http://localhost:4000/api/events')
            .then(res => {
                this.setState({events:res.data.data})
                this.setState({name:res.data.data[0].name})
                this.setState({remaining_places:res.data.data[0].remaining_places})
                this.setState({location:res.data.data[0].location})
                this.setState({about:res.data.data[0].about})
                this.setState({price:res.data.data[0].price})
                this.setState({speakers:res.data.data[0].speakers})
                this.setState({topics:res.data.data[0].topics})
                this.setState({type:res.data.data[0].type})
                this.setState({partner_initiated:res.data.data[0].partner_initiated})
                console.log(this.state.events[0])
                
            })
            .catch(err => {
                console.log("oislijdlijSfiz")
            })
            console.log(this.state.name)

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
	<div class="row">
		<div class="col s12 m6">
			<div class="card blue-grey darken-1">
				<div class="card-content white-text">
					<div class="card__meta">
						<a href="#">Tasks Card Example</a>
						<time>{}</time>
					</div>
					<span class="card-title">{this.state.name}</span>
					<p><b>Remaining:</b> {this.state.remaining_places}</p>
                    <p><b>Location:</b> {this.state.location}</p>
                    <p><b>About:</b> {this.state.about}</p>
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