import React, { Component } from "react";
import axios from "axios";
import SkillItem from './SkillItem'
import SkillChips from './SkillChips'
import M from "materialize-css";
export class SkillController extends Component {
  state = {
    Skill: "",
    getRes:[]
  };

  onChange = e => {
    this.setState({ Skill: e.target.value });
  };
  AddSkill = e => {
    e.preventDefault();
    const data = {
      skill: this.state.Skill.toLowerCase()
    };
    axios.post("http://localhost:4000/api/skills/addSkill", data).then(res => {
      const flag = res.data.data;
      console.log(flag);
      if (flag === undefined) {
        var msg="You Have Already Added:" + data.skill
        var html="<span style='color:#ffdd42'>"+msg+"</span>"
        M.toast({html:html })
      } else {
        var msg="You Added:" + flag.skill
        var html="<span style='color:green'>"+msg+"</span>"
        M.toast({html:html })
      }
    });
  };
  DelSkill = e => {
    e.preventDefault();
    const skill=this.state.Skill.toLowerCase()
    const url = "http://localhost:4000/api/skills/delete/" + skill;
    axios.delete(url).then(res => {
        if(res.data.data===null){
            var msg="Deleted The Skill: "+skill
            var html="<span style='color:#green'>"+msg+"</span>"
            M.toast({html:html })
        }
      if(res.data.data===undefined){
        var msg="Failed to Delete The Skill: \n"+skill
        var html="<span style='color:#ffdd42'>"+msg+"</span>"
        M.toast({html:html })
      }
     
    });
  };
  ShowSkill = e => {
    e.preventDefault();
    const url='http://localhost:4000/api/skills/getSkill'
    axios.get(url).then(res => {
        console.log(res.data.data.length)
        var array=[]
        for(var x=0; x<res.data.data.length;x++){
            //console.log(res.data.data[x].skill)
            array.push(res.data.data[x].skill)
        }
        console.log(array)
        this.setState({getRes:array})
        console.log('Array',this.state.getRes)
    });
  };

  render() {
    return (
      <div className="container">
        <div class="row" style={{ marginTop: "100px" }}>
          <h3>Skill Panel</h3>
          <input
            type="text"
            placeholder="Enter Skill.."
            onChange={this.onChange}
          />
        </div>
        <div class="row">
          <div className="col s4">
            <button
              type="submit"
              onClick={this.AddSkill}
              class="waves-effect waves-light btn"
            >
              Add Skill
              <i class="material-icons left">add</i>
            </button>
          </div>
          <div className="col s4" style={{marginRight:'-330'}}>
            <button
              type="submit"
              onClick={this.DelSkill}
              class="waves-effect waves-light btn"
            >
              Delete Skill
              <i class="material-icons left">delete</i>
            </button>
          </div>
          <div className="col s4" style={{marginRight:'130px'}}>
            <button
              type="submit"
              onClick={this.ShowSkill}
              class="waves-effect waves-light btn"
            >
              View Skills
              <i class="material-icons left">search</i>
            </button>
          </div>
        </div>
        <div className='row'>
              <SkillChips skills={this.state.getRes}/>
          </div>
      </div>
    );
  }
}

export default SkillController;
