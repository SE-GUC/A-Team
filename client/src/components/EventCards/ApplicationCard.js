import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios'
import M from 'materialize-css';

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
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
        console.log(this.props.data)
        this.setState({id:this.props.data._id})
        this.setState({name:this.props.data.name})
        this.setState({remaining_places:this.props.data.remaining_places})
        this.setState({location:this.props.data.location})
        this.setState({about:this.props.data.about})
        this.setState({price:this.props.data.price})
        this.setState({speakers:this.props.data.speakers+','})
        this.setState({topics:this.props.data.topics+','})
        this.setState({type:this.props.data.type})
        this.setState({partner_initiated:this.props.data.partner_initiated})
    } 
    applybtn() {
        this.setState({submitState:true})
        this.apply2()
        const url='http://localhost:4000/api/events/'+this.state.id +'/apply'

        axios({
            method: 'POST',
            url: url,
            headers: {
                authorization: localStorage.getItem('token')
            }
          }).then(res=>{
              console.log('geh hena?')
              console.log(res)
          });
    }
    apply2() {
        const url='http://localhost:4000/api/events/'+this.state.id +'/apply'

        axios({
            method: 'POST',
            url: url,
            headers: {
                authorization: localStorage.getItem('token')
            }
          }).then(res=>{
              console.log('geh hena?')
              console.log(res)
          });

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
  <div className="input-field col s12">
  <a class='dropdown-trigger btn' href='#' data-target='dropdown1' onClick={this.handleClickLocation}>filter</a>
  <ul id='dropdown1' class='dropdown-content'>
  <li><a href="#!">type</a></li>
  <li><a href="#!">date</a></li>
  <li><a href="#!">price</a></li>
  <li><a href="#!">feedback</a></li>


  <li class="divider" tabindex="-1"></li>
  
</ul>
            </div>
     
    
	<div class="" >
		<div class="col s12 m6">
			<div class="card blue-grey darken-1">
            <div class="card-content white-text" id="cardContent">
					<div class="card__meta">
						<time>{}</time>
					</div>
					<span class="card-title">{this.state.name}</span>
                    <p>---------------------------------------------------------</p>
                        
					<p><b>Remaining:</b> {this.state.remaining_places}</p>
                    <p><b>Location:</b> {this.state.location}</p>
                    <p><b>About:</b> {this.state.about}</p>
                    <p><b>About:</b> {this.state.events}</p>
                    <p><b>Price:</b> {this.state.price}£</p>
                    <p><b>Speakers:</b> {this.state.speakers}</p>
                    <p><b>Topics:</b> {this.state.topics}</p>
                    <p><b>Type:</b> {this.state.type}</p>
                    <br></br>
                    <a onClick={()=>this.applybtn()} class="waves-effect waves-light btn-small green darken-2">Apply</a>
				</div>
			</div>
		</div>
	</div>
</div>



        )
    }
}



export default EventCard;