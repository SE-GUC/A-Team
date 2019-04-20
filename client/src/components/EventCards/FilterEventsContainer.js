import Card from './FilterEvents'
import React from 'react'
import axios from 'axios'
import '../../css/TaskCardContainer.css'
class EventsCardContainer extends React.Component {  

    constructor(props) {
        super(props)
        this.state = {
            elements:[],
            elements1:[],
            events:[],
            remaining_places:'',
            name:'',
            location:'',
            about:'',
            price:[],
            speakers:[],
            topics:[],
            type:[],
            partner_initiated:'',
            loading: true,
            price_filter:'',
            remaining_places_filter:'',
            typefilter:'',
            topics_filter:'',
            speakers_filter:''
        }
        this.handlefilterprice=this.handlefilterprice.bind(this)
    }
    componentDidMount() {
        // axios.get('http://localhost:4000/api/events/')
        //     .then(res => {
        //         // this.setState({events: res.data.data})
        //         this.setState({elements:res.data.data})
        //         this.setState({loading:false})
        //     })
        //     .catch(err => {
        //         console.log("oislijdlijSfiz")
        //     })
        // const p= this.state.price_filter
        // axios.get('http://localhost:4000/api/events/FilterByPrice/'+p)
        // .then(res => {
        //     // this.setState({events: res.data.data})
        //     console.log(res.data.data)
        //     this.setState({elements:res.data})
        //     const events=this.state.elements
        //     for(var i=0;i<this.state.elements.length;i++){
        //     console.log(events[i]._id)
        //     this.state.elements1.push(<Card data ={events[i]}/>);
        // }
        //     //this.setState({loading:false})
        // })
        // .catch(err => {
        //     console.log("oislijdlijSfiz")
        // })
        
    }
    handlefilterprice(){  
        const p= this.state.price_filter
        axios.get('http://localhost:4000/api/events/getByPrice/'+p)
        .then(res => {
            // this.setState({events: res.data.data})
            console.log(res.data.data)
            const events=res.data.data
            const elements1=[]
            for(var i=0;i<events.length;i++){
            console.log(events[i]._id)
            elements1.push(<Card data ={events[i]}/>);
        }
        this.setState({elements:elements1})
            //this.setState({loading:false})
        })
        .catch(err => {
            console.log("oislijdlijSfiz")
        })
        
    }
    handlefiltertopics(){  
        const p= this.state.topics_filter
        axios.get('http://localhost:4000/api/events/getByTopics/'+p)
        .then(res => {
            // this.setState({events: res.data.data})
            console.log(res.data.data)
            this.setState({elements:res.data})
            const events=this.state.elements
            for(var i=0;i<this.state.elements.length;i++){
            console.log(events[i]._id)
            this.state.elements1.push(<Card data ={events[i]}/>);
        }
            //this.setState({loading:false})
        })
        .catch(err => {
            console.log("oislijdlijSfiz")
        })
        
    }
    handlefilterspeakers(){  
        const p= this.state.speakers_filter
        axios.get('http://localhost:4000/api/events/getBySpeakers/'+p)
        .then(res => {
            // this.setState({events: res.data.data})
            console.log(res.data.data)
            const events=res.data.data
            for(var i=0;i<events.length;i++){
            console.log(events[i]._id)
            this.state.elements1.push(<Card data ={events[i]}/>);
        }
            //this.setState({loading:false})
        })
        .catch(err => {
            console.log("oislijdlijSfiz")
        })
        
    }
    handlefilterspeakers(){  
        const p= this.state.remaining_places_filter
        axios.get('http://localhost:4000/api/events/getByRemainginPlaces/'+p)
        .then(res => {
            // this.setState({events: res.data.data})
            console.log(res.data.data)
            this.setState({elements:res.data})
            const events=this.state.elements
            for(var i=0;i<this.state.elements.length;i++){
            console.log(events[i]._id)
            this.state.elements1.push(<Card data ={events[i]}/>);
        }
            //this.setState({loading:false})
        })
        .catch(err => {
            console.log("oislijdlijSfiz")
        })
        
    }
    setprice=(event)=>{
        event.preventDefault();
        this.setState({price_filter:event.target.value})
    }
    setremaining_places_filter=(event)=>{
        event.preventDefault();
        this.setState({remaining_places_filter:event.target.value})
    }
    settype_filter=(event)=>{
        event.preventDefault();
        this.setState({typefilter:event.target.value})
    }
    settopics_filter=(event)=>{
        event.preventDefault();
        this.setState({topics_filter:event.target.value})
    } 
    setspeakers_filter=(event)=>{
        event.preventDefault();
        this.setState({speakers_filter:event.target.value})
    }

    render() {  
        
        
        return (
            
            <div class="container"> 
                <div class="row">
              <div class="input-field col s6">
                <input placeholder="Price less than:" state={this.state} id="Event_price_filter" type="text" class="validate" onChange={this.setprice}/>
                
              </div>
              <div class="input-field col s6">
                <input placeholder="Remaining Places less than:" state={this.state} id="remaining_places_filter" type="text" class="validate" onChange={this.setremaining_places_filter}/>
                   
              </div>
              <div class="input-field col s6">
                <input placeholder="Type:" state={this.state} id="type_filter" type="text" class="validate" onChange={this.typefilter}/>
              </div>
              <div class="input-field col s6">
                <input placeholder="Topic:" state={this.state} id="topic_filter" type="text" class="validate" onChange={this.topics_filter}/>
              </div>
              <div class="input-field col s6">
                <input placeholder="Speaker:" state={this.state} id="speaker_filter" type="text" class="validate" onChange={this.speakers_filter}/>
              </div>
              <button class="btn waves-effect waves-light" onClick={this.handlefilterprice}>Filter</button>
            </div> 

                <div class="row">
                    <div class = "row s2">  
                        {this.state.elements}
                    </div>
                </div>
            </div>
        );
        }
        
        
        
        }
    

export default EventsCardContainer;