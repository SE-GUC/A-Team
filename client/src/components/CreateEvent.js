import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'; 


  
  

class CreateEvent extends Component {
    constructor(props)
    {
        super(props)
        this.state= {

            price:'',
            location:[],
            location_id:[],
            sublocation:[],
            capacity:[],
            name: '',
            about:'',
            remaining_places:200,
            speakers:[],
            topics:[],
            type:[], 
            chosen:'',
            chosen_type:'',
            ch:[],
            type5:'',
            speaker:''
        }
    }
    componentDidMount(){
      let elems = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
      var elems4 = document.querySelectorAll('select');
     M.FormSelect.init(elems4,  {inDuration: 300, outDuration: 225});
      axios.get('http://localhost:4000/api/locations/')
      .then(res => {
        var id=[]
        var locc=[]
        var loccbtn=[]
        var locc1=[]
        var room=[]
        var cap=[]

        for(let c=0;c<res.data.data.length;c++){
          if(res.data.data[c].booked==='Available'){
              locc1.push(res.data.data[c].title)
              loccbtn.push(<a class="waves-effect waves-light btn-large">{res.data.data[c].title}</a> )
              locc.push(<li><button class="btn waves-effect waves-light" onClick={this.handleChangelocation} id={res.data.data[c]._id}>{res.data.data[c].title}: {res.data.data[c].subtitle} Capactity{res.data.data[c].capacity}</button></li>) 
          id.push(<li><a href="#!">{res.data.data[c]._id}</a></li>)
          room.push(<li><a href="#!">{res.data.data[c].subtitle}</a></li>)
          cap.push(<li><a href="#!">{res.data.data[c].capacity}</a></li>)
        }
        }
         this.setState({location:locc})
        this.setState({capacity:cap})
        this.setState({sublocation:room})
        this.setState({location_id:id})
        this.setState({ch:loccbtn})
      })
      .catch(error =>{
        console.log(error)
      })
      var elems1 = document.querySelectorAll('.chips');
      M.Chips.init(elems1, {inDuration: 300, outDuration: 225});
    
      var ty=[]
        axios.get('http://localhost:4000/api/events/getTypes')
        .then(response =>{
          for(let p=0;p<response.data.data.length;p++){
            ty.push(<li><button class="btn waves-effect waves-light" onClick={this.handleChangetype} id={response.data.data[p]._id}>{response.data.data[p].name}</button></li>)
          }
        })
        .catch(error =>{
          console.log(error)
        })
        this.setState({type:ty})
    }
    
setname=(event)=>{
      this.setState({name:event.target.value})
  }
setprice=(event)=>{
    this.setState({price:event.target.value})
}
setabout=(event)=>{
  this.setState({about:event.target.value})
}

setspeaker =event =>{
  this.setState({speaker:event.target.value})
  console.log(this.state.speaker)

}
setspeakers(){
  this.setState({speakers:this.state.speakers.push(this.state.speaker)})
  this.setState({speaker:''})
  console.log(this.state.speakers)
  // this.state.speakers.push(this.state.speaker)

}
settopics=(event)=>{
  this.setState({topics:event.target.value})
}
handleChangelocation=(event)=>{
 this.setState({chosen:event.target.id})
console.log(this.state.chosen)
  }
handleChangetype = event=> {
    this.setState({chosen_type:event.target.id})
    console.log(this.state.chosen_type)
  }
handleClick=event=>
    {
      var allSpeakers=this.state.speaker.split(',')
      event.preventDefault();
      const url= 'http://localhost:4000/api/events/'
      console.log(url)
      const body= {
        price:this.state.price,
        location:this.state.chosen,
        name:this.state.name,
        about:this.state.about,
        remaining_places:this.state.remaining_places,
        speakers:allSpeakers,
        topics:this.state.topics,
        type:this.state.chosen_type,
      }
      console.log(body)
      axios.post(url,body)
      .then(res =>{  
       // console.log(res)
        return res.data.data;
      })
      .catch(function (error){
        console.log(error)
      })
    }
    
    
    render()
    {
        return(
          <div>
            
                
                <br/>
                
          
          <div class="row">
          <form onSubmit={this.handleClick} class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Name of the Event" state={this.state} id="Event_name" type="text" class="validate" onChange={this.setname}/>
                <label for="Event_name"></label>
              </div>
              <div class="input-field col s6">
                <input placeholder="price" state={this.state} id="price_id" type="text" class="validate" onChange={this.setprice}/>
                   <label for="price_id"></label>
              </div>
            </div> 
            <div class="row">
              <div class="input-field col s12">
                <input placeholder="about" id="about_id" state={this.state} type="text" class="validate" onChange={this.setabout}/>
                <label for="about_id"></label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input placeholder="Add speakers" id="speakers_id" state={this.state} type="text" class="validate" onChange={this.setspeaker}/>
                <label for="about_id"></label>
              </div>
            </div>
            {/* <div>
               <Chips
                  // value={this.state.speaker}
                    onChange={this.setspeaker}
                      //  suggestions={["Your", "Data", "Here"]}
                       getChipValue={this.setspeakers}
                           />
             </div>
 */}

          
           
            {/* <div class="row">
            <label for="speakers_id">Speakers: </label>
                  <div class="chips">
                  <input class="custom-class"  onChange={this.setspeaker}  onChipAdd={this.setspeakers}/>
                  </div>
              </div> */}

              {/* <div class="row">
            <label for="topics_id">Topics: </label>
                  <div class="chips"></div>
                  <div class="chips chips-initial"></div>
                  <div class="chips chips-placeholder"></div>
                  <div class="chips chips-autocomplete"></div> 
                  <div class="chips">
                  <input class="custom-class" id="topics_id" onChange={this.settopics}/>
                  </div>
              </div> */}
              <div class="row">
                  <a class='dropdown-trigger btn' href='#' data-target='dropdown2' >Select Type</a>
                      <ul id='dropdown2' class='dropdown-content'>
                      {this.state.type}
                      </ul>
                  </div>

                  <a class='dropdown-trigger btn' href='#' data-target='dropdown1' >Select Location</a>
                  <ul id='dropdown1' class='dropdown-content'>
                  {this.state.location}
                  </ul>
                  <br/>
          
                  
                   <br/>
                  <br/>
                  <div class="row">
                  <div class="col s10 offset-s1 center-align">
                  <button class="btn waves-effect waves-light" name="action" state={this.state} onClick={this.handleClick}>Submit Form
                    <i class="material-icons right"></i>
                  </button>
                  </div>
                  </div>
          </form>
        </div>
        </div>
        )
    }
}

ReactDOM.render(<CreateEvent />, 
  document.getElementById('root'));
  
export default (CreateEvent);