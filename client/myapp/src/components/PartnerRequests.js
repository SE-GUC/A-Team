import React , {Component} from 'react';
import uuid from 'uuid';
import axios from 'axios';
import {
    Container, 
    ListGroup,
    ListGroupItem,
    Button
} from "reactstrap";
import {CSSTransition , TransitionGroup} from 'react-transition-group';



class PartnerRequesget extends Component{
    state={
        requests:[
            {_id: uuid(), organizer:'hoss', isAccepted:false},
            {_id: uuid(), organizer:'hosstany', isAccepted:false}
        ]
    }
    componentDidMount()
    {
        
        //  axios.get('https://ateamse2.herokuapp.com/api/PartnerRequest/geteventrequest')
        //  .then(response => {
        //      console.log(response.data.data);
        //  })
        //  .catch(error => {
        //      console.log(error);
        //  }) 
    }
    render() 
    {
        return(
        <Container>
            <Button color="primary" > 
                Get requests
            </Button>
            <ListGroup>
                <TransitionGroup>
                    {this.state.requests.map(({_id,organizer,isAccepted}) => (
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button className="remove-btn" color="danger" size ="sm" onClick={() => this.setState(state => ({
                                        requests: state.requests.filter(request => request._id !== _id)
                                    }))}>
                                    &times;
                                </Button>
                                uuid is{_id} And the organizer is {organizer}
                            </ListGroupItem>
                        </CSSTransition>
                     ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
        )
    }
}
export default PartnerRequesget


