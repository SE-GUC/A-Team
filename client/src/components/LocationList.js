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
        return <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
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
            <LocationTable data={this.state.locations}/> {
            }
            
            </div>

           
        )



        
















  
    }
}
ReactDOM.render(
    <LocationList subreddit="reactjs"/>,
    document.getElementById('root')
)

export default LocationList;