import Card from './TaskCard';
import React from 'react';
import axios from 'axios'
import '../css/TaskCardContainer.css'
class TaskCardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            elements: [],
            name: '',
            description: '',
            monetary_compensation: '',
            status: '',
            skills: [],
            _id: '',
            time_of_post: '',
            time_expected: '',
            level_of_commitment: '',
            experience_needed: '',
            loading: true,
            getAllTasks:false,
            loadMore:false,
            limit: 0
        }
    }
    getTasks=(e)=>{
        console.log(this.state.getAllTasks)
        this.setState({
            getAllTasks:true
        })
        console.log(this.state.getAllTasks)
    }
    loadMore=(e)=> {
        this.setState({
            limit:this.state.limit+2
        })
    }
    componentDidMount() {
       
        axios.get('http://localhost:4000/api/tasks/read/')
            .then(res => {
                this.setState({
                    elements: res.data.data
                })
                this.setState({
                    loading: false
                })
                
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        if(this.state.getAllTasks === false) {
            return(
            <div>
            <button class="waves-effect waves-light btn-small" type="submit" name="action" onClick={this.getTasks}>View All Ta</button>
            </div>
            )
        }
        if(!this.state.loading) {
            var elements1=[];
            const tasks = this.state.elements
            for(var i = 0;i < this.state.elements.length;i++) {
                console.log(tasks[i]._id)
                if(i <= this.state.limit) {
                elements1.push(<Card value={tasks[i]._id}/>)
                }
               
                
            }
            
        //pushed
        if(this.state.getAllTasks) {
        return( 
                <div class="container">
                    <div class="row">
                        <div class="row s2">{elements1}</div>
                        <button class="waves-effect waves-light btn-small" type="submit" name="action" onClick={this.loadMore}>Load More</button>
                    </div>
                </div>
        );
        }
        } else {
            return(
                <div>
                    Loading...
                </div>
            )
        }
    }

}
export default TaskCardContainer;