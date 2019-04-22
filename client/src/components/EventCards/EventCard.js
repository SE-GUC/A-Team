import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../../css/TaskCardContainer.css'
import axios from 'axios'
import M from "materialize-css";
import Banner from '../../media/banner.jpg'
import Profile from '../../media/profilepic.png'
import SkillChips from '../Admin/SkillChips'


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
            owner:{
                name:'',
                email:'',
                phone:'',
                username:'',
                field_of_work:[],
                interests:[]
           }



        }
    }
    async componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, true);
        var uuid=''
        var loctaionid=''
        console.log(this.props.data)
        this.setState({id:this.props.data})
            this.setState({name:this.props.data.name})
            this.setState({remaining_places:this.props.data.remaining_places})
            //this.setState({location:this.props.data.location})
            loctaionid=this.props.data.location
            this.setState({about:this.props.data.about})
            this.setState({price:this.props.data.price})
            this.setState({speakers:this.props.data.speakers+','})
            this.setState({topics:this.props.data.topics+ ','})
            this.setState({type:this.props.data.type})
            this.setState({partner_initiated:this.props.data.partner_initiated})
            uuid=this.props.data.partner_initiated

            await axios.get('http://localhost:4000/api/locations/'+loctaionid)
                    .then(res=>{
                        console.log(res)
                        var c= ""+res.data.data.title+", "+res.data.data.subtitle
                        this.setState({location:c})
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                    const partnerURL='http://localhost:4000/api/users/'+ uuid  
                    await axios.get(partnerURL)
                     .then(res=>{
                         console.log('URL',partnerURL)
                         console.log("Response",res)
                         console.log('PID IN THEN',this.state.partner_initiated)
                         this.setState({
                             owner:{
                             name:res.data.data.name,
                             email:res.data.data.email,
                             phone:res.data.data.phone,
                             username:res.data.data.username,
                             interests:res.data.data.interests,
                             field_of_work:res.data.data.field_of_work
                         }})
                         console.log(this.state.owner)
                     })  
                     .catch(err=>{
                              console.log(err)
                     })
                       

    }

    render() {
        return (
        
<div>
	<br/>
	<br/>
    <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
         <div class="background">
        <img src={Banner}/>
      </div>
      <a href="#user"><img class="circle" src={Profile}/></a>
      <a><span class="white-text name">{this.state.owner.name}</span></a>
      <a><span class="white-text email">{this.state.owner.email}</span></a>
    </div>
    </li>
    <li><a><i class="material-icons">phone</i>{this.state.owner.phone}</a></li>
    
    <li><div class="divider"></div></li>
    <li><a class="subheader"><i class="material-icons">person_outline</i>Interests:</a></li>
    <li><a><SkillChips skills={this.state.owner.interests}/></a></li>
  </ul>
 
	<div class="" >
		<div class="col s12 m6">
			<div class="card blue-grey darken-1">
				<div class="card-content white-text" id = "cardContent">
					<div class="card__meta">
						<time>{}</time>
					</div>
					<span class="card-title">{this.state.name}</span>
                    <p>---------------------------------------------------------</p>
                    <p>
                  <b>Posted By:</b> <a data-target="slide-out" class="sidenav-trigger"><i style={{padding:'2px',marginTop:'5px',color:'black'}} class="material-icons tiny">account_circle</i>{this.state.owner.name}</a>
                </p>
					<p><b>Remaining Places:</b> {this.state.remaining_places}</p>
                    <p><b>Location:</b> {this.state.location}</p>
                    <p><b>About:</b> {this.state.about}</p>
                    <p><b>About:</b> {this.state.events}</p>
                    <p><b>Price:</b> {this.state.price}£</p>
                    <p><b>Speakers:</b> {this.state.speakers}</p>
                    <p><b>Topics:</b> {this.state.topics}</p>
                    <p><b>Type:</b> {this.state.type}</p>

				</div>
				<div class="card-action" id = "cardAction">
                <div style={{paddingTop:'25px'}}>
                </div>
				</div>
			</div>
		</div>
	</div>
</div>
        )
    }
}



export default EventCard;