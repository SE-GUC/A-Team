import Card from './EventPartnerFeedbackCard'
import React from 'react'
import axios from 'axios'
import '../../css/TaskCardContainer.css'
class EventsCardContainer extends React.Component {  

    constructor(props) {
        super(props)
        this.state = {
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
            loading: true
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/api/users/getCreatedEvents/5cae2d049cd95a5754daa7e4')
        .then(res => {
            // this.setState({events: res.data.data})
            this.setState({elements:res.data.data})
            this.setState({loading:false})
        })
        .catch(err => {
            console.log("oislijdlijSfiz")
        })
    }
    render() {  
        if(!this.state.loading) {
        var elements1=[];
        const events=this.state.elements
        for(var i=0;i<this.state.elements.length;i++){
            console.log(events[i]._id)
            elements1.push(<Card data ={events[i]}/>);
        }
        return (
            <div class="container">
                <div class="row">
                    <div class = "row s2">  
                        {elements1}
                    </div>
                </div>
            </div>
        );
        }
        else
        {
            return (
                <div>
                    Hello
                </div>
            )
        }
    }
}
export default EventsCardContainer;