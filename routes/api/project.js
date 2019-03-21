const express= require('express');
const router= express.Router();
const moment= require('moment')
const mongoose = require('mongoose')
const Tasks = require('../../models/Task') 
const Task= require('../../models/Project') 


router.post('/add_project', async (req,res)=>{
    const spirnt1 = new Task({
        name:"Project Task 1",
        time_of_post: new Date(),
        time_of_review:'',
        monetary_compensation: 2000,
        price:898989,
        time_of_assingment:'',
        is_assigned:false,
        assigned_id:'',
        time_expected:"29 Days",
        level_of_comitment:"High",
        is_reviewed:false,
        experience_needed:"11111111111111111 week",
        description:"Sprint11111111111111111111111111111111111111",
        p_id:'',
        skills:["Time Managment"],
        response_from_admin:'',
        admin_id:1,
        applicants:[1,2,3] 
        })
    const newproj = new Task({
        project_name:"Software Engineering",
        date_Posted: new Date(),
        partner_responsible:2,  //fake id
        consultancy_agency_sponsor:3, //fake id
        Tasks:[].push(spirnt1)
     })
     
     newproj
     .save()
     .then(res.json(newproj))
     .catch()
     console.log(newproj)
});
router.post('/add_task', async (req,res) => {
    const newTask = new Task({
        id:1,
        time_of_post: new Date('01.02.2012'),
        time_of_review:new Date('01.02.2012'),
        monetary_compensation: 2000,
        price:898989,
        time_of_assingment:new Date('01.02.2012'),
        is_assigned:false,
        assigned_id:'',
        time_expected:"3 days",
        level_of_comitment:"High",
        is_reviewed:false,
        experience_needed:"6 yrs",
        description:"Be aware of the new kill leader",
        p_id:'',
        skills:["Apex Legends"],
        response_from_admin:'',
        admin_id:1,
        applicants:[1,2,3] 
        })
    newTask
    .save()
    .then(task => res.json({data: task}))
    
})


module.exports=router