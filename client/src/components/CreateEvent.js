import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'; 



const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 250,
    },
  });
  
  

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
            remaining_places:'',
            speakers:[],
            topics:[],
            type:'', 
            chosen:''
        }
    }
    componentDidMount(){
      let elems = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
      axios.get('http://localhost:4000/api/locations/')
      .then(res => {
        var id=[]
        var locc=[]
        var locc1=[]
        var room=[]
        var cap=[]
        for(let c=0;c<res.data.data.length;c++){
          if(res.data.data[c].booked==='Available'){
            if(!locc1.includes(res.data.data[c].title)){
              locc1.push(res.data.data[c].title)
              locc.push(<li><a href="#!">{res.data.data[c].title}</a></li>)
            }
          id.push(<li><a href="#!">{res.data.data[c]._id}</a></li>)
          
         
          room.push(<li><a href="#!">{res.data.data[c].subtitle}</a></li>)
          cap.push(<li><a href="#!">{res.data.data[c].capacity}</a></li>)
        }
        }
        
        // for(let o=0;o<locc.length;o++){
        //   for(let y=o+1;y<locc.length;y++){
        //     if(locc[o]===locc[y]){
        //       locc.pop(locc[o])
        //     }
        //   }
        // }
        this.setState({location:locc})
        this.setState({capacity:cap})
        this.setState({sublocation:room})
        this.setState({location_id:id})
      })
      .catch(error =>{
        console.log(error)
      })
      var elems1 = document.querySelectorAll('.chips');
      M.Chips.init(elems1, {inDuration: 300, outDuration: 225});
      
    }
    addSpeakers = newspeaker => {
      var update = this.state.speakers;
      var found = update.find(function(element) {
        return element === newspeaker;
      });
      if (found === undefined) {
        update.push(newspeaker);
        this.setState({ speakers: update });
      } else {
        window.alert("You Already Added This speaker!");
      }
    };
    delSpeaker = speaker => {
      var spe = this.state.speakers;
      for (var i = 0; i < spe.length; i++) {
        if (spe[i] === speaker) {
          spe.splice(i, 1);
          i--;
        }
      }
      this.setState({ speakers: spe });
    };
    setname=(new_name)=>{
      this.setState({name:new_name})
  }
  setprice=(new_price)=>{
    this.setState({price:new_price})
}
setabout=(new_about)=>{
  this.setState({about:new_about})
}
setspeakers=(new_speakers)=>{
  this.setState({speakers:new_speakers})
}
settype=(new_type)=>{
  this.setState({type:new_type})
}
handleChange = event => {
  this.setState({chosen:event.target.value})
  console.log(this.state.chosen)
  }
    handleClick=event=>
    {
      event.preventDefault();
      const url= 'http://localhost:4000/api/events/'
      const body= {
        price:this.state.price.value,
        location:this.state.location.value,
        name:this.state.name.value,
        about:this.state.about.value,
        remaining_places:this.state.remaining_places.value,
        speakers:this.state.speakers.value,
        topics:this.state.topics.value,
        type:this.state.type.value,
      }
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
           
          <div class="row">
          <form onSubmit={this.handleClick} class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Name of the Event" state={this.state} id="Event_name" type="text" class="validate" function={this.setname}/>
                <label for="Event_name"></label>
              </div>
              <div class="input-field col s6">
                <input placeholder="price" state={this.state} id="price_id" type="text" class="validate" function={this.setprice}/>
                   <label for="price_id"></label>
              </div>
            </div> 
            <div class="row">
              <div class="input-field col s12">
                <input placeholder="about" id="about_id" state={this.state} type="text" class="validate" function={this.setabout}/>
                <label for="about_id"></label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input placeholder="Type" id="Type_id" state={this.state} type="text" class="validate" function={this.settype}/>
                <label for="Type_id"></label>
              </div>
            </div>
            <div class="row">
            <label for="speakers_id">Speakers: </label>
                  <div class="chips"></div>
                  <div class="chips chips-initial"></div>
                  <div class="chips chips-placeholder"></div>
                  <div class="chips chips-autocomplete"></div> 
                  <div class="chips">
                  <input class="custom-class"/>
                  </div>
              </div>
              <div class="row">
            <label for="topics_id">Topics: </label>
                  <div class="chips"></div>
                  <div class="chips chips-initial"></div>
                  <div class="chips chips-placeholder"></div>
                  <div class="chips chips-autocomplete"></div> 
                  <div class="chips">
                  <input class="custom-class"/>
                  </div>
              </div>

                  <a class='dropdown-trigger btn' href='#' data-target='dropdown1' >Select Location</a>
                  <ul id='dropdown1' class='dropdown-content'  state={this.state} onselect={this.handleChange}>
                  {this.state.location}
                  </ul>
                  <a  class='dropdown-trigger btn' href='#' data-target='dropdown2'>Corresponding Rooms</a>
                  <ul id='dropdown2' class='dropdown-content'>
                  {this.state.sublocation}
                  </ul>
                  <a class='dropdown-trigger btn' href='#' data-target='dropdown3'>Corresponding capacity</a>
                  <ul id='dropdown3' class='dropdown-content'>
                  {this.state.capacity}
                  </ul>


                  <br/>
                  <br/>
                  <div class="row">
                  <div class="col s10 offset-s1 center-align">
                  <button class="btn waves-effect waves-light" type="submit" name="action" >Submit
                    <i class="material-icons right"></i>
                  </button>
                  </div>
                  </div>
          </form>
        </div>
        )
    }
}

ReactDOM.render(<CreateEvent />, 
  document.getElementById('root'));
  
export default (CreateEvent);