import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Table from './Table'



class EventList extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            events:[],
            loading:true,
            error:null
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:4000/api/events`)
            .then(res => {
                console.log(res.data.data)
                this.setState({events: res.data.data});
                this.setState({loading: false})
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: err
                });
            });

    }
    renderLoading() {
        return <div>Events are fetching from database...</div>
    }
    renderError() {
        return (
            <div>
                Ew3a, : {this.state.error.message}
            </div>
        )
    }
    render() {
        if(this.state.loading) {
            return this.renderLoading()
        }
        else
        return(
            <div className="m">
            <Table data={this.state.events}/>             
            </div>

           
        )
    }
}
ReactDOM.render(
    <EventList subreddit="reactjs"/>,
    document.getElementById('root')
)

export default EventList;