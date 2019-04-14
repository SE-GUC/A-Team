import Card from './FeedbackCard'
import React from 'react'
import axios from 'axios'
import '../../css/yaracard.css'


class FeedbackCardContainer extends React.Component {  

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
        axios.get('https://ateamse2.herokuapp.com/api/users/getEvents/5cae2d049cd95a5754daa7e4')
        // axios.get('https://ateamse2.herokuapp.com/api/events')
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
export default FeedbackCardContainer;