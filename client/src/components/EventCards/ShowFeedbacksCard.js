import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios'


class ShowFeedbacks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feedbacks:[],
            name:'',
            feedback:'',
            rate:'',
            // speakers:[],
            // topics:[],
            // type:[],
            // partner_initiated:''
        }
    }
    async componentDidMount() {
        var elements=[]
        console.log(this.props.data)
        const url = 'http://localhost:4000/api/events/getid/'+this.props.data.eventid
        console.log(url)
        await axios.get(url)
        .then(
            res =>{
                this.setState({feedbacks:res.data.data.feedbacks})
                this.setState({feedback:this.state.feedbacks[this.props.data.index].comment})
                this.setState({rate:this.state.feedbacks[this.props.data.index].rate})
                
            }
        )
        axios.get('http://localhost:4000/api/users/'+this.state.feedbacks[this.props.data.index].user_id)
        .then(
            res=>{
                this.setState({name:res.data.data.name})
                console.log(res)
            }
        )

        // console.log(this.state.feedbacks)
        console.log(elements)
        // console.log(this.props.data)


        }

    render() {
        console.log(this.state.feedbacks)
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
						<time>{}</time>
					</div>
					<span class="card-title">{this.state.name}</span>
					<p><b>Comment:</b> {this.state.feedback}</p>
                    <p><b>Rate:</b> {this.state.rate}</p>
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



export default ShowFeedbacks;