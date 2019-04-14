import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios'


class ApplicantsCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            email:'',
            username:'',
            age:'',
            interests:[],
            show:true
            // speakers:[],
            // topics:[],
            // type:[],
            // partner_initiated:''



        }
    }
    componentDidMount() {
        console.log(this.props.data)
        const url = 'https://ateamse2.herokuapp.com/api/users/'+this.props.data.applicant_id
        console.log(this.props.data.eventid)
        console.log(url)
        axios.get(url)
        .then(
            res =>{
                this.setState({id:res.data.data._id})
                this.setState({name:res.data.data.name})
                this.setState({email:res.data.data.email})
                this.setState({username:res.data.data.username})
                this.setState({age:res.data.data.age})
                this.setState({interests:res.data.data.interests})
        
            }
        )
        console.log(this.props.data)


    }
    accept() {
        const url = 'https://ateamse2.herokuapp.com/api/events/'+this.props.data.eventid+'/apply'
        console.log(this.props.data.eventid)
        axios.put(url, {
            applicant_id:this.props.data.applicant_id,
            is_accepted:true
        })
        const url2 = 'https://ateamse2.herokuapp.com/api/users/' +this.props.data.applicant_id+'/addEvent/'
        console.log(url2)
        axios.post(url2, {
            eventid:this.props.data.eventid
        })
        this.setState({show:false})


    }
    reject() {
        //mabta3melsh 7aga
    }

    render() {
        if(this.state.show)
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
					<p><b>Email:</b> {this.state.email}</p>
                    <p><b>Username:</b> {this.state.username}</p>
                    <p><b>Age:</b> {this.state.age}</p>
                    <p><b>Interests:</b> {this.state.interests}</p>
                    <a onClick={()=>this.accept()} class="waves-effect waves-light btn">Accept</a>
                    <a onClick={()=>this.reject()} class="waves-effect waves-light btn">Reject</a>

				</div>
				<div class="card-action">

				</div>
			</div>
		</div>
	</div>
</div>
        )
        else{
            return (
                <div>
                    
                </div>
            )
        }
    }
}



export default ApplicantsCard;