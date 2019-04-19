import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Recommend extends Component {
    state = {
        id: "",
        result: []
      };
    
      handleChange = event => {
        this.setState({ id: event.target.value });
      };
      handleSubmit = event => {
        event.preventDefault(); //prevents page from reloading
        const tasking = {
          id: this.state.id
        };
        const url = "http://localhost:4000/api/tasks/recommend/" + tasking.id;
        axios.get(url).then(res => {
          this.setState({ result: res.data.data });
          console.log(res.data.data);
        });
      };

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
            
            
                render() {
                    // if(this.state.loading) {
                    //     return this.renderLoading()
                    // }
                    return(
                        <form onSubmit={this.handleSubmit}>
                            <label for="skills">
                               <h1>Recommend tasks</h1> 
                                <input placeholder="Member id" type="text" name="name" onChange={this.handleChange} />
                            </label>
                            <p></p>
                            <button type="submit" className="waves-effect waves-light btn cyan darken-3">Get recommendations</button>
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
