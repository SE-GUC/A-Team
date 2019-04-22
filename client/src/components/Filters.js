import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'; 
import moment from 'moment'

class filters extends Component{
    constructor(props){
        super(props)
        this.state={
            price:''
        }
    }

    componentDidMount(){

    }
    handlesubmit=event=>{
        event.preventDefault();
        const p= this.state.price
        const url= 'https://ateamse2.herokuapp.com/api/events/getrByPrice'+p
        axios.get(url)
        .then(res=>{

        })
        .catch(error=>{
            console.log(error)
        })
    }
    setprice=(event)=>{
        event.preventDefault();
        this.setState({price:event.target.value})
    }
    render(){
            return(
                <div>
                    <label>Price of the event less than:</label>
                    <input placeholder="Price of the event" state={this.state} id="Event_price" type="text" class="validate" onChange={this.setprice}/>
                </div>
            )
    }

}

export default filters