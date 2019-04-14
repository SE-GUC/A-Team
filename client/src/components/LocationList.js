import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import LocationTable from './LocationTable';


class LocationList extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            locations:[],
            loading:true,
            error:null
        }
    }
    componentDidMount() {
        axios.get(`https://ateamse2.herokuapp.com/api/locations/`)
            .then(res => {
                console.log(res)
                this.setState({locations: res.data.data});
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
        return <div>Loading...</div>
    }
    renderError() {
        return (
            <div>
                Ooops, : {this.state.error.message}
            </div>
        )
    }
    renderTasks() {
        if(this.state.error) {
            return this.renderError();
        }
        return(
        <ul>
            {this.state.locations.map(location =>
                <li key={location._id}>{location.title}</li>
                )}
        </ul>
        )
    };

    
    render() {
        if(this.state.loading) {
            return this.renderLoading()
        }
        return(
            <div className="m">
            
            <p className="Table-header" align="center">Locations</p>
            <LocationTable data={this.state.locations}/> {/*
            As you can see, and bas bdkhl guwa hena el array el gebto men TaskList, mgm3 hena?ahh ana i mean fel app.cs i dont know how to viok stoepw
            */}
            
            </div>

           
        )



        
















  
    }
}
ReactDOM.render(
    <LocationList subreddit="reactjs"/>,
    document.getElementById('root')
)

export default LocationList;