import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import axios from "axios";
import M from "materialize-css";
import Banner from '../../media/banner.jpg'
import Profile from '../../media/profilepic.png'
import SkillChips from '../Admin/SkillChips'

class FeedbackCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      id: "",
      remaining_places: "",
      name: "",
      location: "",
      about: "",
      price: [],
      speakers: [],
      topics: [],
      type: [],
      partner_initiated: "",
      message: "",
      range: 5,
      submitState: false,
      class1:"fa fa-star checked",
      class2:"fa fa-star checked",
      class3:"fa fa-star checked",
      class4:"fa fa-star checked",
      class5:"fa fa-star checked",
      checked: {
        transition: "none",
        opacity: "1",
        background: "",
        color: "yellow",
        textDecoration: "none"
      },
      owner:{
           name:'',
           email:'',
           phone:'',
           username:'',
           field_of_work:[],
           interests:[]
      }
    };
  }

  async componentDidMount() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, true);
    var uuid=''
    console.log(this.props.data);
    var loctaionid=''
    this.setState({ id: this.props.data });
    const url = "https://ateamse2.herokuapp.com/api/events/getid/" + this.props.data;
    console.log(url);
    await axios
      .get(url)
      .then(res => {
        this.setState({ name: res.data.data.name });
        this.setState({ remaining_places: res.data.data.remaining_places });
        loctaionid=res.data.data.location
        this.setState({ about: res.data.data.about });
        this.setState({ price: res.data.data.price });
        this.setState({ speakers: res.data.data.speakers });
        this.setState({ topics: res.data.data.topics });
        this.setState({ type: res.data.data.type });
        this.setState({ partner_initiated: res.data.data.partner_initiated });
        uuid=res.data.data.partner_initiated
      })
      .catch(err => {
        console.log(err);
      });
      await axios.get('https://ateamse2.herokuapp.com/api/locations/'+loctaionid)
      .then(res=>{
          console.log(res)
          var c= ""+res.data.data.title+", "+res.data.data.subtitle
          this.setState({location:c})
      })
      .catch(err=>{
          console.log(err)
      })
      const partnerURL='https://ateamse2.herokuapp.com/api/users/'+ uuid  
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

  sbmtbtn() {
    this.setState({ submitState: true });
    const url =
      "https://ateamse2.herokuapp.com/api/events/" + this.state.id + "/feedback";

    axios({
      method: "POST",
      url: url,
      headers: {
        authorization: localStorage.getItem("token")
      },
      data: {
        comment: this.state.message,
        rate: this.state.range
      }
    }).then(res => {
      console.log("geh hena?");
      console.log(res);
    });
  }

  
  change1(){
    this.setState({class1:"fa fa-star checked"})
    this.setState({class2:"fa fa-star"})
    this.setState({class3:"fa fa-star"})
    this.setState({class4:"fa fa-star"})
    this.setState({class5:"fa fa-star"})
    this.setState({rate:1})
    
    
  }
  
  change2(){
    this.setState({class1:"fa fa-star checked"})
    this.setState({class2:"fa fa-star checked"})
    this.setState({class3:"fa fa-star"})
    this.setState({class4:"fa fa-star"})
    this.setState({class5:"fa fa-star"})
    this.setState({rate:2})
    
    
  }
  
  change3(){
    this.setState({class1:"fa fa-star checked"})
    this.setState({class2:"fa fa-star checked"})
    this.setState({class3:"fa fa-star checked"})
    this.setState({class4:"fa fa-star"})
    this.setState({class5:"fa fa-star"})
    this.setState({rate:3})
    
    
  }
  
  change4(){
    this.setState({class1:"fa fa-star checked"})
    this.setState({class2:"fa fa-star checked"})
    this.setState({class3:"fa fa-star checked"})
    this.setState({class4:"fa fa-star checked"})
    this.setState({class5:"fa fa-star"})
    this.setState({rate:4})
    
    
  }
  
  change5(){
    this.setState({class1:"fa fa-star checked"})
    this.setState({class2:"fa fa-star checked"})
    this.setState({class3:"fa fa-star checked"})
    this.setState({class4:"fa fa-star checked"})
    this.setState({class5:"fa fa-star checked"})
    this.setState({rate:5})
    
    
  }
  handleChangeText = event => {
    this.setState({ message: event.target.value });
  };
  handleRange = event => {
    this.setState({ range: event.target.value });
  };

  render() {
    return (
      <div>
        <br />
        <br />
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

        <div class="">
          <div class="col s12 m6">
            <div class="card blue-grey lighten-2" style={{paddingBottom:'75px'}}>
              <div class="card-content white-text" id="cardContent">
                <div class="card__meta">
                  <time>{}</time>
                </div>
                <span class="card-title">{this.state.name}</span>
                <p>__________________________________</p>
                {/*
                              <p><b>Remaining Places:</b> {this.state.remaining_places}</p> */}
                                <p>
                  <b>Posted By:</b> <a data-target="slide-out" class="sidenav-trigger"><i style={{padding:'2px',marginTop:'5px',color:'black'}} class="material-icons tiny">account_circle</i>{this.state.owner.name}</a>
                </p>
                <p>
                  <b>Location:</b> {this.state.location}
                </p>
                <p>
                  <b>About:</b> {this.state.about}
                </p>
                {/*
                              <p><b>About:</b> {this.state.events}</p> */}
                <p>
                  <b>Price:</b> {this.state.price}£
                </p>
                <p>
                  <b>Speakers:</b> {this.state.speakers}
                </p>
                <p>
                  <b>Topics:</b> {this.state.topics}
                </p>
                <p>
                  <b>Type:</b> {this.state.type}
                </p>
                <p>
                  <b>Rating: </b>
                  <span onClick={()=>this.change1()} class={this.state.class1} />
                  <span onClick={()=>this.change2()} class={this.state.class2} />
                  <span onClick={()=>this.change3()} class={this.state.class3} />
                  <span onClick={()=>this.change4()} class={this.state.class4} />
                  <span onClick={()=>this.change5()} class={this.state.class5} />
                  
                </p>
                <textarea
                  onChange={this.handleChangeText}
                  placeholder="Enter Feedback"
                  id="feedback"
                  type="text"
                  class="materialize-textarea text-white"
                />
                <center>
                  <a
                    onClick={() => this.sbmtbtn()}
                    class="btn waves-effect waves-light btn-small green darken-2"
                  >
                    Submit
                  </a>
                  <p></p>
                </center>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedbackCard;
