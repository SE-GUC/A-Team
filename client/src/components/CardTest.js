import React, {Component} from 'react';
import axios from 'axios';
// import 'materialize-css/dist/css/materialize.min.css';
import '../css/CardTest.css'

const dumb = {
    id:1,
    name:"manga"
}
class CardTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks:[],
            name:'',
            description:'',
            monetary_compensation:'',
            status:'',
            skills:[],
            _id:'',
            time_of_post:'',
            time_expected:'',
            level_of_commitment:'',
            experience_needed:''



        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/api/tasks/read/')
            .then(res => {
                this.setState({tasks:res.data.data})
                this.setState({name:res.data.data[0].name})
                this.setState({_id:res.data.data[0]._id})
                this.setState({description:res.data.data[0].description})
                this.setState({monetary_compensation:res.data.data[0].monetary_compensation})
                this.setState({status:res.data.data[0].status})
                this.setState({skills:res.data.data[0].skills})
                this.setState({time_of_post:res.data.data[0].time_of_post})
                this.setState({time_expected:res.data.data[0].time_expected})
                this.setState({level_of_commitment:res.data.data[0].level_of_comitment})
                this.setState({experience_needed:res.data.data[0].experience_needed})





                

                console.log(this.state.tasks[0])
                
            })
            .catch(err => {
                console.log("oislijdlijSfiz")
            })
            console.log(this.state.name)

    }

    render() {
        return (
            <div>

    <div class="card middle">
        <div class="front">
            <img src="https://dummyimage.com/701x876/000/fff&text=Task" alt="" />
        </div>
        <div class="back">
            <div class="back-content middle">
                <br/>
                <br/>

                <h2>{this.state.name}</h2>
                <p><b>Description:</b> {this.state.description}</p>
                <p><b>Monetary Compensation:</b> {this.state.monetary_compensation}</p>
                <p><b>Status:</b> {this.state.status}</p>
                <p><b>Skills:</b> {this.state.skills}</p>
                <p><b>Time Posted:</b> {this.state.time_of_post}</p>
                <p><b>Expected Time:</b> {this.state.time_expected}</p>
                <p><b>Commtment Level Required:</b> {this.state.level_of_commitment}</p>
                <p><b>Experience Needed:</b> {this.state.experience_needed}</p>
                <div class="sm">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>

</div>
			
        )
    }
}



export default CardTest;