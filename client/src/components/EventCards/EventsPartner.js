import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios'
import Card from './ApplicantsCard'


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
            applicant:''



        }
    }
    async componentDidMount() {
        console.log(this.props.data)
        var loctaionid=''
        this.setState({id:this.props.data})
            const url = 'http://localhost:4000/api/events/getid/' + this.props.data
            console.log(url)
           await axios.get(url)
                .then(res => {
                    this.setState({
                        name:res.data.data.name,
                        remaining_places:res.data.data.remaining_places,
                        about:res.data.data.about,
                        price:res.data.data.price,
                        topics:res.data.data.topics+',',
                        type:res.data.data.type,
                        partner_initiated:res.data.data.partner_initiated,
                        applicants:res.data.data.applicants
                    })
                    console.log(res.data.data.applicants)
                    loctaionid=res.data.data.location

                        })
                .catch(err => {
                    console.log(err)
                })

                console.log(loctaionid)
                await axios.get('http://localhost:4000/api/locations/'+loctaionid)
                .then(res=>{
                    console.log(res)
                    var c= ""+res.data.data.title+", "+res.data.data.subtitle
                    this.setState({location:c})
                })
                .catch(err=>{
                    console.log(err)
                })


    }
    showApplicants() {
        var elements1=[];
        const users=this.state.applicants
        console.log(this.state.applicants)
        
        
        var array=[]
        for(var i=0;i<this.state.applicants.length;i++){
            var elements3={
                eventid:this.state.id,
                applicant_id:users[i].applicant_id
            }
            if(!users[i].is_accepted)
                array.push(elements3)
        }
        for(var i =0;i<array.length;i++) {
            elements1.push(<Card data ={array[i]}/>);
        }
                    // elements3.pop()
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
				<div class="card-content white-text" id="cardContent">
					<div class="card__meta">
						<time>{}</time>
					</div>
					<span class="card-title">{this.state.name}</span>
                    <p>---------------------------------------------------------</p>
					<p><b>Remaining Places:</b> {this.state.remaining_places}</p>
                    <p><b>Location:</b> {this.state.location}</p>
                    <p><b>About:</b> {this.state.about}</p>
                    <p><b>About:</b> {this.state.events}</p>
                    <p><b>Price:</b> {this.state.price}£</p>
                    <p><b>Speakers:</b> {this.state.speakers}</p>
                    <p><b>Topics:</b> {this.state.topics}</p>
                    <p><b>Type:</b> {this.state.type}</p>
                    
				</div>
				<div class="card-action">
<center><a onClick={()=>this.showApplicants()} class="waves-effect waves-light btn-small green darken-2">Show Applicants</a>
</center>
				</div>
			</div>
		</div>
	</div>
</div>
        )
        
    }

}



export default EventCard;