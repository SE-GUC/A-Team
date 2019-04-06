import React , {Component} from 'react';
import uuid from 'uuid';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
    Container, 
    ListGroup,
    ListGroupItem,
    Button
} from "reactstrap";
import {CSSTransition , TransitionGroup} from 'react-transition-group';
import test2 from './test2'

class PartnerRequestget extends Component{
    state={
        requests:[]
    }
    componentDidMount()
    {
        axios.get('https://ateamse2.herokuapp.com/api/PartnerRequest/geteventrequest')
        .then(response => {
            console.log(response)
            this.setState({requests: response.data.data})
        })
        .catch(error => {
            console.log(error);
        }) 
    }
    render()
    {
        return this.state.requests.map((request) => (
            <test2 key={request._id} request={request}/>
        ))
    }
}
ReactDOM.render(<PartnerRequestget />, document.getElementById('root'));


export default PartnerRequestget