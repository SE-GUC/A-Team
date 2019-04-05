import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import axios from 'axios';
import RecommendStyle from '../css/RecommendStyle.css'

class Recommend extends Component {

    constructor(props) {
        super(props)
        this.state = {
            skills:["Wraith","Octane","Bloodhound"],
            loading:true,
            error:null,
            result:''
        }
    }

    // onChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value })
    // }
    handleChange = (e) => {
        // this.setState({ [e.target.name]: e.target.value});
        this.setState({
            skills:e.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.skills);


        

        


        // const url = 'http://localhost:4000/api/tasks/recommend/'
        //             const m = axios({
        //                 method:'get',
        //                 url: 'http://localhost:4000/api/tasks/recommend',
        //                 headers: {'Content-Type': 'application/json'},
        //                 data:{
        //                     skills: this.state.skills
        //                 }
                        
        //             }).then(res => {
        //                 console.log(res.data)
        //                 this.setState({result:res.data.data})
        //             }).catch(error => console.log(error))
        //             console.log(this.state.result)
                    // axios.get({
                    //     method:"get",
                    //     url: 'http://localhost:4000/api/tasks/recommend/',
                    //     headers: {'Content-Type': 'application/json'},

                    //     data: {
                    //         skills:this.state.skills
                    //     }
                    // }).then(res=> console.log(res.data))
                };
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
                                Skills:
                                <input placeholder="Enter available skills" type="text" name="name" onChange={this.handleChange} />
                            </label>
                            
                            <button type="submit">Get recommendations</button>
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
                <Recommend subreddit="reactjs"/>,
                document.getElementById('root')
            )
 
           
export default Recommend; 
