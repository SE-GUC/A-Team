import Card from './ViewPendingEvents';
import React from 'react';
import axios from 'axios';
import '../../css/TaskCardContainer.css'

class ViewPendingEventsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            elements:[],
            _id:'',
            remaining_places:'',
            name:'',
            location:'',
            about:'',
            price:[],
            speakers:[],
            topics:[],
            type:[],
            partner_initiated:'',
            status:'',
            attendees:[],
            time_of_edit:'',
            feedbacks:[],
            responses_from_admin:[],
            applicants:[],
            loading:true

        }
    }

    componentDidMount() {
      
        axios.get('http://localhost:4000/api/events/getPending/')
            .then(res => {
                console.log(res.data.data)
                this.setState({
                    elements: res.data.data
                })
                this.setState({
                    loading: false
                })
            })
            .catch(err => {
                console.log(err)
            })


    }


    render() {
        if(!this.state.loading) {
            console.log(this.state.elements)
            var elements1=[];
            const events = this.state.elements
            for(var i = 0;i < this.state.elements.length;i++) {
                elements1.push(<Card value={events[i]._id}/>)
               
                
            }
            
        //pushed
        return( 
                <div class="container">
                <div class="row">
                    <div class="row s2">{elements1}</div>
                </div>
                </div>
        );
        } else {
            return(
                <div>
                    Loading...
                </div>
            )
        }
    }

}
export default ViewPendingEventsComponent;