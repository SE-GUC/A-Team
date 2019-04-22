import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import axios from "axios";

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
      }
    };
  }

  async componentDidMount() {
    console.log(this.props.data);
    var loctaionid=''
    this.setState({ id: this.props.data });
    const url = "http://localhost:4000/api/events/getid/" + this.props.data;
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
      })
      .catch(err => {
        console.log(err);
      });
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

  sbmtbtn() {
    this.setState({ submitState: true });
    const url =
      "http://localhost:4000/api/events/" + this.state.id + "/feedback";

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
        <div class="">
          <div class="col s12 m6">
            <div class="card blue-grey lighten-2">
              <div class="card-content white-text" id="cardContent">
                <div class="card__meta">
                  <time>{}</time>
                </div>
                <span class="card-title">{this.state.name}</span>
                <p>___________________________________</p>
                {/*
                              <p><b>Remaining Places:</b> {this.state.remaining_places}</p> */}
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
                  {" "}
                  <a
                    onClick={() => this.sbmtbtn()}
                    class="btn waves-effect waves-light btn-small green darken-2"
                  >
                    Submit
                  </a>
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
