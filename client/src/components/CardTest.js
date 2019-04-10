import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import axios from 'axios';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dummy from './Dummy';

const dumb = {
    id:1,
    name:"manga"
}
class CardTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks:[],
            name:'',
            description:'',
            monetary_compensation:'',
            status:'',
            skills:[],

            time_of_post:'',
            time_expected:'',
            level_of_commitment:'',
            experience_needed:''



        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/api/tasks/read/')
            .then(res => {
                this.setState({tasks:res.data.data})
                this.setState({name:res.data.data[0].name})
                this.setState({description:res.data.data[0].description})
                this.setState({monetary_compensation:res.data.data[0].monetary_compensation})
                this.setState({status:res.data.data[0].status})
                this.setState({skills:res.data.data[0].skills})
                this.setState({time_of_post:res.data.data[0].time_of_post})
                this.setState({time_expected:res.data.data[0].time_expected})
                this.setState({level_of_commitment:res.data.data[0].level_of_comitment})
                this.setState({experience_needed:res.data.data[0].experience_needed})





                

                console.log(this.state.tasks[0])
                
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
					<p><b>Description:</b> {this.state.description}</p>
                    <p><b>Monetary Compensation:</b> {this.state.monetary_compensation}</p>
                    <p><b>Status:</b> {this.state.status}</p>
                    <p><b>Skills:</b> {this.state.skills}</p>
                    <p><b>Time Posted:</b> {this.state.time_of_post}</p>
                    <p><b>Expected Time:</b> {this.state.time_expected}</p>
                    <p><b>Commtment Level Required:</b> {this.state.level_of_commitment}</p>
                    <p><b>Experience Needed:</b> {this.state.experience_needed}</p>

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



export default CardTest;