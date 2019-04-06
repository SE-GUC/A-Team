import React , {Component} from 'react';

class getrequests extends Component 
{
    render()
    {   return(
        <div>
            <h1>request id: {this.props.request._id}</h1>
            <h1>request organizer: {this.props.request.organizer}</h1>
            <h1>request status: {this.props.request.isAccepted}</h1>
            
        </div>
    )
    }
}
export default getrequests