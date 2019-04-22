import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'; 
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";  
  

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
            chosentypearray:[],
            ch:[],
            type5:'',
            speaker:'',
            startDate: new Date()        }

    }
    componentDidMount(){
      let elems = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
      var elems4 = document.querySelectorAll('select');
     M.FormSelect.init(elems4,  {inDuration: 300, outDuration: 225});
      axios.get('http://localhost:4000/api/locations/')
      .then(res => {
        var locc=[]
        var cap=[]

        for(let c=0;c<res.data.data.length;c++){
          if(res.data.data[c].booked==='Available'){
              locc.push(<li><button style={{color:'black'}} class="waves-effect waves-light btn green lighten-3" onClick={this.handleChangelocation} id={res.data.data[c]._id}
              >{res.data.data[c].title}: {res.data.data[c].subtitle} Capactity{res.data.data[c].capacity}</button></li>)
              this.setState({remaining_places:res.data.data[c].capacity}) 
        }
        }
         this.setState({location:locc})
        this.setState({capacity:cap})
      })
      .catch(error =>{
        console.log(error)
      })
      var elems1 = document.querySelectorAll('.chips');
      M.Chips.init(elems1, {inDuration: 300, outDuration: 225});
    
      var ty=[]
        axios.get('http://localhost:4000/api/events/getTypesHoss')
        .then(response =>{
          for(let p=0;p<response.data.data.length;p++){
            ty.push(<li><button class="btn waves-effect waves-light" onClick={this.handleChangetype} id={response.data.data[p].name}>{response.data.data[p].name}</button></li>)
          }
        })
        .catch(error =>{
          console.log(error)
        })
        this.setState({type:ty})

        var elemsdate = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elemsdate, {inDuration: 300, outDuration: 225});
    }
    
setname=(event)=>{
      event.preventDefault();
      this.setState({name:event.target.value})
  }
setprice=(event)=>{
  event.preventDefault();
    this.setState({price:event.target.value})
}
setabout=(event)=>{
  event.preventDefault();
  this.setState({about:event.target.value})
}

setspeaker =event =>{
  event.preventDefault();
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
  event.preventDefault();
  this.setState({topics:event.target.value})
}
handleChangelocation=(event)=>{
  event.preventDefault();
 this.setState({chosen:event.target.id})
console.log(this.state.chosen)
  }
  handleChangedate=(event)=> {
    this.setState({startDate: event.target.value});
  }
handleChangetype = event=> {
  event.preventDefault();
  console.log(event.target.id)
    // this.setState({chosen_type:event.target.id})
    this.state.chosentypearray.push(event.target.id)
    console.log(this.state.chosen_type)
    console.log(this.state.chosentypearray)
  }
  handleClick=event=>
  {
    event.preventDefault();

    const url= 'http://localhost:4000/api/events/'
    if(this.state.name===''){
      const msg='you have to enter a name'
    var html="<span style='color:#ffdd42'>"+msg+"</span>"
     M.toast({html:html })
    }else{
    if(this.state.price.length===0){
      const msg='you have to enter a price'
    var html="<span style='color:#ffdd42'>"+msg+"</span>"
     M.toast({html:html })
    }else{
      if(this.state.about===''){
        const msg='you have to tell us what this event is about'
    var html="<span style='color:#ffdd42'>"+msg+"</span>"
     M.toast({html:html })
      }
    else{
    if(this.state.speaker.length===0){
      const msg='you have to enter atleast 1 speaker'
    var html="<span style='color:#ffdd42'>"+msg+"</span>"
     M.toast({html:html })
    }  
    else{
    if(this.state.topics.length===0){
      const msg='you have to enter atleast 1 topics'
    var html="<span style='color:#ffdd42'>"+msg+"</span>"
     M.toast({html:html })
    }else{
      if(this.state.chosen===''){
        const msg='you have to enter a location'
    var html="<span style='color:#ffdd42'>"+msg+"</span>"
     M.toast({html:html })
      }else{
        if(this.state.chosentypearray.length===0){
          const msg='you have to enter atleast one type'
    var html="<span style='color:#ffdd42'>"+msg+"</span>"
     M.toast({html:html })
        }
        

    else{
      

    var allSpeakers=this.state.speaker.split(',')
    var allPrices=this.state.price.split(',')
    var alltopics=this.state.topics.split(',')
    
    
    axios({
        method: 'POST',
        url: url,
        headers: {
            authorization: localStorage.getItem('token')
        }, 
        data: {
          price:allPrices,
          location:this.state.chosen,
          name:this.state.name,
          about:this.state.about,
          remaining_places:this.state.remaining_places,
          speakers:allSpeakers,
          topics:alltopics,
          event_date:this.state.startDate,
          type:this.state.chosentypearray
        }
      }).then(res=>{
        alert('posted successfully')
        console.log(res)
      })
    .catch(function (error){
      console.log(error)
    })
    }
  }
}
  }
}
}}   
  }
    render()
    {
        return(
          <div>
          <div class="container">
          <h4>Create Event</h4>
          <p>Please be advised that Your Event won't be seen by others until its is approved by Lirten-Hub</p>
          <br></br>
          <form onSubmit={this.handleClick} className='eventForm'>
            <div class="row">
              <div class="input-field col s6">
              <i class="material-icons prefix">event</i>
              <input placeholder="Event Name" state={this.state} id="Event_name" type="text" class="validate" onChange={this.setname}/>
              <label for="Event_name">Event Name</label>
              </div>
              <div class="input-field col s6">
              <i class="material-icons prefix">monetization_on</i>
                   <input placeholder="Add prices (Separate prices by commas)" state={this.state} id="price_id" type="text" class="validate" onChange={this.setprice}/>
                   <label for="price_id">Price</label>
              </div>
            </div> 
            <div class="row">
              <div class="input-field col s12">
              <i class="material-icons prefix">info</i>
                <textarea placeholder="About" id="about_id" state={this.state}  class="materialize-textarea" onChange={this.setabout}/>
                <label for="about_id"></label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
              <i class="material-icons prefix">mic</i>
                <input placeholder="Add speakers (Separate speakers by commas)" id="speakers_id" state={this.state} type="text" class="validate" onChange={this.setspeaker}/>
                <label for="about_id"></label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
              <i class="material-icons prefix">book</i>
                <input placeholder="Add topics (Separate topics by commas)" id="topics_id" state={this.state} type="text" class="validate" onChange={this.settopics}/>
                <label for="topics_id"></label>
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
             <div className='row'>
             <div class="row">
                  <a class='dropdown-trigger btn' href='#' data-target='dropdown2' >Select Type</a>
                      <ul id='dropdown2' class='dropdown-content'>
                      {this.state.type}
                      </ul>
                  </div>
                <div class="row">
                  <a class='dropdown-trigger btn' href='#' data-target='dropdown1' >Select Location</a>
                  <ul  id='dropdown1' class='dropdown-content'>
                  {this.state.location}
                  </ul>
                  </div>
                  </div>
                  <div class="row">
                  <div className="input-field col s6">
                  <i class="material-icons prefix">event</i>
                    <input type="date" onChange={this.handleChangedate} />
                    
                  </div>
                  <div className="col s6"></div>
                  </div>
                  <br/>   
                   <br/>
                  <br/>
                  <div class="row">
             </div>
                  <br/>
          
                  
                  <div class="row" style={{marginRight:'80px'}}>
                  <div class="col s10 offset-s1 center-align">
                  <button class="waves-effect waves-light btn green darken-2" name="action" state={this.state} onClick={this.handleClick}>Submit Form
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