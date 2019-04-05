import React, { Component } from 'react';
//import Formdetails from './Formdetails'
import TaskBasicField from './TaskBasicField'
import TaskDatePack from './TaskDatePack'
import TaskCommitment from './TaskCommitment'


export class Form extends Component {
    data={
        name: '',   
        time_of_post:'',
        time_of_review:"",
        monetary_compensation: '',
        price:'',
        is_assigned:'',
        time_expected:"",
        level_of_comitment:'',
        is_reviewed:'',
        experience_needed:'',
        description:"",
        skills:[],
        response_from_admin:''
    }
    state={
            name: '',   
            time_of_post:'',
            time_of_review:"",
            monetary_compensation: '',
            price:'',
            is_assigned:'',
            time_expected:"",
            level_of_comitment:'',
            is_reviewed:'',
            experience_needed:'',
            description:"",
            skills:[],
            response_from_admin:''
           // skills:['Mongo','Express','React','Node']
    }
    addSkill=(newskill)=>{
        var update=this.state.skills.push(newskill)
        this.setState({skills:update})
    }
    delSkill=(skill)=>{
        var uskills=this.state.skills
        for(var i=0;i<uskills.length;i++){
            if(uskills[i]===skill){
            uskills.splice(i,1)
            i--;
            }
        }
        this.setState({skills:uskills})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log('holla senior')
    }
    setname=(new_name)=>{
        this.setState({name:new_name})
    }
    setDescription=(nd)=>{
        this.setState({description:nd})
    }
    setCompensation=(c)=>{
        this.setState({monetary_compensation:c})
    }
    setPrice=(p)=>{
        this.setState({price:p})
    }
    setCommitment=(c)=>{
        this.setState({level_of_comitment:c})
    }
    setTime=(t)=>{
        this.setState({time_expected:t})
    }
  render() {
      //console.log(this.props.forms)
      
    return(
        <form onSubmit={this.handleSubmit}>
            <h1>Task Details:</h1>
            <table>
                <tr><TaskBasicField state={this.state} fieldname='Task Name' type='text' func={this.setname}/> {/*Could Add placeholder to make it modern*/}</tr>
                <tr><TaskDatePack id='1' fieldname='Time Expected' func={this.setTime}/></tr>
                <tr><TaskBasicField fieldname='Task Description' type='bigtext' func={this.setDescription}/></tr>
            </table>
           
           <h1>Pricing:</h1>
           <table>
               <tr><TaskBasicField fieldname='Price' type='number' func={this.setPrice}/> {/*Could Add placeholder to make it modern*/}</tr>
               <tr> <TaskBasicField fieldname='Compensation' type='number' func={this.setCompensation}/> {/*Could Add Info Overlap here*/}</tr>
           </table>
           
           <h1>Requierements:</h1>
            <table>
                <tr><TaskCommitment func={this.setCommitment} /></tr>
                <tr><TaskDatePack id='2' fieldname="Experience required"/></tr>
             
            </table>
            <br></br>
            <input type='submit' value='submit'/>
           


    
        </form>
    )
       
      
    
  }
}

export default Form;