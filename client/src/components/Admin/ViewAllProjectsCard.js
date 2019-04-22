import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../../css/TaskCardContainer.css'
import axios from 'axios'

class ViewAllProjectsCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id:'',
            project_name:'',
            description:'',
            date_Posted:'',
            partner_responsible:'',
            consultancy_agency_assigned:'',
            skills:[],
            consultancy_agency_applicants:[],
            tasks:[],
            names:''

        }
    }
    componentDidMount() {
        this.setState({
            id: this.props.value
        })
        
        
        axios.get('http://localhost:4000/api/project/read/'+this.props.value)
            .then(res => {
                this.setState({
                    project_name: res.data.data.project_name
                })
                this.setState({
                    _id: res.data.data._id
                })
                this.setState({
                    description: res.data.data.description
                })
                this.setState({
                    date_Posted: res.data.data.date_Posted
                })
                this.setState({
                    partner_responsible: res.data.data.partner_responsible
                })
                this.setState({
                    skills: res.data.data.skills + ','
                })
                this.setState({
                    consultancy_agency_assigned: res.data.data.consultancy_agency_assigned
                })
                this.setState({
                    consultancy_agency_applicants: res.data.data.consultancy_agency_applicants + ','
                })
                this.setState({
                    tasks: res.data.data.tasks + ','
                })
            
            })
            .catch(err => {
                console.log(err)
            })
            axios.get('http://localhost:4000/api/consultancyAgencies/view_agency/'+ this.state.consultancy_agency_assigned)
            .then(res => {
                this.setState({
                    names: res.data.data.info
                })
            })
    }
       accept(){
        this.setState({submitState:true})
     
        axios.put('http://localhost:4000/api/project/crud/', {
            id: this.props.value,
            state: 'ACCEPTED'
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
            
	<div class="" id = "manga">
			<div class="card blue-grey darken-1">
				<div class="card-content white-text" id="cardContent">
					<div class="card__meta">
						<time>{}</time>
					</div>
					<span class="card-title">{this.state.project_name}</span>
					<p><b>Description:</b> {this.state.description}</p>
                    <p><b>Date Posted:</b> {this.state.date_Posted}</p>
                    <p><b>Partner Responsible:</b> {this.state.partner_responsible}</p>
                    <p><b>Skills:</b> {this.state.skills}</p>
                    <p><b>Consultancy Agency Applicants:</b> {this.state.consultancy_agency_applicants}</p>
                    <p><b>Assigned Consultancy Agency :</b> {this.state.consultancy_agency_assigned}</p>
                    <p><b>Tasks:</b> {this.state.tasks}</p>

				</div>
                
				<div class="card-action" id="cardAction">
                <p>
                       
                </p>
                <a  disabled onClick={()=>this.accept()} class="waves-effect waves-light btn-small green">Accept</a>
				</div>
			</div>
		</div>
</div>
        )
    }

}



export default ViewAllProjectsCard;