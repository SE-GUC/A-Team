import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import axios from 'axios';
import RecommendStyle from '../css/RecommendStyle.css'


class AssignMember extends Component {
    state = {
        member_id: "",
        id: ""
      };
    
      handleChange = event => {
        this.setState({ member_id: event.target.value });
      };
      handleSubmit = event => {
        event.preventDefault(); //prevents page from reloading
        const tasking = {
          id: this.state.id
        };
        return axios({
            method:'post',
            url: 'http://localhost:4000/api/assignMember/' +tasking.id,
            headers: {'Content-Type': 'application/json'},
            data: {
                member_id: this.state.member_id
      }
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
            
            
                render() {
                    // if(this.state.loading) {
                    //     return this.renderLoading()
                    // }
                    return(
                        <form onSubmit={this.handleSubmit}>
                            <label for="skills">
                               <h1>Assign member</h1> 
                                <input placeholder="Member id" type="text" name="name" onChange={this.handleChange} />
                            </label>
                            <p></p>
                            <button type="submit">Assign</button>
                            <ul>
                            <li>
                                {this.state.result}
                            </li>
                        </ul>
                        </form>
                        
                    )
                }
            }
            ReactDOM.render(
                <AssignMember subreddit="reactjs"/>,
                document.getElementById('root')
            )
 
           
export default AssignMember; 
