import Card from './ApplicationCard'
import React from 'react'
import axios from 'axios'
import '../../css/TaskCardContainer.css'

class ApplicaitonCardContainer extends React.Component {  

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
            loading: true,
            limit:0
        }
    }
    loadMore=(e)=> {
        this.setState({
            limit:this.state.limit+2
        })
    }
    componentDidMount() {
        axios('http://localhost:4000/api/events/geteligible', {
            method: 'GET',
            headers: {
              'authorization': localStorage.getItem('token')
            }
          })
          .then(res => {
            console.log(res)
            this.setState({elements:res.data.data})
            this.setState({loading:false})
            })
          .catch(err => { 
              console.log(err) 
            })
    }

    render() {  
        if(!this.state.loading) {
        var elements1=[];
        const events=this.state.elements
        for(var i=0;i<this.state.elements.length;i++){
            console.log(events[i]._id)
            if(i <= this.state.limit) {
            elements1.push(<Card data ={events[i]}/>);
            }
        }
        return (
            <div class="container">
                <div class="row">
                    <div class = "row s2">  
                        {elements1}
                        <button class="waves-effect waves-light btn-small  green darken-3" type="submit" name="action" onClick={this.loadMore}>Load More</button>

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
export default ApplicaitonCardContainer;