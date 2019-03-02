const express= require('express');
const router= express.Router();
const moment= require('moment');
const Task= require('../../models/Task');


const Table_Tasks=[
    new Task('1', "21/02/2019 8:15 PM","",'5678','20000',"",false,'',"3 weeks","High",false,'3',"I need someone to Apply unit tests on my code",'4',["Java","programming"],"", '1') ,
    new Task('2', "21/02/2019 7:15 PM","",'568','200',"",false,'',"3 days","Low",false,'3',"I need someone to Apply unit tests on my code",'4',["Chinese","English","Translation"],"", '1')  

];
    
//Show All Tasks/

router.get('/',(req,res)=> res.json(Table_Tasks))
router.post('/add',(req,res)=>{
    
const monetary_compensation=req.body.monetary_compensation
const p_id=req.body.p_id //Partner's ID
const price=req.body.price
const time_expected= req.body.time_expected
const level_of_comitment= req.body.level_of_comitment
const experience_needed= req.body.experience_needed
const description= req.body.description
const skills= req.body.skills

const task={
    id: Task.length+1,
    time_of_post:moment().format("DD/MM/YYYY h:mm:ss a"),
    time_of_review: "",
    monetary_compensation:monetary_compensation,
    price:price,
    time_of_assingment:"",
    is_assigned:false,
    assigned_id:'',
    time_expected:time_expected,
    level_of_comitment:level_of_comitment,
    is_reviewed: false,
    experience_needed:experience_needed,
    description:description,
    p_id: p_id,
    skills:skills,
    response_from_admin:"",
    admin_id:'1' //Assume it is assigned for youssef the admin
}
    Table_Tasks.push(task)
    res.send(Task);

})

module.exports=router