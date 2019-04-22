import Card from './FilterEvents'
import React from 'react'
import axios from 'axios'
import '../../css/TaskCardContainer.css'
import NavGeneral from '../NavGeneral';
class EventsCardContainer extends React.Component {  

    constructor(props) {
        super(props)
        this.state = {
            elementsofprice:[],
            elementsoftopics:[],
            elementsofspeakers:[],
            elementsofremainingplaces:[],
            elementsoftype:[],
            elements:[],
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
    // componentDidMount() {
    // }
    handlefilterprice(){  
        const pricefiltered= this.state.price_filter
        axios.get('http://localhost:4000/api/events/getByPrice/'+pricefiltered)
        .then(res => {
            // this.setState({events: res.data.data})
            console.log(res.data.data)
            const events=res.data.data
            const elements1=[]
        //     for(var i=0;i<events.length;i++){
        //     console.log(events[i]._id)
        //     elements1.push(events[i]);
        // }

        this.setState({elementsofprice:events})
        console.log(this.state.elementsofprice)
        })
        .catch(err => {
            console.log("oislijdlijSfiz")
        })
        //this.handleallfilters();
        
    }
    async handleallfilters(){
        var elements1=[];var elements2=[];var elements3=[];var elements4=[];var elements5=[];
        var pricefiltered= this.state.price_filter
        if(pricefiltered===''){
            pricefiltered='empty'
        }
        await axios.get('http://localhost:4000/api/events/getByPrice/'+pricefiltered)
        .then(res => {
            // this.setState({events: res.data.data})
            //console.log(res.data.data)
            const events=res.data.data
            elements1=events
        this.setState({elementsofprice:events})
        //console.log(this.state.elementsofprice)
        })
        .catch(err => {
            console.log("oislijdlijSfiz")
        })
        var topicsfiltered= this.state.topics_filter
        if(topicsfiltered===''){
            topicsfiltered='empty'
        }
        await axios.get('http://localhost:4000/api/events/getByTopics/'+topicsfiltered)
        .then(res => {
            // this.setState({events: res.data.data})
            console.log(res.data.data)
            const events=res.data.data
            elements2=events
        this.setState({elementsoftopics:events})
            //this.setState({loading:false})
        })
        .catch(err => {
            console.log("oislijdlijSfiz")
        })
        var speakersfiltered= this.state.speakers_filter
        if(speakersfiltered===''){
            speakersfiltered='empty'
        }
        await axios.get('http://localhost:4000/api/events/getBySpeakers/'+speakersfiltered)
        .then(res => {
            // this.setState({events: res.data.data})
            //console.log(res.data.data)
            const events=res.data.data
            elements3=events
        this.setState({elementsofspeakers:events})
            //this.setState({loading:false})
        })
        .catch(err => {
            console.log("oislijdlijSfiz")
        })
        var typefilter= this.state.typefilter
        if(typefilter===''){
            typefilter='empty'
        }
        await axios.get('http://localhost:4000/api/events/getByType/'+typefilter)
        .then(res => {
            // this.setState({events: res.data.data})
            //console.log(res.data.data)
            const events=res.data.data
            elements4=events
        this.setState({elementsoftype:events})
            //this.setState({loading:false})
        })
        .catch(err => {
            console.log("oislijdlijSfiz")
        })
        var remainingplacesfiltered= this.state.remaining_places_filter
        if(remainingplacesfiltered===''){
            remainingplacesfiltered='empty'
        }
        await axios.get('http://localhost:4000/api/events/getByRemainginPlaces/'+remainingplacesfiltered)
        .then(res => {
            // this.setState({events: res.data.data})
            console.log(res.data.data)
            const events=res.data.data
             elements5=events
        this.setState({elementsofremainingplaces:elements1})
            //this.setState({loading:false})
        })
        .catch(err => {
            console.log("oislijdlijSfiz")
        })
        console.log(elements1)
        console.log(elements2)
        console.log(elements3)
        console.log(elements4)
        console.log(elements5)
        var intersection1=[]
        var intersection2=[]
        var intersection3=[]
        var intersection4=[]
        

        for(var i=0; i<elements1.length;i++){
            for(var j=0; j<elements2.length;j++){
                if(elements1[i]._id===elements2[j]._id && elements1[i].status!=='PENDING_APPROVAL'){
                    intersection1.push(elements1[i])
                }
            }
        }
        for(var i=0; i<elements3.length;i++){
            for(var j=0; j<intersection1.length;j++){
                if(elements3[i]._id===intersection1[j]._id&& elements3[i].status!=='PENDING_APPROVAL'){
                    intersection2.push(elements3[i])
                }
            }
        }
        for(var i=0; i<elements4.length;i++){
            for(var j=0; j<intersection2.length;j++){
                if(elements4[i]._id===intersection2[j]._id&& elements4[i].status!=='PENDING_APPROVAL'){
                    intersection3.push(elements4[i])
                }
            }
        }
        for(var i=0; i<elements5.length;i++){
            for(var j=0; j<intersection3.length;j++){
                if(elements5[i]._id===intersection3[j]._id && elements5[i].status!=='PENDING_APPROVAL'){
                    intersection4.push(elements5[i])
                }
            }
        }
        
        console.log(intersection4)
        var intersection5=[]
        for(var i=0; i<intersection4.length; i++){
            intersection5.push(<Card data ={intersection4[i]}/>)
        }
        this.setState({elements:intersection5})
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
            <div>
                {/* <NavGeneral/> */}
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
              <button class="btn waves-effect waves-light" onClick={()=>this.handleallfilters()}>Filter</button>
            </div> 

                <div class="row">
                    <div class = "row s2">  
                        {this.state.elements}
                    </div>
                </div>
            </div>
            </div>

        );
        }
        
        
        
        }
    

export default EventsCardContainer;