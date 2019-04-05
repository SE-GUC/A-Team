import React, { Component } from 'react';
//import Formdetails from './Formdetails'
import TaskBasicField from './TaskBasicField'
import TaskDatePack from './TaskDatePack'
import TaskCommitment from './TaskCommitment'
import axios from 'axios'
import '../'


export class Form extends Component {
    
    state={
            name: '',   
            monetary_compensation: '0',
            price:'1',
            is_assigned:'',
            time_expected:'1 Day(s)',
            level_of_comitment:'Moderate',
            experience_needed:'1 Day(s)',
            description:"",
            skills:[]
           // skills:['Mongo','Express','React','Node']
    }
    //Will be used Later on
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
    //Setters
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
    setExperience=(e)=>{
        this.setState({experience_needed:e})
    }
    //Result
    async handleSubmit(e){
        e.preventDefault();
        try{
            
        const response= await axios({
            method:'post',
            url: 'http://localhost:4000/api/tasks/add/',
            headers: {'Content-Type': 'application/json'},
            data: {
                name: this.state.name,
                monetary_compensation: this.state.monetary_compensation,
                price: this.state.price,
                time_expected: this.state.time_expected,
                level_of_comitment:this.state.level_of_comitment,
                experience_needed:this.state.experience_needed,
                description:this.state.description,
                skills:this.state.skills
            }   })
            console.log(response)
        }
        catch(error){
            
        }
            
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
    renderTasks() {
        if(this.state.error) {
            return this.renderError();
        }
        return(
        <h1>The Bluetooth devive is knktec suksuly</h1>
        )
    };

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
                <tr><TaskDatePack id='2' fieldname="Experience required"  func={this.setExperience} /></tr>
             
            </table>
            <input type='submit' value='Submit'/>
        </form>
    )
       
      
    
  }
}

export default Form;