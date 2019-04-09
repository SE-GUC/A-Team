import React , {Component} from 'react';
import axios from 'axios';
import RequestsTable from './RequestsTable'
import {
    Container
} from "reactstrap";



class PartnerRequesget extends Component{
    state={
        requests:[],
        loading:true
    }
    componentDidMount()
    {    
         axios.get('http://localhost:4000/api/PartnerRequest/geteventrequest')
         .then(response => {
             this.setState({requests:response.data.data})
             this.setState({loading:false})
             console.log(response.data.data);
         })
         .catch(error => {
             console.log(error);
         }) 
    }
    renderLoading() {
        return <div>Requests are fetching from database...</div>
    }
    render() 
    {
        if(this.state.loading){
            this.renderLoading();    
        }
        return(
        <Container>
            <RequestsTable data={this.state.requests}/> 
            {/* <ListGroup>
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
            </ListGroup> */}
        </Container>
        )
    }
}
export default PartnerRequesget


