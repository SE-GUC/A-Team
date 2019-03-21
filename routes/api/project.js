const express= require('express');
const router= express.Router();
const moment= require('moment')
const mongoose = require('mongoose')
const Tasks = require('../../models/Task') 
const Task= require('../../models/Project') 

router.get('/', (req, res) => {
    Task.find().then(proj=>res.send(proj))
});
router.post('/add', async (req,res) => {
    const { id, project_name, date_Posted, partner_responsible,consultancy_agency_sponsor,Tasks }  = req.body
    const project = await Task.findOne({project_name})
    if(project) return res.status(400).json({error: 'Project Id is Taken'})
    const newproj = new Task({
           id,
           project_name,
           date_Posted,
           partner_responsible,
           consultancy_agency_sponsor,
           Tasks 
        })
    newproj
    .save()
    .then(proj => res.json({data: proj}))
    .catch(err => res.json({err: 'Can not create Project'}))
});
router.get('/task',(req,res)=>{
    Tasks.find().then(task=>res.send(task))
});
router.post('/add_project', async (req,res)=>{
    const spirnt1 = new Task({
        id:1,
        name:"Octane",
        time_of_post: new Date(),
        time_of_review:'',
        monetary_compensation: 2000,
        price:898989,
        time_of_assingment:'',
        is_assigned:false,
        assigned_id:'',
        time_expected:"10 days",
        level_of_comitment:"High",
        is_reviewed:false,
        experience_needed:"1 week",
        description:"Sprint1",
        p_id:'',
        skills:["Time Managment"],
        response_from_admin:'',
        admin_id:1,
        applicants:[1,2,3] 
        })
        const spirnt2 = new Task({
            id:2,
            name:"Sprint2",
            time_of_post: new Date(),
            time_of_review:'',
            monetary_compensation: 2000,
            price:898989,
            time_of_assingment:'',
            is_assigned:false,
            assigned_id:'',
            time_expected:"7 days",
            level_of_comitment:"High",
            is_reviewed:false,
            experience_needed:"1 day",
            description:"Sprint 2 from SE course",
            p_id:'',
            skills:["Apex Legends"],
            response_from_admin:'',
            admin_id:1,
            applicants:[8,7,6] 
            })
    const newproj = new Task({
        id:1,
        project_name:"Software Engineering",
        date_Posted: new Date(),
        partner_responsible:2,  //fake id
        consultancy_agency_sponsor:3, //fake id
        Tasks:[spirnt1,spirnt2]
     })
     newproj
     .save()
     .then(task => res.json({data: task}))
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