import React, { Component } from 'react';
import  '../css/box_css.css'
export class NumberSlider extends Component {
  constructor(props){
    super(props)
    this.number= React.createRef()
    this.dur=React.createRef()
    console.log(props)
  }
  handlechange=(e)=>{
    this.props.func(e.target.value) // number + days
    console.log(e.target.value)
    console.log('in Slider')
  }
  refresh=()=>{
   var status= document.getElementById('textInput'+this.props.cid).innerText+ ' '+document.getElementById('ddl_date'+this.props.cid).value
   console.log(status)
   this.props.func(status)
  if(this.props.fieldname==='Time Expected'){
    this.setState({time_expected:status})
    console.log('wololo')
  }
  else{
    this.setState({experience_needed:status})
  }

  } 
  render() {
    return (
        <div onChange={this.refresh} className='datepack' >
        <br></br>
           {this.props.fieldname}: <label ref={this.number} id={'textInput'+this.props.cid} className='L34' >1</label>
           
           <select id={'ddl_date'+this.props.cid} refs={this.dur}>
                    <option value="Hour(s)">Hour(s)</option>   
                    <option selected value="Day(s)">Day(s)</option>
                    <option value="Week(s)">Week(s)</option>
                    <option  value="Month(s)">Month(s)</option>
                    <option value="Year(s)">Year(s)</option>
                  </select>
      <br></br>
           <input className='slider' id={'slider'+this.props.cid} type='range' min='1' max='31'  step='1'onChange={
            ()=>{
                document.getElementById('textInput'+this.props.cid).innerText=document.getElementById('slider'+this.props.cid).value
            }} ></input>

                    
       
        </div>
    ) 
  }
}

export default NumberSlider;