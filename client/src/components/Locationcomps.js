import React, { Component } from 'react';
import LocationList from './LocationList'
import LocationPost from './LocationPost'
import LocationStoryTwo from './LocationStoryTwoTwo'

class Locationcomps  extends Component {
    render() {
        return(
         <div>
             <LocationList/>
             <LocationPost/>
             <LocationStoryTwo/>
             <br></br>
             
         </div>
        );
      
    }
}
export default Locationcomps;