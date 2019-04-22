import Card from './ViewAllProjectsCard';
import React from 'react';
import axios from 'axios';
import '../../css/TaskCardContainer.css'
class ViewAllProjectsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            elements:[],
            _id:'',
            project_name:'',
            description:'',
            date_Posted:'',
            partner_responsible:'',
            consultancy_agency_assigned:'',
            skills:[],
            consultancy_agency_applicants:[],
            tasks:[],
            loading:true,
            limit:0

        }
    }
    loadMore=(e)=> {
        this.setState({
            limit:this.state.limit+10
        })
    }

    componentDidMount() {
      
        axios.get('https://ateamse2.herokuapp.com/api/project/')
            .then(res => {
                console.log(res.data.data)
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
        if(!this.state.loading) {
            console.log(this.state.elements)
            var elements1=[];
            const projects = this.state.elements
            for(var i = 0;i < this.state.elements.length;i++) {
                if(i <= this.state.limit) {

                elements1.push(<Card value={projects[i]._id}/>)
                }
               
                
            }
            
        //pushed
        return( 
                <div class="container">
                <div class="row">
                <button id = "loadMoreBut" class="waves-effect waves-light btn-small green" type="submit" name="action" onClick={this.loadMore}>Load More</button>
                    <div class="row s2">{elements1}</div>
                </div>
                </div>
        );
        } else {
            return(
                <div class="preloader-wrapper big active">
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
            )
        }
    }

}
export default ViewAllProjectsComponent;