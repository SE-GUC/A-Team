import React, { Component } from 'react';
//import Formdetails from './Formdetails'
import TaskBasicField from './TaskBasicField'
import TaskDatePack from './TaskDatePack'
import TaskCommitment from './TaskCommitment'
import Skills from './Skills'
import axios from 'axios'
import  '../css/box_css.css'


export class Form extends Component {
    
    state={
            name: '',   
            monetary_compensation: '0',
            price:'1',
            is_assigned:'',
            partner_id:'5cacccc7b62d5618bc0fff21' , //Assuming Session
            time_expected:'1 Day(s)',
            level_of_comitment:'Moderate',
            experience_needed:'1 Day(s)',
            description:"",
            skills:['Hi Ammar'],
            all_skills:[]
           // skills:['Mongo','Express','React','Node']
    }
    //Will be used Later on
    addSkill=(newskill)=>{
        var update=this.state.skills
        update.push(newskill)
        
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
   
    handleSubmit=(e)=>{
        e.preventDefault();
        try{
            const data={
                 name: this.state.name,
                 monetary_compensation: this.state.monetary_compensation,
                 price: this.state.price,
                 time_expected : this.state.time_expected,
                 level_of_comitment :this.state.level_of_comitment,
                 experience_needed :this.state.experience_needed,
                 description :this.state.description,
                 skills:this.state.skills
            }
          axios.post('http://localhost:4000/api/tasks/add',data)
          .then(res => {
            console.log(res);
            window.alert("Posted Task ");
            return res.data
          })
        }
        catch(error){
            console.log('error')
        }
            
    }
    getSkillFromDB=()=>{
        try{
            axios.get('http://localhost:4000/api/skills/getSkillCollection')
            .then(res => {
              this.setState({all_skills:res.data})
              return res.data
            })
          }
          catch(error){
              console.log('error')
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
    
    return(
        <form onSubmit={this.handleSubmit} className='form' >
                 <div className='fill'>
                 <h1>Task Details:</h1>
                 <div className='TaskDetails'>
                <TaskBasicField className='text' state={this.state} fieldname='Task Name' type='text' func={this.setname}/> 
                <TaskDatePack id='1' fieldname='Time Expected' func={this.setTime}/>
                <TaskBasicField fieldname='Task Description' type='bigtext' func={this.setDescription}/>
                </div>
                <div className='Pricing'>
                <h1>Pricing:</h1>
                <tr>
                    <td><TaskBasicField classname='money' fieldname='Compensation' type='number' func={this.setCompensation}/></td>
                    <td>Your Price Offer for the Task</td>
                </tr>
                 {/*Could Add placeholder to make it modern*/}
                 {/*Could Add Info Overlap here*/}
                </div>
               <div className='Requirements'>
               <h1>Requierements:</h1>
                <TaskCommitment func={this.setCommitment} />
                <TaskDatePack id='2' fieldname="Experience required"  func={this.setExperience} />
                <br></br>
                {this.getSkillFromDB()}
                <Skills addSkill={this.addSkill} delSkill={this.delSkill} skills={this.state.skills} state={this.state} col={this.state.all_skills}/>
               </div>
            
            <input type='submit' value='Submit' className='button1' state={this.state}/>
                 </div>
                 
        </form>
        
    )
       
      
    
  }
}

export default Form;