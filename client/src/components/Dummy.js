import React, { Component } from 'react';
import Nav, { NavGeneral } from './NavGeneral'

import Main from './Main'
class Dummy  extends Component {
    render() {
        return(
           <div>
               <NavGeneral/>
                <Main/>
          </div>
        );
      
    }
}
export default Dummy;